# Unidad 01: Modelo mental de React

**[Recorrido del código y resolución paso a paso](DESARROLLO.md)**

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

### Experimentar y comprobar

Añade una longitud del nombre calculada durante render. Comprueba que cambiar el nombre actualice saludo y longitud sin añadir otro estado ni un efecto.

**Casos que debes registrar:** Ana; Luis; vacío; texto largo; modificar sin enviar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 00: Entorno y primer proyecto React](../unidad00-entorno/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 02: JSX](../unidad02-jsx/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2001%20%E2%80%94%20Modelo%20mental%20de%20React%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad01-modelo-mental%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
