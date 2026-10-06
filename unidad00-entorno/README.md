# Unidad 00: Entorno y primer proyecto React

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Crear, ejecutar, construir y diagnosticar una aplicación React con una herramienta moderna.

## Requisitos
Antes de React debes manejar:

- HTML/CSS;
- JavaScript moderno;
- módulos ES;
- npm;
- DOM/eventos a nivel conceptual.

React no reemplaza esos fundamentos.

Para ejecutar los laboratorios del curso sigue [ENTORNO.md](../docs/ENTORNO.md): instala desde su lockfile e inicia la raíz común. La creación de un proyecto nuevo que se explica a continuación es una práctica independiente; latest puede generar versiones distintas de las verificadas aquí.

## 1. Node y npm

Comprueba:

```bash
node --version
npm --version
```

El proyecto puede exigir una versión mínima. Lee siempre package.json/documentación del proyecto.

## 2. Vite

Una forma moderna de iniciar:

```bash
npm create vite@latest
```

Selecciona React y la variante apropiada al curso/proyecto.

Después:

```bash
npm install
npm run dev
```

No memorices el asistente: entiende qué archivos crea.

## 3. Estructura

Ejemplo:

```text
index.html
package.json
src/
├── main.jsx
├── App.jsx
└── ...
```

`index.html` sigue existiendo. React no elimina la Web.

## 4. Punto de entrada

Conceptualmente:

```jsx
createRoot(document.getElementById("root"))
  .render(<App />);
```

React toma control de una raíz concreta y renderiza el árbol de componentes allí.

## 5. Dev server

```bash
npm run dev
```

Sirve archivos y ofrece herramientas de desarrollo/HMR según Vite.

No es el servidor de producción.

## 6. Build

```bash
npm run build
```

Genera recursos optimizados en una carpeta como `dist/`.

No edites dist manualmente: es salida generada.

## 7. Preview

```bash
npm run preview
```

Permite inspeccionar localmente el build.

No equivale necesariamente a la infraestructura productiva final.

## 8. node_modules

No se versiona.

Sí se versionan normalmente:

- package.json;
- package-lock.json.

## 9. Diagnóstico

Si la pantalla está vacía:

1. ¿dev server inició?
2. ¿URL correcta?
3. ¿Console?
4. ¿Network?
5. ¿error de import?
6. ¿componente lanzó durante render?

“Pantalla blanca” no es una causa.

## 10. React DevTools

La extensión/herramienta de desarrollo permite inspeccionar árbol, props y estado.

La utilizaremos después; no reemplaza Console/Network del navegador.

## 11. Práctica guiada

1. crea proyecto;
2. identifica index/main/App;
3. cambia contenido;
4. provoca import incorrecto;
5. diagnostica;
6. test/build;
7. preview.

## 12. Errores frecuentes

- subir node_modules;
- editar dist;
- pensar que Vite = React;
- confundir dev server con producción;
- culpar React sin revisar Console.

## 13. Reto
Proyecto clonable con README mínimo y comandos dev/build/preview verificados.

## 14. Autoevaluación

1. ¿Vite y React son lo mismo?
2. ¿Qué hace createRoot?
3. ¿dist se edita?
4. ¿Qué es dev server?
5. ¿Qué archivos fijan dependencias?

## 15. Checklist

- [ ] Ejecuto proyecto.
- [ ] Comprendo estructura.
- [ ] Diagnostico arranque.
- [ ] Construyo build.

Continúa con modelo mental.

## Laboratorio desarrollado: Proyecto, entrada y transformación

### Modelo, contrato y decisiones

Vite entrega módulos y transforma JSX. React se monta desde src/main.jsx usando createRoot sobre el elemento root del HTML. El componente de la unidad se carga desde el índice común; no necesitas generar otro proyecto para cada ejercicio. Node ejecuta las herramientas y la API local, mientras que document y la interfaz pertenecen al navegador. Una instalación de Node no convierte JSX en un archivo que puedas abrir directamente con doble clic.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/00. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

La pantalla contiene React cargó correctamente.

### Implementación completa del componente

```jsx
export default function App() {
  return (
    <section>
      <h2>Primer componente</h2>
      <p>React cargó correctamente.</p>
      <p>Editar este texto permite observar la actualización del módulo.</p>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Cambia el texto del primer componente. Después introduce y corrige una etiqueta JSX sin cerrar; compara un fallo de compilación con una ruta de importación equivocada.

**Casos que debes registrar:** Texto original y modificado; import inexistente; etiqueta sin cierre.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 01: Modelo mental de React](../unidad01-modelo-mental/README.md)
