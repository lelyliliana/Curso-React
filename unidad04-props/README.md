# Unidad 04 — Props y flujo de datos

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Pasar datos/comportamiento de padre a hijo y tratar props como entradas inmutables.

# 1. Props

```jsx
function Saludo({ nombre }) {
  return <p>Hola, {nombre}</p>;
}

<Saludo nombre="Ana" />
```

# 2. Flujo descendente

```text
Padre
 ↓ props
Hijo
```

React favorece flujo de datos unidireccional.

El hijo no modifica directamente el estado del padre; puede recibir un callback.

# 3. Props inmutables

Incorrecto:

```jsx
function Lista({ items }) {
  items.push("nuevo");
}
```

Props pertenecen conceptualmente al padre/llamador.

# 4. Callback prop

```jsx
function Boton({ onGuardar }) {
  return (
    <button onClick={onGuardar}>
      Guardar
    </button>
  );
}
```

El hijo comunica una intención; el padre decide qué hacer.

# 5. Valores por defecto

Puedes usar defaults en destructuring:

```jsx
function Avatar({ size = 48 }) { ... }
```

Recuerda las reglas de JavaScript: el default aplica a `undefined`, no a null.

# 6. Objetos

Pasar un objeto nuevo literal en cada render crea una referencia nueva.

Eso normalmente es correcto; solo se vuelve relevante en ciertos escenarios de memoización/efectos que estudiaremos después.

No optimices prematuramente.

# 7. Spread props

```jsx
<Boton {...props} />
```

puede ser útil en componentes de infraestructura, pero también puede pasar atributos inesperados y ocultar la API.

Prefiere props explícitas cuando mejora claridad.

# 8. children

Es una prop especial de composición y se profundiza en la siguiente unidad.

# 9. Práctica guiada

CourseCard recibe:
- título;
- descripción;
- estado;
- callback seleccionar.

El componente no modifica la colección original.

# 10. Errores frecuentes
- mutar prop;
- hijo intentando cambiar padre directamente;
- callback ejecutado al pasar;
- spread indiscriminado;
- memoizar objetos desde el inicio sin problema medido.

# 11. Reto
Componente configurable con variantes y acción sin duplicar markup.

# 12. Autoevaluación
1. ¿Dirección de props?
2. ¿Se mutan?
3. ¿Cómo comunica hijo al padre?
4. ¿Default cubre null?
5. ¿Spread props siempre?

# 13. Checklist
- [ ] Props claras.
- [ ] Flujo unidireccional.
- [ ] Callbacks.
- [ ] Sin mutación.

Continúa con composición.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 03 — Componentes](../unidad03-componentes/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 05 — Composición](../unidad05-composicion/README.md)
