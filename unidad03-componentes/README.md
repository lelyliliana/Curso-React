# Unidad 03: Componentes

**[Recorrido del código y resolución paso a paso](DESARROLLO.md)**

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Descomponer una interfaz por responsabilidades y mantener componentes predecibles.

## 1. Componente

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

## 2. Mayúscula

Los componentes propios comienzan normalmente con mayúscula:

```jsx
<Tarjeta />
```

Una etiqueta minúscula se interpreta como elemento host/DOM como `<article>`.

## 3. Árbol

```text
App
├── Header
├── CourseList
│   ├── CourseCard
│   └── CourseCard
└── Footer
```

Piensa en responsabilidades, no en “una etiqueta = un componente”.

## 4. Cuándo extraer

Señales:

- se reutiliza;
- tiene responsabilidad clara;
- posee lógica/estado propio coherente;
- una parte grande dificulta comprender el padre.

No existe un número mágico de líneas.

## 5. Pureza

Durante render:

- no muta props;
- no inicia efectos;
- no depende de cambios ocultos.

Un componente puede tener eventos/efectos, pero no ejecutarlos como efecto secundario del render.

## 6. Componentes y HTML

Un componente no reemplaza semántica.

```jsx
function BotonGuardar() {
  return <button type="button">Guardar</button>;
}
```

No uses `<div>` solo porque ahora está envuelto en un componente.

## 7. Definir dentro de otro componente

Crear una definición de componente dentro del cuerpo de otro puede generar una identidad nueva en cada render y reinicios de estado inesperados.

Define componentes en nivel de módulo salvo casos muy específicos.

## 8. Práctica guiada

Toma una landing y propón árbol.

Para cada extracción responde:
> ¿qué responsabilidad encapsula?

## 9. Errores frecuentes

- componente por cada span;
- componente gigante;
- componente definido dentro de otro;
- side effects en render;
- perder semántica HTML.

## 10. Reto
Descompón una landing en componentes coherentes y justifica por qué no extraes otras partes.

## 11. Autoevaluación

1. ¿Por qué mayúscula?
2. ¿Cuándo extraer?
3. ¿Componente = etiqueta?
4. ¿Render puede hacer fetch?
5. ¿Por qué evitar definición anidada?

## 12. Checklist

- [ ] Árbol coherente.
- [ ] Responsabilidades.
- [ ] Render puro.
- [ ] HTML semántico.

Continúa con props.

## Laboratorio desarrollado: Definición e instancias

### Modelo, contrato y decisiones

La misma definición Contador se utiliza dos veces. Cada posición con identidad propia tiene su estado; las llamadas a hooks se asocian a esa instancia. No declares componentes dentro del render para simular una factory: crear un tipo nuevo allí puede provocar reinicios del subárbol. Divide componentes según responsabilidad y utiliza props para las variaciones de presentación. Compartir código no comparte automáticamente el valor de useState.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/03. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Pulsar Primero aumenta solo ese contador.

### Implementación completa del componente

```jsx
import { useState } from "react";
function Contador({ titulo }) {
  const [cantidad, setCantidad] = useState(0);
  return (
    <section>
      <h3>{titulo}</h3>
      <p>Cantidad: {cantidad}</p>
      <button type="button" onClick={() => setCantidad((n) => n + 1)}>
        Sumar en {titulo}
      </button>
    </section>
  );
}
export default function App() {
  return (
    <section>
      <h2>Instancias independientes</h2>
      <Contador titulo="Primero" />
      <Contador titulo="Segundo" />
    </section>
  );
}
```

### Experimentar y comprobar

Añade un tercer Contador. Modifica uno varias veces y comprueba los otros. Cambia una key deliberadamente y explica el reinicio de esa instancia.

**Casos que debes registrar:** Tres contadores; cambios alternados; identidad conservada; reinicio por key.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 02: JSX](../unidad02-jsx/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 04: Props y flujo de datos](../unidad04-props/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2003%20%E2%80%94%20Componentes%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad03-componentes%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
