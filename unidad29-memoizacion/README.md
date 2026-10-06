# Unidad 29: memo, useMemo y useCallback

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Aplicar memoización cuando evita trabajo medido y comprender su costo/limitaciones.

## 1. React.memo

```jsx
const Fila = memo(function Fila({ nombre }) {
  return <li>{nombre}</li>;
});
```

Puede evitar render de un componente cuando sus props se consideran iguales según la comparación aplicable.

No evita render si una prop relevante cambia.

## 2. Referencias

```jsx
<Fila options={{ compact: true }} />
```

crea un objeto nuevo en cada render.

Eso puede invalidar memo.

No conviertas automáticamente cada objeto en useMemo: primero comprueba que Fila es costosa y memo aporta.

## 3. useMemo

```jsx
const visibles = useMemo(
  () => filtrar(items, query),
  [items, query]
);
```

Cachea el resultado de un cálculo entre renders bajo dependencias.

Es una optimización, no garantía semántica que deba sostener lógica de negocio.

## 4. useCallback

```jsx
const eliminar = useCallback(
  id => dispatch({ type: "remove", id }),
  []
);
```

Cachea la referencia de una función.

Es útil cuando esa estabilidad tiene un consumidor que se beneficia, por ejemplo un hijo memoizado o una dependencia donde el diseño lo exige.

## 5. Costos

Memoización añade:

- comparación;
- memoria;
- dependencias;
- complejidad mental.

Puede no mejorar o incluso empeorar.

## 6. React Compiler / herramientas modernas

Ecosistemas React modernos pueden automatizar ciertas optimizaciones según toolchain/versiones.

No bases fundamentos del curso en que una optimización automática exista; escribe componentes correctos y mide.

## 7. Dependencias

No uses useMemo/useCallback para “engañar” el linter de effects.

Primero revisa si el efecto/arquitectura es correcta.

## 8. Práctica guiada

Componente costoso:

1. perfila sin memo;
2. memo;
3. prop objeto rompe memo;
4. estabiliza solo esa referencia;
5. compara.

## 9. Errores frecuentes

- memo en todo;
- useMemo para valor trivial;
- useCallback para cada handler;
- depender de memo para corrección;
- callar linter;
- no medir costo.

## 10. Reto
Demuestra con Profiler un caso donde memo ayuda y otro donde no aporta.

## 11. Autoevaluación

1. ¿memo garantiza no render?
2. ¿Qué cachea useMemo?
3. ¿useCallback?
4. ¿Qué cuesta memoizar?
5. ¿Sirve para corrección?
6. ¿Por qué medir?

## 12. Checklist

- [ ] Problema medido.
- [ ] Herramienta apropiada.
- [ ] Dependencias correctas.
- [ ] Comparación antes/después.

Continúa con arquitectura.

## Laboratorio desarrollado: Memoización como optimización

### Modelo, contrato y decisiones

La lista recibe items y onElegir. useMemo conserva el cálculo mientras q no cambia y useCallback conserva la referencia de elegir. El contador ajeno no modifica esas entradas, por lo que memo puede omitir trabajo del hijo. La aplicación debe seguir siendo correcta si React decide recalcular; ninguna regla del dominio se guarda exclusivamente en una caché. El curso no activa React Compiler, para poder observar explícitamente estas herramientas y sus límites.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/29. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Filtrar y elegir cambia la salida; el contador no altera la selección.

### Implementación completa del componente

```jsx
import { memo, useCallback, useMemo, useState } from "react";
const datos = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  titulo: `Recurso ${i + 1}`,
}));
const Lista = memo(function Lista({ items, onElegir }) {
  return (
    <ul>
      {items.map((r) => (
        <li key={r.id}>
          <button type="button" onClick={() => onElegir(r.titulo)}>
            {r.titulo}
          </button>
        </li>
      ))}
    </ul>
  );
});
export default function App() {
  const [q, setQ] = useState(""),
    [contador, setContador] = useState(0),
    [elegido, setElegido] = useState("Ninguno");
  const visibles = useMemo(
    () => datos.filter((r) => r.titulo.includes(q)),
    [q],
  );
  const elegir = useCallback((titulo) => setElegido(titulo), []);
  return (
    <section>
      <h2>Referencias y memoización</h2>
      <label htmlFor="q">Filtrar recursos</label>
      <input id="q" value={q} onChange={(e) => setQ(e.target.value)} />
      <button type="button" onClick={() => setContador((n) => n + 1)}>
        Cambiar estado ajeno a la lista
      </button>
      <p>
        Contador: {contador}. Elegido: {elegido}
      </p>
      <Lista items={visibles} onElegir={elegir} />
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Sustituye items por una copia creada en cada render y perfila. Después restaura estabilidad y compara; no concluyas mejora solo por contar logs.

**Casos que debes registrar:** Filtro; selección; contador ajeno; nueva referencia; comparación de perfil.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 28: Re-renderizados y rendimiento](../unidad28-rendimiento/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 30: Arquitectura por features](../unidad30-arquitectura/README.md)
