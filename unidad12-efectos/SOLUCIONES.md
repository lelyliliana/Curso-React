# Solución razonada: Render, evento y efecto

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

La búsqueda React deja un recurso y el título indica 1 recursos.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

La longitud se calcula durante render. Si la cantidad no cambia, el efecto del título no necesita ejecutarse otra vez porque su salida seguiría siendo la misma. Al desmontar restaura el valor que capturó. El contenedor del curso también gestiona navegación y foco; no copies sus ajustes de navegación como parte del algoritmo de filtrado.

## Resolución concreta de la práctica

Después de visibles declara `const longitud = busqueda.length;` y muestra `<p>Caracteres escritos: {longitud}</p>`. No agregues estado ni efecto. Las consultas zz y zzz producen cero resultados y longitudes 2 y 3. El título sigue expresando cero recursos porque su dependencia no cambió. Al abandonar la unidad, la limpieza libera la modificación temporal y la navegación establece el título de destino.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 11: Estado derivado y lifting state up](../unidad11-estado-compartido/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 13: useEffect, dependencias y cleanup](../unidad13-useeffect/README.md)
