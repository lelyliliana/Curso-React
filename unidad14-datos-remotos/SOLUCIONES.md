# Solución razonada: Datos ligados a una dependencia

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

normal produce success; vacio produce empty; un fallo informa su categoría.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

La respuesta de lento no se acepta tras su cleanup. normal termina con dos recursos; 500 se clasifica como http y el JSON no analizable como json. El cuerpo se valida después de parsear, porque HTTP 200 y JSON válido no garantizan la estructura correcta. El efecto expresa relación con escenario; una carga por botón puede ubicarse en un handler, como muestra la siguiente unidad.

## Resolución concreta de la práctica

Normal debe terminar en success y vacío en empty. http500 se clasifica como http; jsoninvalido como json. Al sustituir lento por normal, el cleanup anterior pone vigente=false antes de abortar. Incluso si la operación antigua resolviera después, no puede aceptar sus datos desde esa ejecución. Consulta el cliente completo para distinguir este mecanismo de la identidad numérica del hook de las unidades 15 y 16.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 13: useEffect, dependencias y cleanup](../unidad13-useeffect/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 15: Loading, error, empty y datos remotos](../unidad15-estados-remotos/README.md)
