# Solución razonada: Datos de entrada y contrato

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Cupos 0 permanece 0; la ficha sin cupos usa 20; null se muestra sin un número.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Si null significa desconocido, muestra una etiqueta explícita; si solo se admiten enteros, recházalo con un mensaje de dominio antes de renderizar. No lo reemplaces por 20 suponiendo que el default de destructuring lo hizo. Conserva 0 como cupo válido. La elección es un contrato del componente, no una regla universal de React.

## Resolución concreta de la práctica

La [solución ejecutable](ejemplo/Solucion.jsx) evalúa primero null y luego Number.isInteger(cupos) junto con cupos >= 0. Cero muestra Cupos: 0; ausente y undefined muestran 20; null muestra Cupos desconocidos; -1 y "3" muestran Dato de cupos inválido. 1.5 también se rechaza. No conviertas la cadena automáticamente si el contrato de entrada exige un número.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/04. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 03: Componentes](../unidad03-componentes/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 05: Composición](../unidad05-composicion/README.md)
