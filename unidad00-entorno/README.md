# Unidad 00 — Entorno y primer proyecto React

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

# 1. Node y npm

Comprueba:

```bash
node --version
npm --version
```

El proyecto puede exigir una versión mínima. Lee siempre package.json/documentación del proyecto.

# 2. Vite

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

# 3. Estructura

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

# 4. Punto de entrada

Conceptualmente:

```jsx
createRoot(document.getElementById("root"))
  .render(<App />);
```

React toma control de una raíz concreta y renderiza el árbol de componentes allí.

# 5. Dev server

```bash
npm run dev
```

Sirve archivos y ofrece herramientas de desarrollo/HMR según Vite.

No es el servidor de producción.

# 6. Build

```bash
npm run build
```

Genera recursos optimizados en una carpeta como `dist/`.

No edites dist manualmente: es salida generada.

# 7. Preview

```bash
npm run preview
```

Permite inspeccionar localmente el build.

No equivale necesariamente a la infraestructura productiva final.

# 8. node_modules

No se versiona.

Sí se versionan normalmente:
- package.json;
- package-lock.json.

# 9. Diagnóstico

Si la pantalla está vacía:
1. ¿dev server inició?
2. ¿URL correcta?
3. ¿Console?
4. ¿Network?
5. ¿error de import?
6. ¿componente lanzó durante render?

“Pantalla blanca” no es una causa.

# 10. React DevTools

La extensión/herramienta de desarrollo permite inspeccionar árbol, props y estado.

La utilizaremos después; no reemplaza Console/Network del navegador.

# 11. Práctica guiada

1. crea proyecto;
2. identifica index/main/App;
3. cambia contenido;
4. provoca import incorrecto;
5. diagnostica;
6. test/build;
7. preview.

# 12. Errores frecuentes
- subir node_modules;
- editar dist;
- pensar que Vite = React;
- confundir dev server con producción;
- culpar React sin revisar Console.

# 13. Reto
Proyecto clonable con README mínimo y comandos dev/build/preview verificados.

# 14. Autoevaluación
1. ¿Vite y React son lo mismo?
2. ¿Qué hace createRoot?
3. ¿dist se edita?
4. ¿Qué es dev server?
5. ¿Qué archivos fijan dependencias?

# 15. Checklist
- [ ] Ejecuto proyecto.
- [ ] Comprendo estructura.
- [ ] Diagnostico arranque.
- [ ] Construyo build.

Continúa con modelo mental.
