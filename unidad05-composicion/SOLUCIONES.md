# Solución razonada: Composición y huecos de contenido

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

La tarjeta contiene una lista y un enlace a eventos.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

El padre pasa otro children y otro nodo en acciones. Tarjeta no tiene que conocer rutas del catálogo ni datos del proyecto. El enlace produce semántica de navegación, permite copiar dirección y usar comportamientos nativos. children no implica que cualquier estructura sea accesible: revisa niveles de heading y el nombre del enlace final.

## Resolución concreta de la práctica

Dentro del section de App añade otra instancia de Tarjeta con `titulo="Proyecto de estudio"`, `acciones={<a href="#/proyecto">Abrir proyecto</a>}` y un párrafo como children. Conserva la primera instancia. Deben verse dos encabezados y dos contenidos distintos bajo la misma estructura. No copies el cuerpo de Tarjeta para producir la segunda tarjeta: la variación pertenece a sus props.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 04: Props y flujo de datos](../unidad04-props/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 06: Eventos en React](../unidad06-eventos/README.md)
