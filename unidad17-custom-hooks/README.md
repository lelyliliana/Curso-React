# Unidad 17: Custom hooks

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Extraer lógica reactiva reutilizable sin esconder prematuramente el comportamiento de la aplicación.

## 1. Qué es

Una función cuyo nombre comienza con use y que puede llamar hooks.

```jsx
function useOnlineStatus() {
  const [online, setOnline] =
    useState(navigator.onLine);

  useEffect(() => {
    const actualizar = () => setOnline(navigator.onLine);
    window.addEventListener('online', actualizar);
    window.addEventListener('offline', actualizar);
    return () => {
      window.removeEventListener('online', actualizar);
      window.removeEventListener('offline', actualizar);
    };
  }, []);
  return online;
}
```

## 2. Comparte lógica, no estado automáticamente

navigator.onLine informa una señal de conectividad del navegador, no demuestra que una API concreta sea accesible. Un servidor puede fallar aunque online sea true.

Dos componentes que llaman el mismo custom hook obtienen instancias independientes de sus hooks internos, salvo que el hook use una fuente compartida externa/contexto.

Un custom hook no crea un singleton.

## 3. Reglas de Hooks

Los hooks se llaman:

- en nivel superior;
- desde componentes React o custom hooks;
- no dentro de if/loops arbitrarios.

Esto permite a React asociar las llamadas de manera consistente. La API especial use tiene reglas adicionales; no traslades sus posibilidades condicionales a useState/useEffect. Consulta [React actual](../docs/REACT_ACTUAL.md).

## 4. Cuándo extraer

Señales:

- lógica reactiva repetida;
- componente mezcla demasiada sincronización;
- existe una abstracción con nombre y contrato claros.

No extraigas solo para reducir líneas.

## 5. API de dominio

```jsx
const {
  data,
  status,
  retry
} = useProducts(query);
```

Puede ser más claro que crear inmediatamente un mega useFetch genérico con decenas de opciones.

## 6. Efectos internos

El hook debe cumplir las mismas reglas:

- dependencias;
- cleanup;
- cancelación;
- evitar estado derivado.

Extraer un efecto incorrecto no lo corrige.

## 7. Callbacks

Un hook puede retornar acciones.

No uses useCallback automáticamente; la estabilidad referencial solo importa en contextos concretos.

## 8. Pruebas

Prueba preferentemente el comportamiento observable del componente que usa el hook o el hook con herramientas apropiadas cuando merece aislamiento.

No pruebes cada setState interno.

## 9. Práctica guiada

Extrae la lógica de búsqueda remota con query, loading, error y cancelación.

Después compara una API específica useProductSearch frente a una abstracción useFetch.

## 10. Errores frecuentes

- hook = estado compartido;
- hook dentro de if;
- extraer una sola línea sin beneficio;
- mega hook genérico prematuro;
- useCallback por defecto;
- esconder un effect defectuoso.

## 11. Reto
Custom hook de dominio con API pequeña y cancelación correcta.

## 12. Autoevaluación

1. ¿Hook comparte estado automáticamente?
2. ¿Dónde llamar hooks?
3. ¿Cuándo extraer?
4. ¿Genérico siempre mejor?
5. ¿Effect interno sigue mismas reglas?
6. ¿useCallback obligatorio?

## 13. Checklist

- [ ] Lógica reutilizable.
- [ ] Reglas de hooks.
- [ ] API clara.
- [ ] Sin abstracción prematura.

Continúa con routing.

## Laboratorio desarrollado: Extraer una API pequeña

### Modelo, contrato y decisiones

useContador contiene lógica de estado y expone cantidad, sumar y reiniciar. Dos controles que llaman el hook obtienen estados independientes. El inicio se usa al inicializar y en reiniciar, pero cambiarlo como prop no implica por sí solo que useState reinicie. Para compartir un contador entre componentes debes mover su estado a un propietario común, usar un contexto o una fuente compartida diseñada para ello. Un hook no es automáticamente un singleton ni una caché global.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/17. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

A empieza en 0 y B en 10; sumar A no cambia B.

### Implementación completa del componente

```jsx
import { useState } from "react";
export function useContador(inicio = 0) {
  const [cantidad, setCantidad] = useState(inicio);
  return {
    cantidad,
    sumar: () => setCantidad((n) => n + 1),
    reiniciar: () => setCantidad(inicio),
  };
}
function Control({ nombre, inicio }) {
  const { cantidad, sumar, reiniciar } = useContador(inicio);
  return (
    <section>
      <h3>{nombre}</h3>
      <p>Cantidad: {cantidad}</p>
      <button type="button" onClick={sumar}>
        Sumar {nombre}
      </button>
      <button type="button" onClick={reiniciar}>
        Reiniciar {nombre}
      </button>
    </section>
  );
}
export default function App() {
  return (
    <section>
      <h2>Reutilizar lógica sin compartir estado</h2>
      <Control nombre="A" inicio={0} />
      <Control nombre="B" inicio={10} />
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Añade restar con mínimo 0 al hook y un tercer control desde 100. Define qué debe hacer reiniciar si cambia la prop inicio.

**Casos que debes registrar:** Tres instancias; 0; reiniciar; cambio de prop; estado independiente.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 16: Cancelación, cleanup y carreras de red](../unidad16-cancelacion/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 18: Routing y URL como estado](../unidad18-routing/README.md)
