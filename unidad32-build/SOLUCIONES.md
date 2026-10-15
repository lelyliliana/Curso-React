# Solución razonada: Construcción y publicación estática

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

El enlace abre el proyecto con una ruta hash compartible.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

preview del curso instala el plugin de laboratorio y puede responder /api/catalogo; un hosting que solo sirve dist no ejecuta ese plugin. El cliente informa error ante endpoint ausente o cuerpo incompatible. No presentes un HTML 200 de fallback como datos válidos. La publicación estática conserva operaciones de tareas locales y exige informar claramente la limitación de red.

## Resolución concreta de la práctica

El build debe completar y el detalle hash abrir directamente en la subcarpeta. Las tareas locales se guardan y recargan si el origen permite Storage. Con solo dist y sin servicio /api/catalogo, la consulta debe informar error HTTP (404 en el servidor estático de prueba). Preview sí tiene API por el plugin. No anuncies que subir dist despliega el proceso de Vite.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 31: Configuración y variables de entorno](../unidad31-configuracion/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 33: Taller integrador React](../unidad33-taller/README.md)
