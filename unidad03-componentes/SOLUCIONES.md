# Solución razonada: Definición e instancias

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Pulsar Primero aumenta solo ese contador.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Una tercera instancia comienza en 0. Una key nueva indica otra identidad, por lo que el contador se vuelve a montar y reinicia su estado. Utilizar una key aleatoria en cada render produciría ese reinicio repetidamente. Para compartir el número entre los tres habría que mover el estado al propietario común y pasar valores/acciones.

## Resolución concreta de la práctica

La [extensión completa](ejemplo/Solucion.jsx) incorpora tres instancias y una key controlada por revisión. Tras cantidades 2, 1 y 0, Recrear Primero deja 0, 1 y 0. Cambiar solo el texto de la prop nombre conservaría la memoria; cambiar key la reinicia. No pongas esa revisión en el contenedor que engloba todos los contadores, porque entonces reiniciarías más instancias de las solicitadas.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/03. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 02: JSX](../unidad02-jsx/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 04: Props y flujo de datos](../unidad04-props/README.md)
