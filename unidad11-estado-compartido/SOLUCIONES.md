# Solución razonada: Levantar estado y derivar total

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Ambos controles empiezan en 2 y el total es 10.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

El mismo setter del padre recibe 5, por lo que ambos controles muestran 5 y el total es 25. Un visor puede recibir cantidad como prop. Compartir estado no exige Context para este árbol pequeño: una relación directa padre/hijos expresa el flujo con claridad. Una copia de total en un efecto añadiría una sincronización innecesaria.

## Resolución concreta de la práctica

Añade `<p>Visor: {cantidad}</p>` dentro de App, después del total. No modifiques Campo ni introduzcas un setter nuevo. Con A en 5, ambos controles valen 5 y total vale 25. Con B en 10, ambos valen 10 y total 50. El visor es otro consumidor de la fuente única, no otra copia que debas sincronizar mediante un efecto.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 10: Formularios en React](../unidad10-formularios/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 12: Render, eventos y efectos](../unidad12-efectos/README.md)
