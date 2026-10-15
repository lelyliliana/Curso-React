# Unidad 19: Context

**[Recorrido del código y resolución paso a paso](DESARROLLO.md)**

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Compartir valores a través de un subárbol sin prop drilling excesivo y comprender el costo de actualizaciones.

## 1. Problema

```text
App
 ↓ theme
Layout
 ↓ theme
Panel
 ↓ theme
Button
```

Si componentes intermedios solo retransmiten un valor, Context puede ayudar.

## 2. Context no es estado por sí solo

Context **transporta un valor**.

El valor puede venir de:

- state;
- reducer;
- prop;
- configuración.

No reemplaza automáticamente useState/useReducer.

## 3. Provider

Conceptualmente:

```jsx
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>
```

Los consumidores bajo ese provider reciben el valor más cercano.

La API concreta puede evolucionar entre versiones de React; sigue la versión del proyecto.

## 4. Buenos candidatos

Frecuentes:

- tema;
- idioma;
- sesión/identidad leída ampliamente;
- configuración estable;
- servicios compartidos.

No porque sean “globales”, sino porque muchos descendientes los necesitan.

## 5. Todo en Context

Un objeto gigante:

```text
{usuario, carrito, modal, formulario, filtros, reloj,...}
```

puede acoplar partes no relacionadas y provocar actualizaciones amplias.

Divide por responsabilidades cuando exista necesidad real.

## 6. Re-render

Cuando cambia el value, consumidores pueden volver a renderizar.

Crear un objeto nuevo en cada render puede importar si causa actualizaciones innecesarias en un árbol grande.

No memoices el value por reflejo: primero identifica un problema.

## 7. Context vs composición

A veces puedes evitar prop drilling pasando un componente/children más cerca del lugar que lo necesita.

No uses Context antes de considerar composición.

## 8. Estado remoto

Datos de servidor con cache/revalidación suelen tener necesidades distintas del estado compartido local.

No conviertas Context en una cache remota casera automáticamente.

## 9. Práctica guiada

Implementa tema:

- provider;
- consumidor profundo;
- toggle.

Observa renders con React DevTools.

## 10. Errores frecuentes

- Context = state manager completo;
- un Context para todo;
- memoizar sin medir;
- Context para datos remotos complejos;
- usarlo cuando composición bastaba.

## 11. Reto
Tema compartido con provider pequeño y persistencia separada.

## 12. Autoevaluación

1. ¿Context guarda estado por sí mismo?
2. ¿Qué problema resuelve?
3. ¿Todo global va a Context?
4. ¿Qué pasa cuando cambia value?
5. ¿Composición puede evitarlo?
6. ¿Cache remota = Context?

## 13. Checklist

- [ ] Context con propósito.
- [ ] Value pequeño/coherente.
- [ ] Consumidores necesarios.
- [ ] Sin optimización prematura.

Continúa con reducer.

## Laboratorio desarrollado: Distribución de datos con Context

### Modelo, contrato y decisiones

El proveedor delimita qué descendientes reciben tema y cambiar. El estado sigue teniendo un propietario; Context distribuye su valor, no sustituye por sí mismo un modelo de estado. La sintaxis de proveedor directa <Tema value=...> corresponde a React 19; la forma <Tema.Provider> sigue siendo reconocible en código anterior. Un valor objeto nuevo puede actualizar consumidores; no concluyas que todo estado local necesita un contexto global.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/19. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Cambiar tema actualiza al consumidor entre claro y oscuro.

### Implementación completa del componente

```jsx
import { createContext, useContext, useState } from "react";
const Tema = createContext(null);
function Vista() {
  const { tema, cambiar } = useContext(Tema);
  return (
    <div className={tema === "oscuro" ? "oscuro" : ""}>
      <p>Tema: {tema}</p>
      <button type="button" onClick={cambiar}>
        Cambiar tema
      </button>
    </div>
  );
}
export default function App() {
  const [tema, setTema] = useState("claro");
  return (
    <section>
      <h2>Context dentro de un proveedor</h2>
      <Tema
        value={{
          tema,
          cambiar: () => setTema((t) => (t === "claro" ? "oscuro" : "claro")),
        }}
      >
        <Vista />
      </Tema>
    </section>
  );
}
```

### Experimentar y comprobar

Añade un segundo consumidor dentro del proveedor y uno fuera. Decide una respuesta explícita para ausencia de proveedor y conserva los estados locales de formularios.

**Casos que debes registrar:** Dos consumidores; fuera del proveedor; toggle; estado local separado.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 18: Routing y URL como estado](../unidad18-routing/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 20: useReducer y transiciones de estado](../unidad20-usereducer/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2019%20%E2%80%94%20Context%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad19-context%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
