# Unidad 05 — Composición

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Crear componentes flexibles mediante children y regiones explícitas sin construir jerarquías innecesarias.

# 1. children

```jsx
function Panel({ children }) {
  return (
    <section className="panel">
      {children}
    </section>
  );
}
```

Uso:

```jsx
<Panel>
  <h2>Resumen</h2>
  <p>Contenido</p>
</Panel>
```

Panel controla la envoltura; el consumidor controla el contenido.

# 2. Composición vs demasiadas props

Un contenedor con título, subtítulo, imagen, dos botones, footer y cada fragmento configurable puede terminar con una API enorme.

Cuando el componente es realmente un contenedor, children o regiones explícitas pueden expresar mejor la composición.

# 3. Slots explícitos

```jsx
function DialogLayout({
  title,
  actions,
  children
}) {
  // ...
}
```

Props que contienen elementos pueden representar regiones.

# 4. Especialización

```jsx
function WarningPanel({ children }) {
  return (
    <Panel variant="warning">
      {children}
    </Panel>
  );
}
```

La composición suele ser más flexible que inventar jerarquías de componentes.

# 5. Render props

Una prop también puede ser una función que produce UI/comportamiento.

Es un patrón útil en casos concretos, aunque hooks han reducido muchos usos históricos.

No lo introduzcas si props normales/children bastan.

# 6. Estado

Un contenedor visual no necesita poseer automáticamente el estado de su contenido.

El estado debe vivir donde exista la responsabilidad de controlarlo.

# 7. Semántica

No abstraigas HTML hasta volverlo irreconocible.

Un componente debe preservar o definir claramente su semántica.

# 8. Práctica guiada

Crea Card con header opcional, children y actions. Úsala para curso y perfil sin duplicar estructura base.

# 9. Errores frecuentes
- componente con demasiadas props de contenido;
- children para datos que serían más claros como props;
- abstraer cada etiqueta;
- herencia innecesaria;
- contenedor apropiándose de estado.

# 10. Reto
Card/Panel reutilizable por composición con API documentada.

# 11. Autoevaluación
1. ¿Qué es children?
2. ¿Cuándo región explícita?
3. ¿Composición vs herencia?
4. ¿Children siempre es mejor?
5. ¿Quién posee estado?

# 12. Checklist
- [ ] Composición flexible.
- [ ] API clara.
- [ ] Semántica.
- [ ] Estado en dueño correcto.

Continúa con eventos.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 04 — Props y flujo de datos](../unidad04-props/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 06 — Eventos en React](../unidad06-eventos/README.md)
