# Unidad 03 — Componentes

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Descomponer una interfaz por responsabilidades y mantener componentes predecibles.

# 1. Componente

```jsx
function Tarjeta() {
  return (
    <article>
      <h2>Curso</h2>
    </article>
  );
}
```

Un componente React es una función/abstracción de UI que React invoca dentro de su proceso de render.

# 2. Mayúscula

Los componentes propios comienzan normalmente con mayúscula:

```jsx
<Tarjeta />
```

Una etiqueta minúscula se interpreta como elemento host/DOM como `<article>`.

# 3. Árbol

```text
App
├── Header
├── CourseList
│   ├── CourseCard
│   └── CourseCard
└── Footer
```

Piensa en responsabilidades, no en “una etiqueta = un componente”.

# 4. Cuándo extraer

Señales:
- se reutiliza;
- tiene responsabilidad clara;
- posee lógica/estado propio coherente;
- una parte grande dificulta comprender el padre.

No existe un número mágico de líneas.

# 5. Pureza

Durante render:
- no muta props;
- no inicia efectos;
- no depende de cambios ocultos.

Un componente puede tener eventos/efectos, pero no ejecutarlos como efecto secundario del render.

# 6. Componentes y HTML

Un componente no reemplaza semántica.

```jsx
function BotonGuardar() {
  return <button type="button">Guardar</button>;
}
```

No uses `<div>` solo porque ahora está envuelto en un componente.

# 7. Definir dentro de otro componente

Crear una definición de componente dentro del cuerpo de otro puede generar una identidad nueva en cada render y reinicios de estado inesperados.

Define componentes en nivel de módulo salvo casos muy específicos.

# 8. Práctica guiada

Toma una landing y propón árbol.

Para cada extracción responde:
> ¿qué responsabilidad encapsula?

# 9. Errores frecuentes
- componente por cada span;
- componente gigante;
- componente definido dentro de otro;
- side effects en render;
- perder semántica HTML.

# 10. Reto
Descompón una landing en componentes coherentes y justifica por qué no extraes otras partes.

# 11. Autoevaluación
1. ¿Por qué mayúscula?
2. ¿Cuándo extraer?
3. ¿Componente = etiqueta?
4. ¿Render puede hacer fetch?
5. ¿Por qué evitar definición anidada?

# 12. Checklist
- [ ] Árbol coherente.
- [ ] Responsabilidades.
- [ ] Render puro.
- [ ] HTML semántico.

Continúa con props.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 02 — JSX](../unidad02-jsx/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 04 — Props y flujo de datos](../unidad04-props/README.md)
