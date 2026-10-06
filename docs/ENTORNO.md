# Preparar React en Ubuntu, Windows y macOS

[Índice](../README.md) · [Unidad 00](../unidad00-entorno/README.md) · [Diagnóstico](DIAGNOSTICO_REACT.md)

## 1. Comprobar requisitos

Este curso presupone HTML/CSS y JavaScript: funciones, arrays, objetos, módulos, eventos y Promises. React organiza una interfaz; no elimina esos fundamentos.

Usa un navegador actual y un editor como VS Code. Node ejecuta Vite y las pruebas; la aplicación se ejecuta en el navegador. No necesitas WSL, Docker ni una cuenta de hosting para comenzar.

El entorno de referencia utiliza **Node.js 24 LTS, versión 24.15.0 o posterior de la rama 24**. El manifiesto también permite ramas 26 o posteriores compatibles; la automatización comprueba Node 24. El mínimo incluye requisitos de las herramientas de pruebas, no solo de React.

1. Visita [las descargas oficiales de Node](https://nodejs.org/en/download) y elige la rama 24 LTS para tu sistema y arquitectura.
2. Windows: usa el instalador .msi. macOS: usa el .pkg. Ubuntu: sigue un método Linux documentado allí (gestor de versiones o binario); el paquete de tu distribución puede pertenecer a otra rama.
3. Abre una terminal nueva después de instalar.
4. Ejecuta `node --version` y comprueba que cumple el mínimo.
5. Ejecuta `npm --version` por separado.

Si no se reconoce el comando, revisa instalación y PATH antes de cambiar el código del curso.

## 2. Obtener el curso

En GitHub usa Code > Download ZIP y extrae la carpeta. Puedes usar Git si ya lo conoces, pero no es requisito para estudiar.

Abre la carpeta raíz en VS Code. Debe contener package.json, package-lock.json, index.html, src y las 35 carpetas de unidades. Abrir solo una carpeta ejemplo no proporciona las dependencias del proyecto común.

## 3. Instalar las versiones del curso

En la terminal integrada, dentro de la raíz:

```bash
npm ci
```

Este comando instala el árbol fijado en package-lock.json. Requiere Internet para descargar paquetes la primera vez y puede ejecutar scripts de las dependencias. Usa la copia de este curso y conserva el lockfile; no copies proyectos desconocidos solo porque utilizan el mismo comando.

Se usa el mismo comando en PowerShell (Windows), Bash (Ubuntu) y la terminal de macOS. No se versiona node_modules; se reconstruye con el manifiesto y lockfile.

## 4. Iniciar

Después de terminar la instalación:

```bash
npm run dev
```

Conserva la terminal abierta y abre http://127.0.0.1:5173/. Desde el índice puedes abrir los laboratorios 00 a 32 o el proyecto. Cada unidad indica su URL con hash. No abras index.html mediante file://: Vite transforma JSX y resuelve imports.

Para detener el servidor usa Ctrl+C. Si el puerto está ocupado, detén tu proceso anterior o ejecuta:

```bash
npm run dev -- --port 5174
```

Utiliza entonces 5174 en la dirección. No hace falta abrir puertos del router: el servidor escucha en loopback.

## 5. Modificar y recorrer

Edita el App.jsx de la unidad. Vite actualiza módulos en desarrollo; en algunos cambios puede conservar estado mediante Fast Refresh. Si buscas un caso inicial reproducible, recarga o vuelve a montar el laboratorio. Guardar un archivo no significa siempre reiniciar todas sus variables.

El curso mantiene StrictMode en la raíz. En desarrollo puede repetir renderizaciones y ciclos de efectos para detectar impurezas y falta de cleanup. No lo desactives para ocultar un intervalo duplicado o una escritura durante render.

El servidor proporciona /api/catalogo con respuestas controladas. Un servidor HTML estático distinto no ejecuta ese endpoint. Lee [API_LOCAL.md](API_LOCAL.md) para distinguir laboratorio y hosting.

## 6. Comprobar

Ejecuta cada comando por separado:

```bash
npm run check
```

```bash
npm test
```

```bash
npm run build
```

check analiza rutas y sintaxis de archivos/fragmentos; test comprueba dominio, API y comportamiento de componentes; build verifica la aplicación completa y genera dist. Los detalles y límites están en [VERIFICACION.md](VERIFICACION.md).

## 7. Ver la construcción local

Después de construir:

```bash
npm run preview
```

Abre http://127.0.0.1:4173/. preview sirve la construcción y, en este proyecto, también activa el plugin de API local. Esto no significa que dist contenga un servidor ni que otro hosting tendrá ese endpoint.

El formato opcional del código se aplica con `npm run format`. Esa herramienta cambia presentación; no demuestra corrección de reglas o accesibilidad.

[Continuar con la unidad 00](../unidad00-entorno/README.md)
