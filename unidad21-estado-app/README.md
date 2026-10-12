# Unidad 21: Diseñar el estado de una aplicación

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Clasificar estado por naturaleza y asignarlo al propietario adecuado antes de elegir una librería.

## 1. Tipos útiles

**Local UI:** tab, modal, input.  
**Compartido cliente:** carrito o selección usada por varias ramas.  
**URL:** ruta, búsqueda, página, filtros compartibles.  
**Remoto:** productos, pedidos, datos del backend.  
**Persistente cliente:** preferencias o borradores que sobreviven recarga.

## 2. Preguntas

Para cada dato:

1. ¿quién lo necesita?
2. ¿quién lo modifica?
3. ¿de dónde viene?
4. ¿debe sobrevivir recarga?
5. ¿debe aparecer en URL?
6. ¿es copia de otra fuente?

## 3. Local primero

No hagas global un valor porque quizá algún día otro componente lo necesite.

Eleva cuando exista la necesidad.

## 4. URL

Si recargar o compartir debe preservar filtro/página, URL puede ser mejor fuente que Context.

## 5. Server state

Datos remotos tienen frescura, cache, errores, revalidación y concurrencia.

No son simplemente otro useState global.

Herramientas de server state pueden aportar cuando la complejidad lo exige.

## 6. Persistencia

localStorage no debe ser espejo de todo React state.

Persiste solo lo que tiene requisito de sobrevivir.

## 7. Duplicación

Evita mantener el mismo filtro simultáneamente en URL, state, Context y storage sin una razón clara.

Cada copia exige sincronización.

## 8. Mapa

```text
URL ───── filtros
API ───── productos
Context ─ tema
local ─── modal
storage ─ preferencia
```

## 9. Práctica guiada

Clasifica datos de una tienda y asigna fuente/propietario. Identifica cuáles no deberían ser estado.

## 10. Errores frecuentes

- todo global;
- todo local;
- Context para server state complejo;
- storage espejo;
- URL duplicada;
- librería antes de mapear datos.

## 11. Reto
Mapa de estado completo con justificación de cada propietario.

## 12. Autoevaluación

1. ¿Filtro compartible dónde?
2. ¿Qué necesidades tiene server state?
3. ¿Todo debe persistir?
4. ¿Por qué local primero?
5. ¿Por qué evitar copias?
6. ¿Cuándo elegir librería?

## 13. Checklist

- [ ] Clasifico.
- [ ] Propietario claro.
- [ ] Una fuente de verdad.
- [ ] Herramienta después del problema.

Continúa con persistencia.

## Laboratorio desarrollado: Clasificar el estado de aplicación

### Modelo, contrato y decisiones

Las tareas son datos del dominio; filtro expresa la vista local; visibles es un cálculo derivado. No hace falta sincronizar una copia de visibles en un efecto. Cuando un filtro deba compartirse o sobrevivir Atrás/recarga puede pertenecer a URL, como en routing. Datos remotos, estado persistido y campos de formulario tienen ciclos distintos: reunirlos en un objeto global no resuelve automáticamente esas diferencias. Empieza identificando propietario, duración y fuente de cada hecho.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/21. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Filtrar completadas muestra Practicar y conserva la colección de dos tareas.

### Implementación completa del componente

```jsx
import { useState } from "react";
const tareas = [
  { id: 1, titulo: "Leer", completada: false },
  { id: 2, titulo: "Practicar", completada: true },
];
export default function App() {
  const [filtro, setFiltro] = useState("todas");
  const visibles = tareas.filter(
    (t) => filtro === "todas" || t.completada === (filtro === "completadas"),
  );
  return (
    <section>
      <h2>Datos, filtro y vista derivada</h2>
      <label htmlFor="filtro">Filtro local de la vista</label>
      <select
        id="filtro"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        {["todas", "pendientes", "completadas"].map((v) => (
          <option key={v}>{v}</option>
        ))}
      </select>
      <p>
        {visibles.length} de {tareas.length} tareas
      </p>
      <ul>
        {visibles.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Añade una búsqueda local que se combine con filtro. Explica qué habría que cambiar si esa búsqueda debiera compartirse mediante un enlace.

**Casos que debes registrar:** Todas; pendientes; completadas; combinación con búsqueda; origen conservado.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 20: useReducer y transiciones de estado](../unidad20-usereducer/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 22: Persistencia local en React](../unidad22-persistencia/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2021%20%E2%80%94%20Estado%20de%20aplicaci%C3%B3n%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad21-estado-app%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
