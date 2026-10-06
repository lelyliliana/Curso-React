# Unidad 32: Build y publicación de una SPA

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Construir, previsualizar y publicar React comprobando rutas, base path, assets y configuración.

## 1. Build

```bash
npm run build
```

Vite genera salida optimizada, normalmente en `dist/`.

No edites dist manualmente.

## 2. Preview

```bash
npm run preview
```

Permite inspeccionar el build localmente.

No garantiza la misma configuración de routing/caché que el hosting final.

## 3. Base path

Si publicas bajo un subdirectorio, la aplicación y sus assets deben conocer la base apropiada.

Configura Vite/router según hosting.

No asumas raíz de dominio.

## 4. History routing

Una ruta interna puede funcionar navegando desde la SPA y fallar al recargar porque el servidor recibe esa URL directamente.

El hosting necesita fallback/rewrite a index.html o una estrategia compatible como hash routing cuando sea apropiado.

## 5. 404 de la app

Un fallback SPA no significa que cualquier ruta sea válida.

El router debe seguir mostrando su página no encontrada para rutas no definidas.

## 6. Configuración

Comprueba que el build productivo usa endpoint correcto y no contiene localhost o secretos.

## 7. Source maps

Ayudan a diagnosticar producción, pero exponen más detalle del código transformado.

Decide política según proyecto y observabilidad; no los trates como mecanismo principal de seguridad.

## 8. Caché

Assets con hash pueden cachearse agresivamente; index.html suele requerir otra estrategia para descubrir versiones nuevas.

El hosting/CDN controla headers.

## 9. Auditoría pública

Desde la URL desplegada:

- recarga ruta interna;
- abre URL directa;
- revisa Network/Console;
- responsive;
- accesibilidad;
- API/CORS;
- HTTPS.

## 10. Práctica guiada

Publica build y prueba inicio, detalle, 404, refresh y assets.

## 11. Errores frecuentes

- solo probar dev;
- base incorrecta;
- refresh 404;
- localhost en build;
- editar dist;
- asumir caché.

## 12. Reto
SPA publicada donde una ruta interna funciona al abrirse directamente.

## 13. Autoevaluación

1. ¿Qué produce build?
2. ¿Preview = producción?
3. ¿Qué es base path?
4. ¿Por qué refresh 404?
5. ¿Quién controla cache?
6. ¿Qué auditar?

## 14. Checklist

- [ ] Build reproducible.
- [ ] Base correcta.
- [ ] Routing directo.
- [ ] Config productiva.
- [ ] Auditoría pública.

Continúa con taller.

## Laboratorio desarrollado: Construcción y publicación estática

### Modelo, contrato y decisiones

npm run build genera dist con recursos preparados. El base relativo de Vite permite ubicar recursos bajo una carpeta del sitio. HashRouter conserva rutas internas sin exigir reescritura a index.html para cada detalle, porque el fragmento no se envía como ruta HTTP. La API del plugin está en el proceso Node y no se incorpora a dist: publicar el frontend no publica endpoints. Una demostración estática puede mostrar tareas locales; el laboratorio remoto requiere su servidor o una API real configurada.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/32. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

El enlace abre el proyecto con una ruta hash compartible.

### Implementación completa del componente

```jsx
import { Link } from "react-router";
export default function App() {
  return (
    <section>
      <h2>Build y rutas en hosting estático</h2>
      <p>
        Los enlaces con hash conservan rutas internas sin exigir reescrituras
        del servidor.
      </p>
      <Link to="/proyecto">Abrir proyecto construido</Link>
      <p>
        La API local sigue necesitando el proceso de laboratorio; dist no la
        contiene.
      </p>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Construye, abre preview y recarga /#/proyecto y un detalle del laboratorio 18. Después sirve únicamente dist y registra qué ocurre al cargar el catálogo.

**Casos que debes registrar:** Build; preview; ruta directa; subcarpeta; estático sin API; tareas locales.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 31: Configuración y variables de entorno](../unidad31-configuracion/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 33: Taller integrador React](../unidad33-taller/README.md)
