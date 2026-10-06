# Unidad 01: Modelo mental de React

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Comprender render declarativo, árbol de componentes, pureza del render y diferencia entre calcular UI y modificar el DOM.

## 1. Idea central

| Momento | Responsabilidad |
|---|---|
| Entradas | Props, estado y contexto actuales |
| Render | Calcular la descripción de UI con esas entradas |
| Commit | React aplica actualizaciones necesarias al DOM |

Tú describes qué interfaz corresponde al estado actual.

## 2. Declarativo

En código imperativo podrías buscar un botón, cambiar texto, ocultar un panel y añadir una clase manualmente.

En React describes el resultado:

```jsx
function Vista({ activo }) {
  return activo ? <Panel /> : <Mensaje />;
}
```

## 3. Componente como función

Modelo inicial:

```text
UI = f(props, estado)
```

Para las mismas entradas, el render debería ser predecible.

## 4. Render no es pintar inmediatamente

React ejecuta el componente para calcular qué debería mostrarse.

Después aplica los cambios necesarios al DOM durante la fase correspondiente.

Distinguir render y commit prepara el tema de efectos.

## 5. Render debe ser puro

Durante render no deberías iniciar fetch, escribir localStorage o cambiar document.title.

Esos son efectos externos.

React puede ejecutar render más veces de las que intuitivamente esperas, especialmente en desarrollo y modelos concurrentes.

## 6. No mutar entradas

```jsx
function Lista({ items }) {
  items.push(nuevo); // incorrecto
}
```

El render no debe modificar props ni estado existente.

## 7. Estado como snapshot

En un render concreto, una variable de estado representa un snapshot.

Llamar al setter no modifica esa variable ya capturada: solicita una actualización que puede producir otro render.

## 8. Reconciliación

Cuando la descripción cambia, React reconcilia el árbol y actualiza el DOM necesario.

No necesitas conocer todos los detalles internos para programar correctamente.

## 9. StrictMode

En desarrollo puede ejecutar procesos adicionales para detectar código impuro y problemas de efectos.

No desactives StrictMode solo para esconder un efecto duplicado sin investigar la causa.

## 10. DOM manual

Refs permiten foco, medición o integración con sistemas externos.

Pero modificar manualmente nodos administrados por React como patrón habitual puede desincronizar la interfaz.

## 11. Práctica guiada

Para un carrito identifica:

- props;
- estado;
- UI derivada;
- eventos;
- efectos externos.

Dibuja el árbol de componentes.

## 12. Errores frecuentes

- setter = asignación inmediata;
- fetch durante render;
- mutar props;
- DOM manual para mostrar/ocultar;
- StrictMode interpretado como bug.

## 13. Reto
Describe una interfaz como función de props/estado sin escribir efectos.

## 14. Autoevaluación

1. ¿Qué significa declarativo?
2. ¿Render y commit son lo mismo?
3. ¿Por qué render puro?
4. ¿Estado es snapshot?
5. ¿Setter cambia la variable actual?
6. ¿DOM manual está prohibido siempre?

## 15. Checklist

- [ ] Pienso declarativamente.
- [ ] Render puro.
- [ ] No muto entradas.
- [ ] Distingo render/commit.

Continúa con JSX.

## Laboratorio desarrollado: Interfaz derivada del estado

### Modelo, contrato y decisiones

El componente mantiene nombre como dato de estado y calcula saludo durante cada render. No hay dos variables reactivas independientes para el mismo hecho. setNombre solicita otro render; ese render recibe el nuevo snapshot y produce el texto correspondiente. React decide las actualizaciones del DOM durante commit. Renderizar no significa sustituir todo el documento ni ejecutar un programa imperativo que deba modificar manualmente cada nodo.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/01. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

El saludo empieza en Hola, Ana y cambia al escribir.

### Implementación completa del componente

```jsx
import { useState } from "react";
export default function App() {
  const [nombre, setNombre] = useState("Ana");
  const saludo = `Hola, ${nombre}`;
  return (
    <section>
      <h2>Interfaz derivada del estado</h2>
      <label htmlFor="nombre">Nombre ficticio</label>
      <input
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p role="status">{saludo}</p>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Añade una longitud del nombre calculada durante render. Comprueba que cambiar el nombre actualice saludo y longitud sin añadir otro estado ni un efecto.

**Casos que debes registrar:** Ana; Luis; vacío; texto largo; modificar sin enviar.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 00: Entorno y primer proyecto React](../unidad00-entorno/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 02: JSX](../unidad02-jsx/README.md)
