# Unidad 23: Accesibilidad en React

**[Recorrido del código y resolución paso a paso](DESARROLLO.md)**

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Preservar semántica HTML y gestionar foco/estado cuando la interfaz cambia dinámicamente.

## 1. React no cambia HTML

Acción:

```jsx
<button type="button">Guardar</button>
```

Navegación: enlace.

No uses div onClick y luego intentes reconstruir teclado/roles con ARIA.

## 2. Labels

```jsx
<>
  <label htmlFor="email">Correo</label>
  <input id="email" />
</>
```

Los fundamentos del curso HTML/CSS siguen vigentes.

## 3. IDs

Para componentes reutilizables, `useId` puede generar IDs estables para relaciones de accesibilidad como label/control/descripciones.

No uses useId como key de listas de datos; las keys deben venir de la identidad del dato.

## 4. Foco

Muévelo cuando el flujo lo requiere:

- abrir/cerrar dialog;
- error de envío complejo;
- navegación SPA en ciertos diseños.

No llames focus después de cada render.

## 5. Refs

```jsx
const inputRef = useRef(null);
inputRef.current?.focus();
```

Ref permite acceso imperativo cuando realmente necesitas interactuar con DOM/sistema externo.

No guardes en ref datos que deberían provocar render.

## 6. Mensajes dinámicos

`role="status"` / regiones live pueden anunciar actualizaciones no enfocadas.

`role="alert"` es más urgente.

No hagas toda la aplicación live.

## 7. Dialog

Un modal requiere:

- nombre;
- foco inicial;
- cierre;
- Escape;
- retorno de foco;
- fondo no interactuable cuando es modal.

Usa componentes/librerías accesibles o APIs nativas apropiadas cuando el problema lo justifique; no improvises solo CSS.

## 8. Routing

Tras navegación SPA, el usuario de lector de pantalla puede necesitar contexto del cambio.

Actualiza título y considera gestión de foco/heading según aplicación.

## 9. Loading

Skeleton/spinner debe tener alternativa textual cuando sea necesario.

No anuncies cada cambio de porcentaje si genera ruido.

## 10. Práctica guiada

Implementa formulario + dialog y prueba:

- Tab/Shift+Tab;
- Enter/Escape;
- foco inicial/retorno;
- labels;
- errores;
- anuncios.

## 11. Errores frecuentes

- div button;
- useId como key;
- focus en cada render;
- ref como estado invisible;
- aria-live global;
- modal solo visual.

## 12. Reto
Flujo accesible abrir dialog→interactuar→cerrar→retornar foco.

## 13. Autoevaluación

1. ¿React reemplaza semántica?
2. ¿useId para key?
3. ¿Cuándo ref?
4. ¿role status/alert?
5. ¿Qué necesita dialog?
6. ¿Navegación SPA puede necesitar foco?

## 14. Checklist

- [ ] HTML nativo.
- [ ] Foco intencional.
- [ ] IDs correctos.
- [ ] Anuncios moderados.
- [ ] Prueba teclado.

Continúa con pruebas.

## Laboratorio desarrollado: Accesibilidad como comportamiento

### Modelo, contrato y decisiones

Los controles son botones nativos con nombres visibles. Agregar mantiene foco en el botón y la región status comunica cantidad. Limpiar elimina recursos y mueve foco a Agregar, un destino que sigue existiendo. Los ids de recursos son identidad de la lista, no un historial global. No pongas aria-live en toda la aplicación: los anuncios deben comunicar cambios relevantes sin repetir contenido completo ni disputar el foco con otras regiones.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/23. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Agregar anuncia cantidad; Limpiar deja 0 y enfoca Agregar.

### Implementación completa del componente

```jsx
import { useRef, useState } from "react";
export default function App() {
  const [recursos, setRecursos] = useState([]);
  const agregar = useRef(null);
  return (
    <section>
      <h2>Anuncios y foco estable</h2>
      <button
        ref={agregar}
        type="button"
        onClick={() =>
          setRecursos((r) => [
            ...r,
            { id: r.length + 1, titulo: `Recurso ${r.length + 1}` },
          ])
        }
      >
        Agregar recurso
      </button>
      <button
        type="button"
        onClick={() => {
          setRecursos([]);
          agregar.current?.focus();
        }}
      >
        Limpiar recursos
      </button>
      <p role="status">{recursos.length} recursos disponibles.</p>
      <ul>
        {recursos.map((r) => (
          <li key={r.id}>{r.titulo}</li>
        ))}
      </ul>
    </section>
  );
}
```

### Experimentar y comprobar

Realiza tres agregados con teclado y limpia. Añade un mensaje que comunique cantidad eliminada y verifica el foco con un lector de pantalla.

**Casos que debes registrar:** Tres activaciones; anuncio; limpiar; foco válido; teclado y lector.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 22: Persistencia local en React](../unidad22-persistencia/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 24: Pruebas de componentes](../unidad24-pruebas/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2023%20%E2%80%94%20Accesibilidad%20en%20React%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad23-accesibilidad%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
