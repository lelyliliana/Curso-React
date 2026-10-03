# Unidad 02 — JSX

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Expresar estructura de interfaz con JSX, insertar expresiones y distinguir datos renderizados de HTML inyectado.

# 1. JSX no es HTML

```jsx
const titulo = <h1>Hola</h1>;
```

JSX es sintaxis que herramientas transforman a llamadas/elementos de React.

Se parece a HTML, pero vive dentro de JavaScript.

# 2. Expresiones

```jsx
<h1>{usuario.nombre}</h1>
```

Dentro de llaves puedes usar **expresiones** JavaScript.

No puedes poner directamente una sentencia `if` dentro de las llaves como si fuera una expresión.

# 3. Atributos/props DOM

```jsx
<div className="card">
  <label htmlFor="email">Correo</label>
</div>
```

Algunos nombres difieren del HTML por la API de React/DOM.

No conviertas mecánicamente todos los atributos: muchos modernos conservan nombres familiares como `aria-*` y `data-*`.

# 4. Estilos

```jsx
<div style={{ marginTop: "1rem" }} />
```

El prop style recibe un objeto JS.

No significa que debas mover todo CSS a inline styles.

# 5. Fragmentos

```jsx
<>
  <h1>Título</h1>
  <p>Texto</p>
</>
```

Permiten agrupar sin añadir un nodo DOM extra.

# 6. Renderizar valores

Strings/números pueden aparecer como texto.

Boolean, null y undefined normalmente no producen contenido visible directamente.

Objetos arbitrarios no pueden renderizarse como hijos de la misma forma.

# 7. Escapado

React escapa strings renderizados en JSX:

```jsx
<p>{comentario}</p>
```

Esto ayuda a evitar interpretar ese string como markup.

No significa que todo uso de URLs/HTML sea automáticamente seguro.

# 8. dangerouslySetInnerHTML

Existe para insertar HTML.

El nombre es deliberado: con HTML no confiable puede introducir XSS.

Solo úsalo cuando el requisito necesita HTML y existe sanitización apropiada.

# 9. Comentarios

Dentro de JSX:

```jsx
{/* comentario */}
```

# 10. Práctica guiada

Transforma una tarjeta HTML a JSX:
- class→className;
- for→htmlFor;
- datos con llaves;
- fragment cuando corresponda.

# 11. Errores frecuentes
- JSX = HTML literal;
- if dentro de llaves;
- style como string HTML;
- innerHTML inseguro;
- div extra solo para agrupar.

# 12. Reto
Convierte una sección HTML/CSS del curso anterior a JSX sin perder semántica/accesibilidad.

# 13. Autoevaluación
1. ¿JSX es HTML?
2. ¿Qué va entre llaves?
3. ¿class?
4. ¿for de label?
5. ¿Strings se escapan?
6. ¿Cuándo dangerouslySetInnerHTML?

# 14. Checklist
- [ ] Escribo JSX válido.
- [ ] Inserto expresiones.
- [ ] Mantengo semántica.
- [ ] Renderizo datos de forma segura.

Continúa con componentes.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 01 — Modelo mental de React](../unidad01-modelo-mental/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 03 — Componentes](../unidad03-componentes/README.md)
