# Solución razonada: Condiciones y estados excluyentes

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

La selección cambia mensajes y solo success muestra la lista.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Incluye denied entre valores permitidos y define su salida. Es una simulación de denegación, no un control real de autorización. En una aplicación remota, la autorización pertenece al servidor. Mantener una fase en lugar de varios booleanos simplifica la tabla de aceptación y permite comprobar qué controles permanecen disponibles en cada resultado.

## Resolución concreta de la práctica

La [extensión ejecutable](ejemplo/Solucion.jsx) añade denied y lo incluye en la condición de alert. Solo success representa la lista. empty informa ausencia de resultados, error informa fallo y denied informa falta de permiso. Los tres casos no intercambian sus mensajes. El aviso de simulación deja claro que elegir una opción no verifica permisos reales.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/08. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 07: Estado con useState](../unidad07-usestate/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 09: Listas, keys e identidad](../unidad09-listas-keys/README.md)
