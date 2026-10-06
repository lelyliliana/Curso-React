# Unidad 10: Formularios en React

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Diseñar formularios controlados/no controlados, validar sin duplicar innecesariamente HTML y mantener accesibilidad.

## 1. Controlado

```jsx
const [nombre, setNombre] = useState("");

<input
  value={nombre}
  onChange={e => setNombre(e.target.value)}
/>
```

React state gobierna el valor.

## 2. No controlado

Un input puede mantener su propio estado DOM y leerse al enviar mediante FormData/ref según necesidad.

React no exige que todo input sea controlado.

Elige según interacción/validación.

## 3. Submit

```jsx
function manejarSubmit(event) {
  event.preventDefault();
  // procesar
}
```

Escucha el `onSubmit` del form, no solo click del botón.

Así conservas Enter y semántica de formulario.

## 4. Labels

```jsx
<>
  <label htmlFor="email">Correo</label>
  <input id="email" name="email" />
</>
```

React no elimina requisitos de accesibilidad HTML.

## 5. Estado de errores

No guardes un booleano por cada posible error si puedes derivar mensajes desde valores/touched/submit según diseño.

Pero tampoco recalcules reglas costosas/remotas sin necesidad.

## 6. Validación nativa

Puedes usar:

- required;
- type;
- min/max;
- pattern.

React convive con Constraint Validation API.

No recrees en JS lo que HTML resuelve bien sin una razón.

## 7. Número

`event.target.value` suele ser string.

Un input type=number no convierte automáticamente tu estado React a Number.

Decide cómo representar vacío y conversión.

## 8. Checkbox

```jsx
<input
  type="checkbox"
  checked={acepta}
  onChange={e => setAcepta(e.target.checked)}
/>
```

Usa `checked`, no `value`, para el estado booleano.

## 9. Foco tras error

No muevas foco por cada validación mientras escribe.

Tras un submit fallido complejo, puede ser útil enfocar resumen/primer error según diseño.

## 10. Formularios grandes

Decenas de campos pueden requerir estrategias/librerías.

Primero comprende controlado/no controlado y estado; una librería no elimina esos conceptos.

## 11. Práctica guiada

Formulario con nombre, email, cantidad (0 válido) y checkbox.

Implementa versión controlada y compara con FormData al submit.

## 12. Errores frecuentes

- escuchar solo botón;
- input number = Number automático;
- checkbox con value;
- recrear validación HTML;
- mover foco constantemente;
- controlar todo por dogma.

## 13. Reto
Formulario accesible con 0 válido, validación y errores asociados.

## 14. Autoevaluación

1. ¿Controlado?
2. ¿React exige controlado?
3. ¿Por qué onSubmit?
4. ¿Number automático?
5. ¿Checkbox usa checked?
6. ¿HTML validation sigue sirviendo?

## 15. Checklist

- [ ] Form semántico.
- [ ] Estado apropiado.
- [ ] Validación accesible.
- [ ] Conversión explícita.

Continúa con estado compartido.

## Laboratorio desarrollado: Campo controlado y validación

### Modelo, contrato y decisiones

El valor del campo procede de estado y onChange actualiza ese estado. La regla acepta de 2 a 40 unidades UTF-16 después de trim; el envío válido entrega el texto normalizado al callback. useId relaciona etiqueta y mensajes sin duplicar ids cuando hay varias instancias. La validación HTML ayuda a introducir datos, pero no sustituye una regla de dominio ni una validación del servidor si existiera una operación remota.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/10. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Espacios se rechazan; Ana se recibe normalizada; no se guarda en un servidor.

### Implementación completa del componente

```jsx
import AccionNombre from "./AccionNombre.jsx";
import { useId, useRef, useState } from "react";
export function FormularioNombre({ onGuardar = () => {} }) {
  const [nombre, setNombre] = useState(""),
    [mensaje, setMensaje] = useState(""),
    [error, setError] = useState("");
  const id = useId(),
    entrada = useRef(null);
  function enviar(e) {
    e.preventDefault();
    const valor = nombre.trim();
    if (valor.length < 2 || valor.length > 40) {
      setError("Nombre de 2 a 40 caracteres.");
      entrada.current?.focus();
      return;
    }
    setError("");
    onGuardar(valor);
    setMensaje(`Recibido: ${valor}`);
  }
  return (
    <form onSubmit={enviar}>
      <label htmlFor={id}>Nombre ficticio</label>
      <input
        ref={entrada}
        id={id}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        maxLength={40}
        aria-invalid={error ? true : undefined}
        aria-describedby={`${id}-error`}
      />
      <button>Guardar nombre</button>
      <p id={`${id}-error`} role="alert">
        {error}
      </p>
      <p role="status">{mensaje}</p>
    </form>
  );
}
export default function App() {
  return (
    <section>
      <h2>Formulario controlado</h2>
      <FormularioNombre />
      <details>
        <summary>Extensión: acciones de React 19</summary>
        <AccionNombre />
      </details>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Renderiza dos formularios en la misma vista. Comprueba etiquetas independientes, entrada de un carácter y texto válido. Añade un callback que registre el nombre en un estado del padre.

**Casos que debes registrar:** Dos instancias; vacío nativo; un carácter; espacios; Ana; máximo 40.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

## Extensión: acciones de formulario de React 19

Abre el desplegable del laboratorio para probar [AccionNombre.jsx](ejemplo/AccionNombre.jsx). useActionState recibe una función de acción, estado inicial y ofrece resultado, acción y pending. Pasar la acción a form action la integra con ese flujo; no equivale a invocarla como cualquier handler asíncrono sin su contexto.

La operación simula una espera local de 200 ms, valida el nombre y devuelve mensaje. No guarda ni envía a un servidor. Una acción resuelta reinicia el campo no controlado de este ejemplo; un error de validación devuelto como dato sigue siendo un resultado resuelto. Si tu diseño necesita conservar ese borrador, decide otra estrategia de control y prueba esa regla.

Compara el formulario controlado principal (onSubmit) y esta variante sin mezclarlos. La [prueba de componentes](../tests/componentes.test.jsx) verifica pending, resultado normalizado y campo reiniciado. Consulta [React actual](../docs/REACT_ACTUAL.md) para alcance y referencias.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 09: Listas, keys e identidad](../unidad09-listas-keys/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 11: Estado derivado y lifting state up](../unidad11-estado-compartido/README.md)
