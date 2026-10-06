# Verificar el curso y el proyecto

[Índice](../README.md) · [Entorno](ENTORNO.md)

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

check revisa sintaxis de archivos JavaScript/JSX y fragmentos de las lecciones, imports y enlaces locales, secuencia y recursos de las 35 unidades. Los fragmentos no se concatenan: algunos son alternativas o requieren un contexto explicado en el texto. Analizar sintaxis no ejecuta un fragmento ni demuestra que cada nombre esté definido fuera de su contexto.

Las pruebas de Node verifican contratos numéricos, tareas, CRUD sin mutaciones, persistencia versionada, contenido corrupto, reducer y categorías de red con HTTP local real. Las de Vitest/Testing Library comprueban formularios, callbacks, edición/cancelación/eliminación por identidad, guardado fallido, estados remotos y resultados obsoletos con clientes controlados. También se verifica la extensión de acciones de formulario de React 19.

Los mocks sustituyen límites explícitos: cliente remoto y escritura de Storage. No convierten todos los componentes hijos en falsos ni dependen de una API pública. build compila la galería, las 33 unidades con laboratorio y ambas vistas del proyecto.

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

El script inicia Vite en un puerto libre y utiliza perfiles temporales sin tocar tareas de tu navegador habitual. Recorre los 33 laboratorios, acciones y vistas del proyecto, respuestas controladas, corrupción y cuota de almacenamiento. Comprueba ancho de 320, 768 y 1440 píxeles con texto normal y duplicado. La extensión opcional de acciones se recorre también en navegador. Después se sirve solo dist bajo una subcarpeta para comprobar rutas directas, tareas y la ausencia real de API en una publicación estática. Ejecuta npm run build antes del script de navegador.

## Automatización y límites

El [workflow](../.github/workflows/verificar.yml) instala desde lockfile y ejecuta comprobaciones, pruebas, build y navegador en Ubuntu, Windows y macOS con Node 24.

Un resultado verde cubre esos casos. No certifica ausencia de todos los errores, toda la compatibilidad entre navegadores ni accesibilidad completa. Recorre teclado, foco, títulos y mensajes con lector de pantalla; ensaya en los navegadores reales de tu audiencia. Un fallo deliberado de la unidad 26 puede aparecer en Console de desarrollo sin ser una excepción inesperada de las demás unidades.

No cambies casos esperados solo para ocultar un fallo: contrástalos primero con el contrato. Si extiendes una regla, añade una evidencia que detecte una regresión de esa regla.
