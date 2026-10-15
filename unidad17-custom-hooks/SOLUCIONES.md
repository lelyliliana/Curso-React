# Solución razonada: Extraer una API pequeña

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

A empieza en 0 y B en 10; sumar A no cambia B.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

restar puede usar setCantidad(n=>Math.max(0,n-1)). Documenta si reiniciar usa el inicio actual o el valor de montaje: el hook de referencia captura la prop de su render actual en la acción reiniciar. No añadas un efecto solo para copiar inicio a estado sin decidir antes esa semántica. La reutilización conserva los mismos límites de hooks y efectos.

## Resolución concreta de la práctica

La [solución completa](ejemplo/Solucion.jsx) devuelve cantidad, sumar, restar y reiniciar. Restar utiliza un actualizador puro con mínimo cero. Cambiar inicio de C no reemplaza cantidad; Reiniciar C usa el inicio vigente. Los tres controles siguen independientes. Si quisieras conservar siempre el inicio original al reiniciar, tendrías que implementar y explicar otra política, no afirmar que useState sigue automáticamente cada cambio de prop.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/17. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 16: Cancelación, cleanup y carreras de red](../unidad16-cancelacion/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 18: Routing y URL como estado](../unidad18-routing/README.md)
