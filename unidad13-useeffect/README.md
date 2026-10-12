# Unidad 13: useEffect, dependencias y cleanup

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Escribir efectos que se sincronizan correctamente con valores reactivos y limpiar recursos obsoletos.

## 1. Forma

```jsx
useEffect(() => {
  // setup

  return () => {
    // cleanup
  };
}, [dependencias]);
```

## 2. Dependencias no son una elección estética

Si el efecto lee un valor reactivo de props/estado/componente, ese valor suele pertenecer a dependencias.

No elimines una dependencia solo para “hacer que se ejecute una vez”.

Reestructura el código si la semántica deseada es distinta.

## 3. Sin array

El efecto se ejecuta después de cada commit relevante del componente.

No significa “bucle infinito” por sí solo.

Se vuelve bucle si el efecto actualiza estado que provoca otra ejecución de forma repetitiva.

## 4. Array vacío

```jsx
useEffect(() => {
  conectar();
  return desconectar;
}, []);
```

expresa que el setup no depende de valores reactivos cambiantes.

En desarrollo StrictMode puede hacer setup→cleanup→setup adicional.

## 5. Cleanup

Debe deshacer el setup:

- unsubscribe;
- clearInterval;
- abort;
- removeEventListener;
- cerrar conexión.

No es solo “código al desmontar”: también ocurre antes de reejecutar un efecto cuando cambian dependencias.

## 6. Stale closure

El siguiente fragmento es deliberadamente defectuoso en sus dependencias: limpia el intervalo, pero captura un contador que después puede quedar obsoleto.

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log(contador);
  }, 1000);
  return () => clearInterval(id);
}, []);
```

captura el contador del render asociado al efecto.

No “arregles” añadiendo valores al azar. Decide si el timer debe reiniciarse, usar updater/ref u otro diseño.

## 7. Funciones/objetos como dependencias

Una función/objeto creado en cada render tiene identidad nueva.

Antes de envolver todo en useCallback/useMemo, pregunta si:

- puede crearse dentro del efecto;
- el efecto puede depender de valores primitivos;
- realmente necesitas el efecto.

## 8. Linter de hooks

Las reglas de hooks ayudan a detectar dependencias/reactividad.

No las desactives por costumbre.

## 9. Práctica guiada

Implementa:

- document.title;
- timer;
- suscripción simulada.

Cambia dependencias y observa setup/cleanup.

## 10. Errores frecuentes

- dependencia omitida;
- [] para forzar “una vez”;
- cleanup solo mentalmente al unmount;
- stale closures;
- memoización para callar linter;
- effect para derivar estado.

## 11. Reto
Suscripción que cambia de canal sin dejar conexiones antiguas.

## 12. Autoevaluación

1. ¿Dependencias describen qué?
2. ¿Cleanup cuándo ocurre?
3. ¿[] significa exactamente una ejecución en dev?
4. ¿Qué es stale closure?
5. ¿Cómo resolver función dependency?
6. ¿Desactivar linter?

## 13. Checklist

- [ ] Dependencias correctas.
- [ ] Cleanup simétrico.
- [ ] Sin stale data.
- [ ] Efectos mínimos.

Continúa con datos remotos.

## Laboratorio desarrollado: Un recurso mientras existe un componente

### Modelo, contrato y decisiones

Reloj crea un intervalo en el efecto y lo elimina en cleanup. El callback utiliza una función actualizadora para no capturar una cantidad obsoleta. Ocultar Reloj lo desmonta; volver a mostrarlo crea otra instancia desde 0. StrictMode permanece habilitado en la raíz: sus comprobaciones adicionales no deben dejar intervalos duplicados. Un timer no es un reloj exacto ni una garantía de que transcurrió exactamente un segundo por actualización visible.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/13. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Ocultar desmonta el reloj; mostrar crea uno con Ticks: 0.

### Implementación completa del componente

```jsx
import { useEffect, useState } from "react";
function Reloj() {
  const [ticks, setTicks] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTicks((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return <p role="status">Ticks: {ticks}</p>;
}
export default function App() {
  const [visible, setVisible] = useState(true);
  return (
    <section>
      <h2>Montar, limpiar y volver a montar</h2>
      <button type="button" onClick={() => setVisible((v) => !v)}>
        {visible ? "Ocultar reloj" : "Mostrar reloj"}
      </button>
      {visible ? <Reloj /> : <p>Reloj desmontado; no conserva su contador.</p>}
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Oculta y muestra tres veces. Añade una duración de intervalo como prop y dependencia; al cambiarla, verifica que se limpia el intervalo anterior.

**Casos que debes registrar:** Montaje; tres desmontajes; cambio de intervalo; no duplicar recursos.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 12: Render, eventos y efectos](../unidad12-efectos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 14: Datos remotos en React](../unidad14-datos-remotos/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2013%20%E2%80%94%20useEffect%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad13-useeffect%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
