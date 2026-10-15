# Solución razonada: URL, parámetros y navegación

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

La búsqueda queda en ?q= del hash y el detalle abre el recurso.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

El filtro se recupera de la URL sin duplicarse en otro useState. Los id inválidos o ausentes no se convierten en el primer recurso por defecto. La navegación global del curso actualiza título y foco; el componente detalle conserva un enlace de retorno. Para usar BrowserRouter en otra publicación necesitas una estrategia de fallback del hosting, no solo cambiar el nombre del componente.

## Resolución concreta de la práctica

q=React muestra React después de recargar. detalle/1 muestra el recurso React; 99 y abc muestran Recurso no encontrado por causas distintas (ausencia y formato). Una ruta sin coincidencia muestra Ruta no encontrada. No añadas useState para duplicar q ni Number(id) sin comprobar la forma. El enlace Volver al catálogo lleva al índice sin prometer conservar el filtro anterior.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 17: Custom hooks](../unidad17-custom-hooks/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 19: Context](../unidad19-context/README.md)
