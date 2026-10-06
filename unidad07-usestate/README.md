# Unidad 07: Estado con useState

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Modelar memoria del componente, comprender snapshots y actualizar objetos/arrays sin mutarlos.

## 1. Estado

```jsx
const [contador, setContador] =
  useState(0);
```

contador es el valor de este render. El setter solicita una actualización.

## 2. Setter no cambia el snapshot

```jsx
console.log(contador);
setContador(contador + 1);
console.log(contador);
```

Los dos logs pueden mostrar el mismo valor porque pertenecen al mismo render.

## 3. Actualización funcional

Cuando depende del anterior:

```jsx
setContador(c => c + 1);
```

Es especialmente importante cuando existen varias actualizaciones pendientes.

## 4. Varias actualizaciones

Tres llamadas:

```jsx
setContador(contador + 1);
setContador(contador + 1);
setContador(contador + 1);
```

usan el mismo snapshot.

Con updaters:

```jsx
setContador(c => c + 1);
setContador(c => c + 1);
setContador(c => c + 1);
```

cada updater recibe el estado pendiente anterior según las reglas de React.

## 5. Objetos

No mutes el objeto existente.

```jsx
setUsuario(u => ({
  ...u,
  nombre: "Ana"
}));
```

## 6. Arrays

```jsx
setItems(items =>
  items.filter(item => item.id !== id)
);
```

Usa transformaciones no mutantes.

## 7. Estado mínimo

No guardes nombre, apellido y nombreCompleto si nombreCompleto puede calcularse durante render.

Duplicar estado puede desincronizarlo.

## 8. Inicialización lazy

```jsx
useState(() => calcularInicial())
```

es útil cuando la inicialización es costosa.

No hace falta para valores triviales.

## 9. Identidad

React asocia estado con la posición/identidad del componente en el árbol.

Cambiar estructura o key puede reiniciar estado intencionalmente o por accidente.

## 10. Práctica guiada

Carrito:

- agregar;
- cambiar cantidad;
- eliminar;
- total derivado.

Guarda solo estado mínimo.

## 11. Errores frecuentes

- setter como asignación inmediata;
- mutar estado;
- guardar valores derivados;
- varias actualizaciones usando snapshot esperando acumulación;
- useState para constantes.

## 12. Reto
Carrito con actualizaciones inmutables y total calculado.

## 13. Autoevaluación

1. ¿Estado es snapshot?
2. ¿Setter cambia variable actual?
3. ¿Cuándo updater?
4. ¿Por qué no mutar?
5. ¿Qué es estado derivado?
6. ¿Estado se asocia con qué?

## 14. Checklist

- [ ] Estado mínimo.
- [ ] Actualización inmutable.
- [ ] Updater cuando corresponde.
- [ ] Derivo lo calculable.

Continúa con render condicional.

## Laboratorio desarrollado: Snapshot, cola y actualizadores

### Modelo, contrato y decisiones

cantidad pertenece al render que creó el handler. Llamar al setter no cambia retroactivamente esa variable. Las tres funciones actualizadoras reciben sucesivamente el resultado pendiente de la anterior, por lo que el resultado aumenta tres. Deben ser puras: no guardes en Storage ni envíes una petición dentro de ellas. React puede ejecutar comprobaciones adicionales en desarrollo y no deberías basar efectos externos en la cantidad de invocaciones del actualizador.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/07. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Una pulsación en Sumar tres produce Cantidad: 3.

### Implementación completa del componente

```jsx
import { useState } from "react";
export default function App() {
  const [cantidad, setCantidad] = useState(0);
  function sumarTres() {
    setCantidad((n) => n + 1);
    setCantidad((n) => n + 1);
    setCantidad((n) => n + 1);
  }
  return (
    <section>
      <h2>Snapshot y actualizadores</h2>
      <p role="status">Cantidad: {cantidad}</p>
      <button type="button" onClick={sumarTres}>
        Sumar tres
      </button>
      <button type="button" onClick={() => setCantidad(0)}>
        Reiniciar
      </button>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

En una copia, reemplaza los tres actualizadores por setCantidad(cantidad + 1). Predice el resultado y contrástalo; después restaura la versión correcta y prueba Reiniciar.

**Casos que debes registrar:** Una pulsación; dos pulsaciones; reiniciar; reemplazos vs actualizadores.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 06: Eventos en React](../unidad06-eventos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 08: Renderizado condicional](../unidad08-condicional/README.md)
