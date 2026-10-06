"""Recorrido real de los laboratorios y del proyecto con Firefox."""
import json
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from threading import Thread
import subprocess
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

RAIZ=Path(__file__).resolve().parents[1]
cuenta=0

def comprobar(valor,mensaje):
    global cuenta
    assert valor,mensaje
    cuenta+=1

estatico=None
servidor=subprocess.Popen(['node','tests/servidor-pruebas.js'],cwd=RAIZ,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
try:
    origen=''
    for _ in range(20):
        linea=servidor.stdout.readline().strip()
        if linea.startswith('http://127.0.0.1:'):
            origen=linea;break
    assert origen,'No se obtuvo el origen del servidor Vite'
    with sync_playwright() as p:
        browser=p.firefox.launch();context=browser.new_context();page=context.new_page()
        errores=[]
        page.on('pageerror',lambda error:errores.append(str(error)))
        page.on('response',lambda response:errores.append(f'{response.status} {response.url}') if response.status>=400 and '/api/catalogo' not in response.url else None)
        page.goto(origen+'/#/')
        expect(page.get_by_role('heading',name='Laboratorios del curso React')).to_be_visible()
        comprobar(page.locator('main ol li').count()==35,'Índice de 35 unidades')
        for n in range(33):
            page.goto(origen+f'/#/laboratorio/{n:02d}')
            expect(page.locator('main h1')).to_contain_text(f'Unidad {n:02d}')
            expect(page.locator('main h2').first).to_be_visible()
            for ancho in [320,768,1440]:
                page.set_viewport_size({'width':ancho,'height':900})
                for escala in ['100%','200%']:
                    page.evaluate('(v)=>document.documentElement.style.fontSize=v',escala)
                    comprobar(page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'),f'Desbordamiento: {n}, {ancho}, {escala}')
            page.set_viewport_size({'width':1000,'height':800});page.evaluate("document.documentElement.style.fontSize='100%'")
            if n==0:expect(page.locator('main')).to_contain_text('React cargó correctamente.')
            elif n==1:
                page.get_by_label('Nombre ficticio').fill('Luis');expect(page.get_by_role('status')).to_have_text('Hola, Luis')
            elif n==2:comprobar(page.locator('main img').count()==0,'JSX escapa texto')
            elif n==3:
                page.get_by_role('button',name='Sumar en Primero').click()
                expect(page.locator('section').filter(has=page.get_by_role('heading',name='Primero',exact=True)).last).to_contain_text('Cantidad: 1')
                expect(page.locator('section').filter(has=page.get_by_role('heading',name='Segundo',exact=True)).last).to_contain_text('Cantidad: 0')
            elif n==4:expect(page.locator('main')).to_contain_text('Cupos: 0')
            elif n==5:expect(page.get_by_role('link',name='Continuar con eventos')).to_have_attribute('href','#/laboratorio/06')
            elif n==6:
                page.get_by_role('button',name='Enviar formulario').click();expect(page.get_by_role('status')).to_have_text('Formulario recibido sin navegar.')
                page.get_by_role('button',name='Acción local').click();expect(page.get_by_role('status')).to_have_text('Pulsado: Acción local')
            elif n==7:
                page.get_by_role('button',name='Sumar tres').click();expect(page.get_by_role('status')).to_have_text('Cantidad: 3')
            elif n==8:
                page.get_by_label('Estado simulado').select_option('empty');expect(page.get_by_role('status')).to_have_text('No hay resultados')
                page.get_by_label('Estado simulado').select_option('error');expect(page.get_by_role('alert')).to_have_text('Falló la operación')
            elif n==9:
                page.get_by_label('Alias de Ana').fill('Alias persistente');page.get_by_role('button',name='Invertir orden').click()
                expect(page.get_by_label('Alias de Ana')).to_have_value('Alias persistente');expect(page.get_by_label('Alias de Luis')).to_have_value('Luis')
            elif n in [10,24]:
                page.get_by_label('Nombre ficticio').fill(' ');page.get_by_role('button',name='Guardar nombre').click();expect(page.get_by_role('alert')).to_contain_text('2 a 40')
                page.get_by_label('Nombre ficticio').fill(' Ana ');page.get_by_role('button',name='Guardar nombre').click();expect(page.get_by_role('status')).to_have_text('Recibido: Ana')
            elif n==11:
                page.get_by_label('Control A').fill('5');expect(page.get_by_label('Control B')).to_have_value('5');expect(page.get_by_role('status')).to_have_text('Total: 25')
            elif n==12:
                page.get_by_label('Buscar recurso').fill('React');expect(page.locator('main ul li')).to_have_count(1)
                expect(page).to_have_title('1 recursos (React)')
            elif n==13:
                page.get_by_role('button',name='Ocultar reloj').click();expect(page.locator('main')).to_contain_text('Reloj desmontado')
                page.get_by_role('button',name='Mostrar reloj').click();expect(page.get_by_role('status')).to_have_text('Ticks: 0')
            elif n==14:
                expect(page.get_by_role('status')).to_have_text('success');page.get_by_label('Escenario del efecto').select_option('vacio');expect(page.get_by_role('status')).to_have_text('empty')
            elif n in [15,16,25]:
                page.get_by_role('button',name='Cargar catálogo').click();expect(page.get_by_role('status')).to_have_text('2 recursos cargados.')
            elif n==17:
                page.get_by_role('button',name='Sumar A',exact=True).click();expect(page.locator('main')).to_contain_text('Cantidad: 1');expect(page.locator('main')).to_contain_text('Cantidad: 10')
            elif n==18:
                page.get_by_label('Buscar en URL').fill('React');comprobar('?q=React' in page.url,'Filtro en URL');page.reload();expect(page.get_by_label('Buscar en URL')).to_have_value('React')
                page.get_by_role('link',name='React',exact=True).click();expect(page.locator('main')).to_contain_text('Detalle: React')
                page.goto(origen+'/#/laboratorio/18/detalle/99');expect(page.locator('main')).to_contain_text('Recurso no encontrado')
            elif n==19:
                page.get_by_role('button',name='Cambiar tema').click();expect(page.locator('main')).to_contain_text('Tema: oscuro')
            elif n==20:
                page.get_by_role('button',name='restar',exact=True).click();expect(page.get_by_role('status')).to_have_text('Cantidad: 0')
                page.get_by_role('button',name='sumar',exact=True).click();expect(page.get_by_role('status')).to_have_text('Cantidad: 1')
            elif n==21:
                page.get_by_label('Filtro local de la vista').select_option('completadas');expect(page.locator('main ul li')).to_have_count(1);expect(page.locator('main ul')).to_have_text('Practicar')
            elif n in [22,30]:expect(page.get_by_role('button',name='Agregar tarea')).to_be_visible()
            elif n==23:
                page.get_by_role('button',name='Agregar recurso').click();expect(page.get_by_role('status')).to_have_text('1 recursos disponibles.')
                page.get_by_role('button',name='Limpiar recursos').click();expect(page.get_by_role('status')).to_have_text('0 recursos disponibles.');expect(page.get_by_role('button',name='Agregar recurso')).to_be_focused()
            elif n==26:
                page.get_by_role('button',name='Provocar fallo de render').click();expect(page.get_by_role('button',name='Reintentar componente')).to_be_visible()
                expect(page.locator('main')).to_contain_text('Contenido externo preservado.')
                page.get_by_role('button',name='Reintentar componente').click();expect(page.locator('main')).to_contain_text('Widget operativo.')
                page.get_by_role('button',name='Provocar fallo de evento').click();expect(page.locator('main')).to_contain_text('Fallo de acción')
                errores[:]=[e for e in errores if 'Fallo deliberado del laboratorio' not in e]
            elif n==27:
                comprobar(json.loads(page.locator('pre').inner_text())['resultado']==15,'Conversión numérica')
            elif n==28:
                page.get_by_role('button',name='Actualizar padre').click();expect(page.locator('main')).to_contain_text('Cantidad: 1')
            elif n==29:
                page.get_by_label('Filtrar recursos').fill('Recurso 99');page.get_by_role('button',name='Recurso 99',exact=True).click();expect(page.locator('main')).to_contain_text('Elegido: Recurso 99')
            elif n==31:expect(page.locator('main')).to_contain_text('no es un secreto')
            elif n==32:expect(page.get_by_role('link',name='Abrir proyecto construido')).to_be_visible()
            comprobar(not errores,f'Errores inesperados {n}: {errores}')
        # Acciones actuales de React 19 (extensión opcional).
        page.goto(origen+'/#/laboratorio/10')
        page.get_by_text('Extensión: acciones de React 19',exact=True).click()
        accion=page.get_by_role('heading',name='Acción de formulario en React 19').locator('..')
        accion.get_by_label('Nombre para acción local').fill(' Ana ')
        accion.get_by_role('button',name='Procesar nombre').click()
        expect(accion.get_by_role('status')).to_have_text('Acción local completada: Ana')
        expect(accion.get_by_label('Nombre para acción local')).to_have_value('')
        comprobar(True,'Acción React 19 en navegador real')
        # Proyecto y persistencia.
        page.goto(origen+'/#/proyecto');expect(page.get_by_role('heading',name='Gestor de tareas')).to_be_visible()
        entrada=page.get_by_label('Título (1 a 80 caracteres)')
        def agregar(nombre):
            entrada.fill(nombre);page.get_by_role('button',name='Agregar tarea',exact=True).click()
        agregar('Leer');agregar('Practicar')
        page.get_by_role('button',name='Completar: Leer',exact=True).click();expect(entrada).to_be_focused()
        page.get_by_label('Estado',exact=True).select_option('completadas');expect(page.locator('main ul li')).to_have_count(1)
        page.get_by_role('button',name='Editar: Leer',exact=True).click();entrada.fill('Estudiar');page.get_by_role('button',name='Guardar cambios',exact=True).click()
        page.get_by_role('button',name='Editar: Estudiar',exact=True).click();entrada.fill('No guardar');page.get_by_role('button',name='Cancelar edición').click()
        expect(page.get_by_role('button',name='Editar: Estudiar',exact=True)).to_be_visible()
        page.get_by_label('Estado',exact=True).select_option('todas');page.get_by_label('Buscar en títulos').fill('PRACT')
        page.get_by_role('button',name='Eliminar: Practicar',exact=True).click();page.get_by_label('Buscar en títulos').fill('')
        page.reload();expect(page.get_by_role('button',name='Editar: Estudiar',exact=True)).to_be_visible()
        agregar('<img src=x onerror=alert(1)>');comprobar(page.locator('main img').count()==0,'Tarea como texto')
        agregar('x'*80)
        for ancho in [320,768,1440]:
            page.set_viewport_size({'width':ancho,'height':900})
            for escala in ['100%','200%']:
                page.evaluate('(v)=>document.documentElement.style.fontSize=v',escala)
                comprobar(page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'),f'Proyecto {ancho} {escala}')
        page.evaluate("localStorage.setItem('curso-react-tareas-v1','{corrupto')");page.reload()
        expect(page.get_by_role('alert')).to_contain_text('No se pudo leer')
        comprobar(page.evaluate("localStorage.getItem('curso-react-tareas-v1')")=='{corrupto','No sobrescribe durante montaje')
        expect(page.locator('main ul li')).to_have_count(0)
        page.goto(origen+'/#/proyecto/catalogo');expect(page.get_by_role('heading',name='Catálogo de laboratorio')).to_be_visible()
        for escenario,mensaje in [('normal','2 recursos cargados.'),('vacio','No hay resultados.'),('http404','http:'),('http500','http:'),('jsoninvalido','json:'),('esquemainvalido','esquema:'),('lento','timeout:'),('marcado','2 recursos cargados.')]:
            page.get_by_label('Respuesta de laboratorio').select_option(escenario);page.get_by_role('button',name='Cargar catálogo').click();expect(page.get_by_role('status')).to_contain_text(mensaje)
            comprobar(page.get_by_role('button',name='Cancelar solicitud').is_disabled(),'Cancelar solo en carga')
        comprobar(page.locator('main img').count()==0,'Respuesta de red como texto')
        page.get_by_label('Respuesta de laboratorio').select_option('lento');page.get_by_role('button',name='Cargar catálogo').click();page.get_by_role('button',name='Cancelar solicitud').click();expect(page.get_by_role('status')).to_contain_text('cancelada:');expect(page.get_by_role('button',name='Cargar catálogo')).to_be_focused()
        page.get_by_label('Respuesta de laboratorio').select_option('lento');page.get_by_role('button',name='Cargar catálogo').click();page.get_by_label('Respuesta de laboratorio').select_option('normal');page.get_by_role('button',name='Cargar catálogo').click();expect(page.get_by_role('status')).to_have_text('2 recursos cargados.');page.wait_for_timeout(850);expect(page.get_by_role('status')).to_have_text('2 recursos cargados.')
        # Otra sesión con escritura rechazada.
        otro=browser.new_context();otro.add_init_script("Storage.prototype.setItem=function(){throw new DOMException('Cuota','QuotaExceededError')}")
        fallo=otro.new_page();fallo.goto(origen+'/#/proyecto');fallo.get_by_label('Título (1 a 80 caracteres)').fill('En memoria');fallo.get_by_role('button',name='Agregar tarea').click()
        expect(fallo.get_by_role('alert')).to_contain_text('no se pudo guardar');expect(fallo.locator('main ul')).to_contain_text('En memoria')
        comprobar(not errores,f'Errores inesperados: {errores}')
        # Build estática bajo subcarpeta: no ejecuta el plugin de API.
        class Estatico(SimpleHTTPRequestHandler):
            def __init__(self,*args,**kwargs):
                super().__init__(*args,directory=str(RAIZ/'dist'),**kwargs)
            def do_GET(self):
                if not self.path.startswith('/curso-react/'):
                    self.send_error(404);return
                self.path=self.path[len('/curso-react'):]
                super().do_GET()
            def log_message(self,*args):
                pass
        estatico=ThreadingHTTPServer(('127.0.0.1',0),Estatico)
        Thread(target=estatico.serve_forever,daemon=True).start()
        base=f'http://127.0.0.1:{estatico.server_address[1]}/curso-react/'
        construido=browser.new_context();web=construido.new_page()
        fallos_build=[];web.on('pageerror',lambda error:fallos_build.append(str(error)))
        web.goto(base+'#/proyecto');expect(web.get_by_role('heading',name='Gestor de tareas')).to_be_visible()
        web.get_by_label('Título (1 a 80 caracteres)').fill('Desde dist')
        web.get_by_role('button',name='Agregar tarea').click();web.reload()
        expect(web.get_by_role('button',name='Editar: Desde dist')).to_be_visible()
        web.goto(base+'#/laboratorio/18/detalle/1');expect(web.locator('main')).to_contain_text('Detalle: React')
        web.reload();expect(web.locator('main')).to_contain_text('Detalle: React')
        web.goto(base+'#/proyecto/catalogo');web.get_by_role('button',name='Cargar catálogo').click()
        expect(web.get_by_role('status')).to_contain_text('http: HTTP 404')
        comprobar(not fallos_build,f'Build en subcarpeta: {fallos_build}')
        construido.close()
        otro.close();context.close();browser.close()
    print(f'{cuenta} comprobaciones y recorridos de interacción correctos en Firefox.')
finally:
    if estatico is not None:
        estatico.shutdown();estatico.server_close()
    servidor.terminate()
    try:servidor.wait(timeout=10)
    except subprocess.TimeoutExpired:servidor.kill();servidor.wait()
