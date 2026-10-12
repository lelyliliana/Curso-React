# Curso de React

**[Comenzar el curso: Unidad 00: Entorno y primer proyecto React](unidad00-entorno/README.md)**

Puedes leer las lecciones aquí sin conocer GitHub. Al terminar cada unidad, usa **Siguiente unidad** para avanzar; **Unidad anterior** y **Volver al índice** te permiten regresar.

[Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

**Versión 1.1**

Curso abierto para aprender a construir **interfaces web modernas con React**, comprendiendo su modelo de componentes, estado, renderizado y efectos antes de introducir abstracciones adicionales.

## Requisitos recomendados

- [HTML y CSS](https://github.com/lelyliliana/Curso-HTML-CSS)
- [JavaScript](https://github.com/lelyliliana/Curso-JavaScript)

## Comenzar y practicar

1. Sigue [ENTORNO.md](docs/ENTORNO.md) para Ubuntu, Windows o macOS.
2. Instala desde lockfile con `npm ci` e inicia `npm run dev`.
3. Abre http://127.0.0.1:5173/ y elige la unidad de la galería.
4. Lee el modelo, predice el resultado y modifica el laboratorio de esa unidad.
5. Completa PRACTICA.md y contrasta después SOLUCIONES.md.
6. Integra los temas en el [proyecto de referencia](ejemplos/app-referencia/README.md), taller y proyecto final.

Las unidades 00 a 32 tienen componentes completos; la entrada y dependencias se comparten desde la raíz. GitHub muestra fuente, no ejecuta JSX. No necesitas generar 33 proyectos distintos ni usar una API pública para ensayar fallos.

El entorno usa React 19.3, Router 8.4 y Vite 8.3 con versiones fijadas. La guía indica Node 24 LTS desde 24.15.0, considerando también herramientas de pruebas. No depende de WSL ni Docker.

## Consulta y comprobación

- [React actual y alcance](docs/REACT_ACTUAL.md).
- [API local y respuestas controladas](docs/API_LOCAL.md).
- [Pruebas, build y límites](docs/VERIFICACION.md).
- [Diagnóstico paso a paso](docs/DIAGNOSTICO_REACT.md).
- [Glosario](docs/GLOSARIO.md).
- [Referencias oficiales](docs/REFERENCIAS.md).

## Objetivo

Al finalizar podrás:

- crear proyectos React con una herramienta moderna;
- comprender JSX y renderizado;
- diseñar componentes y props;
- manejar estado;
- trabajar con listas, keys y eventos;
- diseñar formularios;
- comprender ciclo de renderizado y efectos;
- consumir APIs;
- representar loading/error/empty;
- cancelar solicitudes;
- compartir estado;
- utilizar Context cuando corresponde;
- crear hooks personalizados;
- implementar routing;
- probar componentes desde el comportamiento del usuario;
- mejorar accesibilidad;
- analizar rendimiento;
- organizar una aplicación escalable;
- construir y publicar un proyecto completo.

## Ruta

### Nivel 1: Fundamentos

- [Unidad 00: Entorno y proyecto React](unidad00-entorno/)
- [Unidad 01: Modelo mental de React](unidad01-modelo-mental/)
- [Unidad 02: JSX](unidad02-jsx/)
- [Unidad 03: Componentes](unidad03-componentes/)
- [Unidad 04: Props](unidad04-props/)
- [Unidad 05: Composición](unidad05-composicion/)

### Nivel 2: Interactividad

- [Unidad 06: Eventos](unidad06-eventos/)
- [Unidad 07: Estado con useState](unidad07-usestate/)
- [Unidad 08: Renderizado condicional](unidad08-condicional/)
- [Unidad 09: Listas y keys](unidad09-listas-keys/)
- [Unidad 10: Formularios](unidad10-formularios/)
- [Unidad 11: Estado derivado y lifting state up](unidad11-estado-compartido/)

### Nivel 3: Efectos y datos

- [Unidad 12: Renderizado y efectos](unidad12-efectos/)
- [Unidad 13: useEffect](unidad13-useeffect/)
- [Unidad 14: Datos remotos](unidad14-datos-remotos/)
- [Unidad 15: Loading, error y empty](unidad15-estados-remotos/)
- [Unidad 16: Cancelación y carreras](unidad16-cancelacion/)
- [Unidad 17: Custom hooks](unidad17-custom-hooks/)

### Nivel 4: Aplicaciones

- [Unidad 18: Routing](unidad18-routing/)
- [Unidad 19: Context](unidad19-context/)
- [Unidad 20: useReducer](unidad20-usereducer/)
- [Unidad 21: Estado de aplicación](unidad21-estado-app/)
- [Unidad 22: Persistencia local](unidad22-persistencia/)

### Nivel 5: Calidad

- [Unidad 23: Accesibilidad en React](unidad23-accesibilidad/)
- [Unidad 24: Pruebas de componentes](unidad24-pruebas/)
- [Unidad 25: Pruebas de flujos](unidad25-pruebas-flujos/)
- [Unidad 26: Errores y boundaries](unidad26-errores/)
- [Unidad 27: DevTools y depuración](unidad27-debug/)

### Nivel 6: Rendimiento y arquitectura

- [Unidad 28: Re-renderizados y rendimiento](unidad28-rendimiento/)
- [Unidad 29: memo, useMemo y useCallback](unidad29-memoizacion/)
- [Unidad 30: Arquitectura por features](unidad30-arquitectura/)
- [Unidad 31: Configuración y variables de entorno](unidad31-configuracion/)
- [Unidad 32: Build y publicación](unidad32-build/)

### Nivel 7: Integración

- [Unidad 33: Taller React](unidad33-taller/)
- [Unidad 34: Proyecto final](unidad34-proyecto-final/)

## Metodología

Modelo mental → ejemplo → componente → interacción → prueba → accesibilidad → diagnóstico → reto.

## Alcance

React es el foco. JavaScript, HTML y CSS se estudian en sus cursos independientes.

## Principio

> React no sustituye los fundamentos de la Web: organiza cómo una interfaz se deriva del estado y cómo sus componentes colaboran.

## Autora

**Leli Liliana Díaz Izquierdo**

Ingeniera de Sistemas · Docente investigadora · Tecnología, educación e investigación.

---

### ¿Necesitas acompañamiento personalizado?

Puedes estudiar este curso por tu cuenta. Si necesitas apoyo para configurar el entorno, comprender o resolver un error, o aplicar lo aprendido a tu tesis o proyecto, podemos trabajarlo en una sesión individual.

- **Preparar el entorno:** revisar la instalación y configuración de herramientas y dependencias.
- **Comprender y resolver errores:** analizar lo que ocurre y trabajar en una solución.
- **Aplicarlo a tu proyecto:** te acompaño a comprender el contenido y adaptarlo a tu caso.

[**Solicitar asesoría sobre este curso**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20revisando%20el%20curso%20de%20React%20(lelyliliana%2FCurso-React)%20y%20me%20interesa%20una%20asesor%C3%ADa%20personalizada.%20Necesito%20apoyo%20con%E2%80%A6)
