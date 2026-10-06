# Unidad 05: Composición

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Crear componentes flexibles mediante children y regiones explícitas sin construir jerarquías innecesarias.

## 1. children

```jsx
function Panel({ children }) {
  return (
    <section className="panel">
      {children}
    </section>
  );
}
```

Uso:

```jsx
<Panel>
  <h2>Resumen</h2>
  <p>Contenido</p>
</Panel>
```

Panel controla la envoltura; el consumidor controla el contenido.

## 2. Composición vs demasiadas props

Un contenedor con título, subtítulo, imagen, dos botones, footer y cada fragmento configurable puede terminar con una API enorme.

Cuando el componente es realmente un contenedor, children o regiones explícitas pueden expresar mejor la composición.

## 3. Slots explícitos

```jsx
function DialogLayout({
  title,
  actions,
  children
}) {
  // ...
}
```

Props que contienen elementos pueden representar regiones.

## 4. Especialización

```jsx
function WarningPanel({ children }) {
  return (
    <Panel variant="warning">
      {children}
    </Panel>
  );
}
```

La composición suele ser más flexible que inventar jerarquías de componentes.

## 5. Render props

Una prop también puede ser una función que produce UI/comportamiento.

Es un patrón útil en casos concretos, aunque hooks han reducido muchos usos históricos.

No lo introduzcas si props normales/children bastan.

## 6. Estado

Un contenedor visual no necesita poseer automáticamente el estado de su contenido.

El estado debe vivir donde exista la responsabilidad de controlarlo.

## 7. Semántica

No abstraigas HTML hasta volverlo irreconocible.

Un componente debe preservar o definir claramente su semántica.

## 8. Práctica guiada

Crea Card con header opcional, children y actions. Úsala para curso y perfil sin duplicar estructura base.

## 9. Errores frecuentes

- componente con demasiadas props de contenido;
- children para datos que serían más claros como props;
- abstraer cada etiqueta;
- herencia innecesaria;
- contenedor apropiándose de estado.

## 10. Reto
Card/Panel reutilizable por composición con API documentada.

## 11. Autoevaluación

1. ¿Qué es children?
2. ¿Cuándo región explícita?
3. ¿Composición vs herencia?
4. ¿Children siempre es mejor?
5. ¿Quién posee estado?

## 12. Checklist

- [ ] Composición flexible.
- [ ] API clara.
- [ ] Semántica.
- [ ] Estado en dueño correcto.

Continúa con eventos.

## Laboratorio desarrollado: Composición y huecos de contenido

### Modelo, contrato y decisiones

Tarjeta aporta estructura y recibe children y acciones. El padre decide el contenido; no hace falta crear una subclase para cada variante. Un slot puede ser un nodo React, incluida otra composición de elementos. Esta organización permite reutilizar distribución sin añadir un enorme número de flags que mezclen dominios. Mantén semántica de headings y enlaces aunque el contenido llegue por props.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/05. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

La tarjeta contiene una lista y un enlace a eventos.

### Implementación completa del componente

```jsx
function Tarjeta({ titulo, children, acciones }) {
  return (
    <section>
      <h3>{titulo}</h3>
      <div>{children}</div>
      <div>{acciones}</div>
    </section>
  );
}
export default function App() {
  return (
    <section>
      <h2>Componer contenido</h2>
      <Tarjeta
        titulo="Ruta de estudio"
        acciones={<a href="#/laboratorio/06">Continuar con eventos</a>}
      >
        <p>El padre elige el contenido; la tarjeta aporta estructura.</p>
        <ul>
          <li>Leer</li>
          <li>Practicar</li>
        </ul>
      </Tarjeta>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Compón otra tarjeta con un párrafo diferente y un enlace al proyecto. Conserva el componente Tarjeta; no dupliques su estructura ni uses un botón para una navegación normal.

**Casos que debes registrar:** Dos tarjetas; distintos hijos; enlace navegable; estructura consistente.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 04: Props y flujo de datos](../unidad04-props/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 06: Eventos en React](../unidad06-eventos/README.md)
