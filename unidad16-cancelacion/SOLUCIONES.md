# Solución razonada: Cancelar y conservar la respuesta vigente

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Cancelar lento informa cancelada; dejarlo llegar al límite informa timeout.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

normal conserva dos recursos aunque concluya el trabajo anterior. Al desmontar, activo pasa a false y cambia la identidad pendiente; al montar otra instancia comienza en idle. Las pruebas incluyen un cliente que ignora abort y resuelve en orden inverso: la comprobación de id es la defensa de coherencia. No reutilices una señal abortada para la nueva carga.

## Resolución concreta de la práctica

La secuencia A(1), B(2), respuesta B, respuesta A termina mostrando B. Las guardas se aplican tanto al éxito como al error: un rechazo antiguo tampoco debe ocultar datos actuales. Cancelar la solicitud vigente muestra cancelada; dejar superar 400 ms produce timeout. Desmontar invalida el trabajo pendiente. No resuelvas la carrera con un finally que siempre cambie la fase, porque también se ejecutaría para una solicitud obsoleta.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 15: Loading, error, empty y datos remotos](../unidad15-estados-remotos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 17: Custom hooks](../unidad17-custom-hooks/README.md)
