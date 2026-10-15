# Solución razonada: Memoización como optimización

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Filtrar y elegir cambia la salida; el contador no altera la selección.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Un array nuevo rompe igualdad referencial de props aunque contenga datos iguales. Estabilizarlo puede ayudar si evita trabajo costoso demostrado. En este ejemplo pequeño puede no aportar una mejora relevante. El callback utiliza un setter estable y no lee q, por lo que no captura una búsqueda antigua; si lo modificas para leer valores reactivos, revisa dependencias.

## Resolución concreta de la práctica

La copia `[...visibles]` rompe la estabilidad de items y puede hacer que memo no omita el render. Restaurar `items={visibles}` recupera la política mientras q no cambia. La selección permanece correcta en ambas variantes. Cambiar q sí debe recalcular el filtro. Elegir un recurso cambia elegido sin requerir que el callback capture su valor anterior. No omitas dependencias para forzar una referencia estable.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 28: Re-renderizados y rendimiento](../unidad28-rendimiento/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 30: Arquitectura por features](../unidad30-arquitectura/README.md)
