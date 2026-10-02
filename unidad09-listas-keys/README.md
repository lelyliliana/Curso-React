# Unidad 09 — Listas, keys e identidad

## Qué aprenderás
Renderizar colecciones y usar keys para que React conserve correctamente identidad y estado entre renders.

# 1. map

```jsx
<ul>
  {items.map(item => (
    <li key={item.id}>
      {item.nombre}
    </li>
  ))}
</ul>
```

# 2. Qué es key

Key ayuda a React a identificar un elemento entre hermanos a través de renders.

No es un prop normal disponible automáticamente dentro del componente.

Si necesitas id, pásalo explícitamente.

# 3. ID estable

Buena key:

```jsx
key={item.id}
```

Debe ser estable para la identidad del dato.

# 4. Índice

```jsx
key={index}
```

puede funcionar en una lista verdaderamente estática que nunca reordena/inserta/elimina y cuyos items no mantienen identidad relevante.

En listas editables puede asociar estado/DOM al elemento equivocado.

# 5. Math.random

```jsx
key={Math.random()}
```

crea una key nueva en cada render.

React tratará items como nuevos, provocando desmontaje/montaje y pérdida de estado.

# 6. Key y reset intencional

Puedes cambiar key deliberadamente para pedir a React una identidad nueva y reiniciar estado de un subárbol.

Úsalo cuando ese sea el significado, no como parche.

# 7. Filtrar/ordenar

Deriva la lista:

```jsx
const visibles = items
  .filter(...)
  .toSorted(...);
```

No necesitas guardar otra copia en estado solo porque se renderiza filtrada.

# 8. Estado del item

Si cada fila tiene input/estado, keys incorrectas se vuelven visibles al reordenar.

Este es un excelente experimento para comprender identidad.

# 9. Práctica guiada

Lista editable:
1. tres items con ID;
2. input por fila;
3. reordena;
4. prueba con key=id;
5. prueba con key=index;
6. compara.

# 10. Errores frecuentes
- índice siempre;
- random;
- esperar key dentro de props;
- guardar lista filtrada duplicada;
- mutar array antes de render.

# 11. Reto
Lista editable/ordenable con IDs estables y estado correcto tras reordenar.

# 12. Autoevaluación
1. ¿Para qué key?
2. ¿Key llega como prop?
3. ¿Cuándo índice puede ser aceptable?
4. ¿Por qué random es malo?
5. ¿Key puede reiniciar estado?
6. ¿Lista filtrada necesita estado?

# 13. Checklist
- [ ] IDs estables.
- [ ] Keys correctas.
- [ ] Estado preservado.
- [ ] Datos derivados.

Continúa con formularios.
