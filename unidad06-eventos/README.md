# Unidad 06: Eventos en React

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Responder a interacciones pasando handlers y comportamiento sin ejecutar efectos durante render.

## 1. Handler

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

## 2. No ejecutes al render

```jsx
<button onClick={manejarClick()}>Acción (variante incorrecta)</button>
```

ejecuta la función durante render y pasa su resultado.

## 3. Argumentos

```jsx
<button onClick={() => eliminar(id)}>
  Eliminar
</button>
```

La arrow crea el handler que se ejecutará después.

No evites estas arrows por rendimiento sin evidencia.

## 4. Evento

```jsx
function manejar(event) {
  event.preventDefault();
}
```

Los conceptos de eventos DOM aprendidos siguen importando.

## 5. Propagación

Los eventos pueden propagarse.

`stopPropagation` existe, pero no lo uses para ocultar una arquitectura de interacción confusa.

## 6. Semántica

Para una acción usa button. Para navegación usa enlace.

React no convierte un div con onClick en un botón accesible.

## 7. Handler props

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

## 8. Evento vs efecto

Una acción causada directamente por un click puede ejecutarse en el handler.

No necesitas useEffect para reaccionar a cada interacción.

## 9. Práctica guiada

Crea controles incrementar, decrementar y reset. Primero registra intención; después conecta estado.

## 10. Errores frecuentes

- ejecutar handler al render;
- div clickable;
- useEffect para click;
- stopPropagation indiscriminado;
- optimizar arrows sin medir.

## 11. Reto
Barra de acciones semánticas con callbacks recibidos por props.

## 12. Autoevaluación

1. ¿onClick recibe función o resultado?
2. ¿Cómo pasar id?
3. ¿React elimina semántica HTML?
4. ¿Click necesita useEffect?
5. ¿stopPropagation por defecto?

## 13. Checklist

- [ ] Handlers correctos.
- [ ] Elementos nativos.
- [ ] Props de eventos.
- [ ] Evento en el lugar correcto.

Continúa con estado.

## Laboratorio desarrollado: Funciones de evento y comportamiento nativo

### Modelo, contrato y decisiones

onClick recibe una función que React invoca tras la interacción. onClick={accion()} ejecutaría la función durante render y pasaría su resultado, que normalmente no es el handler deseado. El formulario utiliza onSubmit y preventDefault para manejar su envío sin navegación documental. Un botón dentro de un formulario envía por defecto si no tiene otro type; la acción local declara type=button para conservar una intención distinta.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/06. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Enviar cambia el mensaje sin navegar; Acción local informa su texto.

### Implementación completa del componente

```jsx
import { useState } from "react";
export default function App() {
  const [mensaje, setMensaje] = useState("Sin eventos");
  return (
    <section>
      <h2>Eventos y acciones</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setMensaje("Formulario recibido sin navegar.");
        }}
      >
        <button>Enviar formulario</button>
        <button
          type="button"
          onClick={(e) => setMensaje(`Pulsado: ${e.currentTarget.textContent}`)}
        >
          Acción local
        </button>
      </form>
      <p role="status">{mensaje}</p>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Activa ambos controles con teclado. Añade un span al botón local y compara target con currentTarget dentro del handler.

**Casos que debes registrar:** Click en span; click en botón; Enter; botón local no envía.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 05: Composición](../unidad05-composicion/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 07: Estado con useState](../unidad07-usestate/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2006%20%E2%80%94%20Eventos%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad06-eventos%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
