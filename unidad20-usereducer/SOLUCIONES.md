# Solución razonada: Reducer y acciones

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

restar desde 0 mantiene 0; sumar y reiniciar cambian el número.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

sumarDos devuelve cantidad+2. La entrada no se modifica y no se generan ids aleatorios dentro del reducer. Un tipo desconocido se rechaza en este ejemplo, mientras que el reducer de tareas convierte errores de dominio en estado informativo: son contratos explícitos diferentes. Mantén efectos fuera del cálculo para que StrictMode pueda comprobar pureza sin duplicar operaciones externas.

## Resolución concreta de la práctica

La [solución ejecutable](ejemplo/Solucion.jsx) exporta un reducer que devuelve cantidad+2 para sumarDos y llama al reducer base para las otras acciones. Casos: (0,restar) → 0; (0,sumarDos) → 2; (4,sumarDos) → 6; (6,reiniciar) → 0. Repetir (4,sumarDos) devuelve 6 sin una dependencia externa. La transición nueva tiene una acción visible, no dos despachos usados para ocultar la ausencia de la regla solicitada.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/20. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 19: Context](../unidad19-context/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 21: Diseñar el estado de una aplicación](../unidad21-estado-app/README.md)
