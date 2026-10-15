# Unidad 07: Estado con useState

**[Recorrido del código y resolución paso a paso](DESARROLLO.md)**

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

### Experimentar y comprobar

En una copia, reemplaza los tres actualizadores por setCantidad(cantidad + 1). Predice el resultado y contrástalo; después restaura la versión correcta y prueba Reiniciar.

**Casos que debes registrar:** Una pulsación; dos pulsaciones; reiniciar; reemplazos vs actualizadores.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 06: Eventos en React](../unidad06-eventos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 08: Renderizado condicional](../unidad08-condicional/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2007%20%E2%80%94%20Estado%20con%20useState%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad07-usestate%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
