# Solución razonada: Distribución de datos con Context

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Cambiar tema actualiza al consumidor entre claro y oscuro.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Los dos consumidores dentro leen el mismo tema. El default null fuera del proveedor no contiene tema ni cambiar; un hook useTema puede comprobarlo y lanzar un error claro de configuración o elegir un fallback definido. No conviertas el default en una falsa sesión de usuario. Un estado de campo no relacionado puede permanecer local.

## Resolución concreta de la práctica

La [extensión completa](ejemplo/Solucion.jsx) obtiene primero contexto y comprueba `contexto === null`. Solo después utiliza tema y cambiar. A y B pasan juntos de claro a oscuro; Fuera muestra tema no disponible. Esta política presenta un fallback. Una API reutilizable también podría decidir lanzar un error descriptivo, pero no debe desestructurar null accidentalmente.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/19. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 18: Routing y URL como estado](../unidad18-routing/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 20: useReducer y transiciones de estado](../unidad20-usereducer/README.md)
