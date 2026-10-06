# Unidad 04: Props y flujo de datos

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Pasar datos/comportamiento de padre a hijo y tratar props como entradas inmutables.

## 1. Props

```jsx
function Saludo({ nombre }) {
  return <p>Hola, {nombre}</p>;
}

<Saludo nombre="Ana" />
```

## 2. Flujo descendente

El padre renderiza al hijo y le pasa datos mediante props. El hijo comunica intenciones mediante callbacks recibidos.

React favorece flujo de datos unidireccional.

El hijo no modifica directamente el estado del padre; puede recibir un callback.

## 3. Props inmutables

Incorrecto:

```jsx
function Lista({ items }) {
  items.push("nuevo");
}
```

Props pertenecen conceptualmente al padre/llamador.

## 4. Callback prop

```jsx
function Boton({ onGuardar }) {
  return (
    <button onClick={onGuardar}>
      Guardar
    </button>
  );
}
```

El hijo comunica una intención; el padre decide qué hacer.

## 5. Valores por defecto

Puedes usar defaults en destructuring:

```jsx
function Avatar({ size = 48 }) {
  return <span style={{ fontSize: size }}>A</span>;
}
```

Recuerda las reglas de JavaScript: el default aplica a `undefined`, no a null.

## 6. Objetos

Pasar un objeto nuevo literal en cada render crea una referencia nueva.

Eso normalmente es correcto; solo se vuelve relevante en ciertos escenarios de memoización/efectos que estudiaremos después.

No optimices prematuramente.

## 7. Spread props

```jsx
<Boton {...props} />
```

puede ser útil en componentes de infraestructura, pero también puede pasar atributos inesperados y ocultar la API.

Prefiere props explícitas cuando mejora claridad.

## 8. children

Es una prop especial de composición y se profundiza en la siguiente unidad.

## 9. Práctica guiada

CourseCard recibe:

- título;
- descripción;
- estado;
- callback seleccionar.

El componente no modifica la colección original.

## 10. Errores frecuentes

- mutar prop;
- hijo intentando cambiar padre directamente;
- callback ejecutado al pasar;
- spread indiscriminado;
- memoizar objetos desde el inicio sin problema medido.

## 11. Reto
Componente configurable con variantes y acción sin duplicar markup.

## 12. Autoevaluación

1. ¿Dirección de props?
2. ¿Se mutan?
3. ¿Cómo comunica hijo al padre?
4. ¿Default cubre null?
5. ¿Spread props siempre?

## 13. Checklist

- [ ] Props claras.
- [ ] Flujo unidireccional.
- [ ] Callbacks.
- [ ] Sin mutación.

Continúa con composición.

## Laboratorio desarrollado: Datos de entrada y contrato

### Modelo, contrato y decisiones

Props comunica datos del padre al hijo. El hijo no debería mutar el objeto recibido para comunicar un cambio: el padre continúa siendo propietario de esos datos. Los valores por defecto de destructuring se aplican a undefined, no a null, 0 o false. Un ejemplo puede observar props de distintos valores sin que eso convierta todos esos valores en válidos para una aplicación. Cuando una regla exige números enteros o texto no vacío, valida esa regla en el límite correspondiente.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/04. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Cupos 0 permanece 0; la ficha sin cupos usa 20; null se muestra sin un número.

### Implementación completa del componente

```jsx
function Ficha({ titulo, cupos = 20 }) {
  return (
    <section>
      <h3>{titulo}</h3>
      <p>Cupos: {cupos}</p>
    </section>
  );
}
export default function App() {
  return (
    <section>
      <h2>Props y valores por defecto</h2>
      <Ficha titulo="JavaScript" cupos={0} />
      <Ficha titulo="React" />
      <Ficha titulo="Otro curso" cupos={null} />
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Añade una validación de cupos entero no negativo. Decide si null debe rechazarse o significar dato desconocido; haz visible esa decisión en la ficha.

**Casos que debes registrar:** cupos 0; ausente; undefined; null; -1; cadena numérica.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 03: Componentes](../unidad03-componentes/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 05: Composición](../unidad05-composicion/README.md)
