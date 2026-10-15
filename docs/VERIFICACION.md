# Verificar el curso y el proyecto

[Índice](../README.md) · [Entorno](ENTORNO.md)

## Resultados de la versión 1.2

Comprobación del 14 de octubre de 2026 (Colombia), en Linux con Node.js 24.19.0 y las dependencias fijadas del curso.

| Comprobación | Resultado |
|---|---|
| Reglas, reducer, migración y HTTP local real | 32 pruebas Node aprobadas |
| Componentes e interacciones | 21 pruebas Vitest aprobadas |
| Sintaxis y referencias | 35 unidades, 69 módulos y 115 fragmentos comprobados; enlaces locales válidos |
| Construcción | Build de la SPA, 33 laboratorios, diez extensiones y proyecto correcto |
| Navegador real | 325 comprobaciones y recorridos correctos en Chromium 151.0.7922.34 |
| Pantallas y texto ampliado | Laboratorios/extensiones a 320, 768 y 1440 px, con texto al 100% y 200%, sin desbordamiento horizontal |
| Flujos | CRUD, cancelación de edición, guardado, JSON corrupto, escritura rechazada, escenarios remotos y respuesta obsoleta comprobados |
| Publicación estática | Tareas y detalle directo funcionan bajo subcarpeta; catálogo informa HTTP 404 al faltar la API; una extensión también funciona desde el build |
| Inspección de capturas | Formulario a 320 px y hooks a 1280 px revisados |
| Límite de depuración | Vacío/espacios devuelven null y "12" produce el número 15 |

El recorrido de navegador puede realizar varias expectativas de interacción por comprobación contada; 325 no es un porcentaje de cobertura. El caso de búsqueda en URL espera explícitamente la navegación antes de comprobarla, para no confundir una actualización pendiente con un resultado incorrecto.

En esta revisión se ejecutó Chromium en Linux. El workflow mantiene Firefox y la matriz de tres sistemas; esa configuración no equivale a afirmar que se hayan observado aquí sus resultados para este commit. No se probó con lector de pantalla ni dispositivos físicos. El fallo deliberado de render de la unidad 26 se distingue de los errores inesperados del recorrido.

## Comandos del proyecto

Instala primero con npm ci. Desde la raíz, ejecuta los comandos por separado:

```bash
npm run check
```

```bash
npm test
```

```bash
npm run build
```

check revisa sintaxis de archivos JavaScript/JSX y fragmentos de las lecciones, imports y enlaces locales, secuencia, desarrollos y recursos de las 35 unidades. También detecta marcas internas de citación y codificación dañada en Markdown. Los fragmentos no se concatenan: algunos son alternativas o requieren un contexto explicado en el texto. Analizar sintaxis no ejecuta un fragmento ni demuestra que cada nombre esté definido fuera de su contexto.

Las pruebas de Node verifican contratos numéricos, tareas, CRUD sin mutaciones, persistencia versionada, contenido corrupto, reducer y categorías de red con HTTP local real. Las de Vitest/Testing Library comprueban formularios, callbacks, edición/cancelación/eliminación por identidad, guardado fallido, estados remotos y resultados obsoletos con clientes controlados. También se verifica la extensión de acciones de formulario de React 19.

Los mocks sustituyen límites explícitos: cliente remoto y escritura de Storage. No convierten todos los componentes hijos en falsos ni dependen de una API pública. build compila la galería, las 33 unidades con laboratorio y ambas vistas del proyecto y las diez extensiones resueltas.

## Navegador real

La comprobación opcional utiliza Python 3.12 o posterior y Playwright con Firefox:

```bash
python -m pip install -r tests/requirements.txt
```

```bash
python -m playwright install firefox
```

```bash
python tests/navegador.py
```

Windows puede utilizar py; Ubuntu/macOS pueden usar python3. Si Ubuntu indica bibliotecas faltantes, sigue el diagnóstico de Playwright y utiliza `python -m playwright install --with-deps firefox` cuando corresponda.

El script inicia Vite en un puerto libre y utiliza perfiles temporales sin tocar tareas de tu navegador habitual. Recorre los 33 laboratorios, las diez extensiones resueltas, acciones y vistas del proyecto, respuestas controladas, corrupción y cuota de almacenamiento. Comprueba ancho de 320, 768 y 1440 píxeles con texto normal y duplicado. La extensión opcional de acciones se recorre también en navegador. Después se sirve solo dist bajo una subcarpeta para comprobar rutas directas, tareas y la ausencia real de API en una publicación estática. Ejecuta npm run build antes del script de navegador.

El motor predeterminado sigue siendo Firefox. Para usar otro motor instalado con Playwright, configura `REACT_BROWSER` como `chromium` o `webkit` en tu terminal antes de ejecutar el script. `REACT_BROWSER_EXECUTABLE` permite señalar un ejecutable compatible ya instalado; no es necesario para las instalaciones habituales de Playwright. El resultado informa motor y versión utilizados.

## Automatización y límites

El [workflow](../.github/workflows/verificar.yml) instala desde lockfile y ejecuta comprobaciones, pruebas, build y navegador en Ubuntu, Windows y macOS con Node 24.

Un resultado verde cubre esos casos. No certifica ausencia de todos los errores, toda la compatibilidad entre navegadores ni accesibilidad completa. Recorre teclado, foco, títulos y mensajes con lector de pantalla; ensaya en los navegadores reales de tu audiencia. Un fallo deliberado de la unidad 26 puede aparecer en Console de desarrollo sin ser una excepción inesperada de las demás unidades.

No cambies casos esperados solo para ocultar un fallo: contrástalos primero con el contrato. Si extiendes una regla, añade una evidencia que detecte una regresión de esa regla.
