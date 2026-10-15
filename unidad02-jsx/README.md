# Unidad 02: JSX

**[Recorrido del código y resolución paso a paso](DESARROLLO.md)**

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Expresar estructura de interfaz con JSX, insertar expresiones y distinguir datos renderizados de HTML inyectado.

## 1. JSX no es HTML

```jsx
const titulo = <h1>Hola</h1>;
```

JSX es sintaxis que herramientas transforman a llamadas/elementos de React.

Se parece a HTML, pero vive dentro de JavaScript.

## 2. Expresiones

```jsx
<h1>{usuario.nombre}</h1>
```

Dentro de llaves puedes usar **expresiones** JavaScript.

No puedes poner directamente una sentencia `if` dentro de las llaves como si fuera una expresión.

## 3. Atributos/props DOM

```jsx
<div className="card">
  <label htmlFor="email">Correo</label>
</div>
```

Algunos nombres difieren del HTML por la API de React/DOM.

No conviertas mecánicamente todos los atributos: muchos modernos conservan nombres familiares como `aria-*` y `data-*`.

## 4. Estilos

```jsx
<div style={{ marginTop: "1rem" }} />
```

El prop style recibe un objeto JS.

No significa que debas mover todo CSS a inline styles.

## 5. Fragmentos

```jsx
<>
  <h1>Título</h1>
  <p>Texto</p>
</>
```

Permiten agrupar sin añadir un nodo DOM extra.

## 6. Renderizar valores

Strings/números pueden aparecer como texto.

Boolean, null y undefined normalmente no producen contenido visible directamente.

Objetos arbitrarios no pueden renderizarse como hijos de la misma forma.

## 7. Escapado

React escapa strings renderizados en JSX:

```jsx
<p>{comentario}</p>
```

Esto ayuda a evitar interpretar ese string como markup.

No significa que todo uso de URLs/HTML sea automáticamente seguro.

## 8. dangerouslySetInnerHTML

Existe para insertar HTML.

El nombre es deliberado: con HTML no confiable puede introducir XSS.

Solo úsalo cuando el requisito necesita HTML y existe sanitización apropiada.

## 9. Comentarios

Dentro de JSX:

```jsx
{/* comentario */}
```

## 10. Práctica guiada

Transforma una tarjeta HTML a JSX:

- class→className;
- for→htmlFor;
- datos con llaves;
- fragment cuando corresponda.

## 11. Errores frecuentes

- JSX = HTML literal;
- if dentro de llaves;
- style como string HTML;
- innerHTML inseguro;
- div extra solo para agrupar.

## 12. Reto
Convierte una sección HTML/CSS del curso anterior a JSX sin perder semántica/accesibilidad.

## 13. Autoevaluación

1. ¿JSX es HTML?
2. ¿Qué va entre llaves?
3. ¿class?
4. ¿for de label?
5. ¿Strings se escapan?
6. ¿Cuándo dangerouslySetInnerHTML?

## 14. Checklist

- [ ] Escribo JSX válido.
- [ ] Inserto expresiones.
- [ ] Mantengo semántica.
- [ ] Renderizo datos de forma segura.

Continúa con componentes.

## Laboratorio desarrollado: JSX, expresiones y texto

### Modelo, contrato y decisiones

JSX describe elementos, no es una cadena HTML concatenada ni una plantilla que pueda contener sentencias arbitrarias. Las llaves aceptan expresiones; puedes calcular fuera del return y utilizar su resultado. Los nombres de componentes empiezan en mayúscula; los elementos nativos se escriben en minúscula. React muestra strings como texto y escapa su marcado. Esta protección no valida automáticamente destinos href, estilos, datos externos ni autorizaciones.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/02. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Ana aparece como activa; el marcado se ve literalmente y no crea una imagen.

### Implementación completa del componente

```jsx
export default function App() {
  const persona = { nombre: "Ana", activo: true };
  const texto = "<img src=x onerror=alert(1)>";
  return (
    <section>
      <h2>Expresiones en JSX</h2>
      <p>
        {persona.nombre}: {persona.activo ? "activa" : "inactiva"}
      </p>
      <p>{texto}</p>
      <p className="nota">{0} es un valor que React muestra.</p>
    </section>
  );
}
```

### Experimentar y comprobar

Cambia activo a false y añade una condición con cantidad 0. Compara cantidad && contenido con cantidad > 0 && contenido, y comprueba que el segundo no muestre un 0 accidental.

**Casos que debes registrar:** activo true/false; cantidad 0/1; cadena con img; JSX cerrado.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 01: Modelo mental de React](../unidad01-modelo-mental/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 03: Componentes](../unidad03-componentes/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2002%20%E2%80%94%20JSX%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad02-jsx%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
