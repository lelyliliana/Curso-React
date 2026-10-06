# Unidad 16: Cancelación, cleanup y carreras de red

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Evitar que una respuesta antigua actualice estado nuevo y cancelar trabajo que dejó de ser relevante.

## 1. Carrera

```text
"ca"   → request A
"casa" → request B
```

B termina primero y muestra casa.

Después A termina y sobrescribe con ca.

La red funcionó; el estado quedó incorrecto.

## 2. AbortController

```jsx
useEffect(() => {
  const controller =
    new AbortController();

  cargar(query, controller.signal);

  return () => {
    controller.abort();
  };
}, [query]);
```

Cuando query cambia, cleanup aborta la solicitud anterior.

## 3. Abort intencional

Una cancelación porque cambió la consulta no debería mostrarse como error del servidor.

Distingue abort de fallos que la persona necesita conocer.

## 4. Ignorar resultados

También puedes proteger el estado con una bandera/identificador que descarte resultados obsoletos.

Abortar ahorra trabajo cuando la API lo soporta; ignorar evita aplicar un resultado viejo.

## 5. Cleanup no solo al desmontar

Cuando una dependencia cambia:

```text
cleanup del efecto anterior
→ setup del nuevo efecto
```

Este modelo es fundamental.

## 6. Debounce

Puede reducir peticiones en un buscador, pero no sustituye completamente la protección contra respuestas fuera de orden.

## 7. Carrera del loading

Si A se cancela porque B empezó, el finally de A no debería poner loading=false mientras B sigue activa.

Asocia las transiciones al request vigente o diseña el estado para evitarlo.

## 8. Librerías de datos

Herramientas especializadas pueden gestionar cancelación, deduplicación y cache.

Comprende primero el problema que delegas.

## 9. Práctica guiada

Buscador:

1. escribe rápido;
2. simula latencias invertidas;
3. reproduce la carrera;
4. corrige;
5. observa Network.

## 10. Errores frecuentes

- abort como error visible;
- cleanup solo al unmount;
- finally viejo pisa loading nuevo;
- debounce como única protección;
- respuesta vieja sobrescribe.

## 11. Reto
Buscador sin resultados obsoletos bajo latencias invertidas.

## 12. Autoevaluación

1. ¿Qué es carrera?
2. ¿Cuándo cleanup?
3. ¿Abort e ignorar son iguales?
4. ¿Debounce evita toda carrera?
5. ¿Qué puede hacer un finally viejo?

## 13. Checklist

- [ ] Cancelo o ignoro.
- [ ] Cleanup correcto.
- [ ] Estado vigente.
- [ ] Sin error falso por abort.

Continúa con custom hooks.

## Laboratorio desarrollado: Cancelar y conservar la respuesta vigente

### Modelo, contrato y decisiones

Cada nueva carga incrementa un identificador de solicitud y aborta la anterior. El resultado solo se acepta si el componente sigue activo y el id coincide con el actual. AbortController por sí solo no demuestra ausencia de carreras: una operación sustituida puede responder aun cuando no atienda la señal. Al desmontar, el cleanup invalida pendientes y solicita cancelación. Esta protección cubre la UI, no revierte automáticamente un trabajo remoto que el servidor ya haya realizado.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/16. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Cancelar lento informa cancelada; dejarlo llegar al límite informa timeout.

### Implementación completa del componente

```jsx
import Catalogo from "../../features/catalogo/Catalogo.jsx";
export default function App() {
  return (
    <section>
      <h2>Cancelación y solicitud vigente</h2>
      <p>Selecciona lento; cancela o inicia normal inmediatamente después.</p>
      <Catalogo />
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Inicia lento y luego normal; espera más de 800 ms. Cambia de ruta durante lento y vuelve. Comprueba resultado vigente y que la nueva vista no reciba una respuesta antigua.

**Casos que debes registrar:** Cancelación manual; 400 ms; respuesta vieja; desmontaje y nuevo montaje.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 15: Loading, error, empty y datos remotos](../unidad15-estados-remotos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 17: Custom hooks](../unidad17-custom-hooks/README.md)
