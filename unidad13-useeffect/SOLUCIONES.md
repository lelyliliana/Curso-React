# Solución razonada: Un recurso mientras existe un componente

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Ocultar desmonta el reloj; mostrar crea uno con Ticks: 0.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

El efecto que usa intervaloMs depende de ese valor. El cleanup elimina el id creado por ese setup; no un id global compartido por otras instancias. El contador puede continuar si el mismo componente permanece montado, pero el recurso de temporización se reemplaza. Ocultar sí cambia su existencia y por eso reinicia el estado al montar otra instancia.

## Resolución concreta de la práctica

La [extensión completa](ejemplo/Solucion.jsx) usa `[intervaloMs]` y devuelve clearInterval(id). Cambiar la prop conserva ticks, limpia el temporizador anterior y crea el nuevo. Ocultar y mostrar reinicia a cero por desmontaje. El valor del select se convierte con Number. No añadas ticks a dependencias para forzar actualizaciones ni suprimas la limpieza cuando el reloj deja de verse.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/13. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 12: Render, eventos y efectos](../unidad12-efectos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 14: Datos remotos en React](../unidad14-datos-remotos/README.md)
