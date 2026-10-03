# Unidad 06 — Eventos en React

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Responder a interacciones pasando handlers y comportamiento sin ejecutar efectos durante render.

# 1. Handler

```jsx
function GuardarButton() {
  function manejarClick() {
    console.log("guardar");
  }

  return (
    <button onClick={manejarClick}>
      Guardar
    </button>
  );
}
```

Pasa la función.

# 2. No ejecutes al render

```jsx
<button onClick={manejarClick()}>
```

ejecuta la función durante render y pasa su resultado.

# 3. Argumentos

```jsx
<button onClick={() => eliminar(id)}>
  Eliminar
</button>
```

La arrow crea el handler que se ejecutará después.

No evites estas arrows por rendimiento sin evidencia.

# 4. Evento

```jsx
function manejar(event) {
  event.preventDefault();
}
```

Los conceptos de eventos DOM aprendidos siguen importando.

# 5. Propagación

Los eventos pueden propagarse.

`stopPropagation` existe, pero no lo uses para ocultar una arquitectura de interacción confusa.

# 6. Semántica

Para una acción usa button. Para navegación usa enlace.

React no convierte un div con onClick en un botón accesible.

# 7. Handler props

```jsx
function Item({ onDelete }) {
  return (
    <button onClick={onDelete}>
      Eliminar
    </button>
  );
}
```

El hijo comunica intención; el padre decide la operación.

# 8. Evento vs efecto

Una acción causada directamente por un click puede ejecutarse en el handler.

No necesitas useEffect para reaccionar a cada interacción.

# 9. Práctica guiada

Crea controles incrementar, decrementar y reset. Primero registra intención; después conecta estado.

# 10. Errores frecuentes
- ejecutar handler al render;
- div clickable;
- useEffect para click;
- stopPropagation indiscriminado;
- optimizar arrows sin medir.

# 11. Reto
Barra de acciones semánticas con callbacks recibidos por props.

# 12. Autoevaluación
1. ¿onClick recibe función o resultado?
2. ¿Cómo pasar id?
3. ¿React elimina semántica HTML?
4. ¿Click necesita useEffect?
5. ¿stopPropagation por defecto?

# 13. Checklist
- [ ] Handlers correctos.
- [ ] Elementos nativos.
- [ ] Props de eventos.
- [ ] Evento en el lugar correcto.

Continúa con estado.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 05 — Composición](../unidad05-composicion/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 07 — Estado con useState](../unidad07-usestate/README.md)
