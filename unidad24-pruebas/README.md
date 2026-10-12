# Unidad 24: Pruebas de componentes

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Probar componentes desde el contrato visible para el usuario en lugar de detalles internos.

## 1. Pregunta

No:
> ¿el state interno vale X?

Sí:
> ¿la persona ve/puede hacer lo esperado?

## 2. Consultas

Con herramientas como Testing Library, prefiere consultas cercanas a accesibilidad:

- role;
- label;
- texto;
- placeholder cuando sea realmente el identificador disponible.

Esto incentiva una UI accesible.

## 3. Evento de usuario

Herramientas como user-event simulan interacciones de forma más realista que disparar eventos aislados manualmente en muchos casos.

Usa la API compatible con las versiones del proyecto.

## 4. Formulario

Prueba:

1. encontrar por label;
2. escribir;
3. enviar;
4. ver error/resultado.

No selecciones por `.form-input:nth-child(2)`.

## 5. Props

Para un componente presentacional, renderiza props relevantes y comprueba resultado.

No necesitas testear que React “pasa props”.

## 6. Estado

Provoca el cambio mediante la interacción pública.

Evita llamar setters internos desde el test.

## 7. Mock

Mockea límites externos:

- cliente API;
- tiempo cuando corresponda;
- browser API difícil de controlar.

No mockees todos los hijos solo para aislar el componente.

## 8. Accesibilidad

Un test que no encuentra un botón por rol/nombre puede revelar un problema real de markup.

No “arregles el test” cambiándolo a testid antes de revisar UI.

## 9. Snapshot

Puede servir en casos pequeños/estables, pero snapshots enormes aceptados automáticamente aportan poca confianza.

## 10. Práctica guiada

Prueba un formulario:

- submit vacío;
- mensaje;
- completar;
- submit válido;
- callback.

## 11. Errores frecuentes

- probar state interno;
- clases CSS como selector;
- testid para todo;
- fireEvent cuando user interaction aporta más;
- mockear cada hijo;
- snapshots gigantes.

## 12. Reto
Suite de formulario usando labels/roles y comportamiento observable.

## 13. Autoevaluación

1. ¿Qué contrato probar?
2. ¿Por qué role/label?
3. ¿Setter interno?
4. ¿Qué mockear?
5. ¿Testid primera opción?
6. ¿Snapshot grande?

## 14. Checklist

- [ ] Perspectiva del usuario.
- [ ] Queries accesibles.
- [ ] Interacciones reales.
- [ ] Mocks en límites.

Continúa con flujos.

## Laboratorio desarrollado: Pruebas desde controles y resultados

### Modelo, contrato y decisiones

El laboratorio reutiliza FormularioNombre. Las pruebas lo buscan por label y role, escriben con user-event y verifican resultado o callback. Estas consultas no demuestran toda la accesibilidad, pero mantienen relación con controles que una persona puede identificar. Un test que lee un setter interno puede pasar aunque el formulario no se pueda enviar; uno que usa clases CSS frágiles puede fallar por un cambio visual sin cambio de comportamiento.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/24. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

El mismo formulario se puede usar manualmente y comprobar con Vitest.

### Implementación completa del componente

```jsx
import { FormularioNombre } from "../../unidad10-formularios/ejemplo/App.jsx";
export default function App() {
  return (
    <section>
      <h2>Formulario bajo prueba</h2>
      <p>Compara la interacción manual con tests/componentes.test.jsx.</p>
      <FormularioNombre />
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Añade una prueba de un carácter y otra de dos instancias. Comprueba que no se invoca el callback ante entrada inválida y que las etiquetas apuntan a campos distintos.

**Casos que debes registrar:** Nombre corto; normalizado; dos instancias; callback; foco tras error.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 23: Accesibilidad en React](../unidad23-accesibilidad/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 25: Pruebas de flujos asíncronos](../unidad25-pruebas-flujos/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2024%20%E2%80%94%20Pruebas%20de%20componentes%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad24-pruebas%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
