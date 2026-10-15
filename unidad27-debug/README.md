# Unidad 27: React DevTools y depuración

**[Recorrido del código y resolución paso a paso](DESARROLLO.md)**

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Investigar renders, props, estado y efectos antes de añadir optimizaciones o modificar dependencias a ciegas.

## 1. Herramientas

Combina:

- React DevTools;
- Console;
- Network;
- Sources;
- Performance.

React DevTools no sustituye las herramientas del navegador.

## 2. Components

Inspecciona:

- árbol;
- props;
- hooks/estado;
- Context.

Pregunta:
> ¿qué entrada cambió para producir esta UI?

## 3. Profiler

Permite observar commits y componentes que renderizaron.

Un render visible en Profiler no es automáticamente un problema.

Primero identifica una interacción lenta.

## 4. Render inesperado

Posibles causas:

- padre renderiza;
- state local;
- Context cambia;
- key cambia;
- prop/referencia cambia.

No concluyas “React renderiza demasiado” sin identificar la causa.

## 5. Effect repetido

Antes de tocar array de dependencias:

1. observa qué dependencia cambia;
2. revisa si el efecto es necesario;
3. revisa si creas objeto/función cada render;
4. comprueba cleanup/StrictMode.

## 6. Estado reiniciado

Busca:

- key variable;
- componente definido dentro de otro;
- cambio de tipo/posición;
- render condicional que desmonta.

## 7. Network

Si un componente carga dos veces, revisa:

- StrictMode dev;
- dos montajes reales;
- dependencia cambiante;
- dos consumidores;
- router/data layer.

No elimines StrictMode como primera solución.

## 8. Why did this render?

Algunas herramientas muestran qué props/hooks cambiaron.

Úsalas como evidencia, no como orden de memoizar todo.

## 9. Práctica guiada

Provoca:

- key random;
- objeto prop nuevo;
- effect dependiente de objeto;
- componente anidado.

Diagnostica cada comportamiento.

## 10. Errores frecuentes

- render = bug;
- memoizar antes de perfilar;
- quitar dependencia;
- desactivar StrictMode;
- ignorar Network;
- confundir dev con producción.

## 11. Reto
Explica un re-render inesperado con evidencia y corrígelo solo si tiene impacto.

## 12. Autoevaluación

1. ¿Render = problema?
2. ¿Qué muestra Profiler?
3. ¿Qué puede reiniciar estado?
4. ¿Qué revisar en effect?
5. ¿StrictMode se desactiva primero?

## 13. Checklist

- [ ] Reproduzco.
- [ ] Inspecciono entradas.
- [ ] Uso Profiler/Network.
- [ ] Optimizo después.

Continúa con rendimiento.

## Laboratorio desarrollado: Diagnóstico por evidencia

### Modelo, contrato y decisiones

El campo conserva texto; una conversión explícita produce número cuando el contrato del ejemplo lo permite. Vacío no genera un cálculo aparente. React DevTools muestra árbol, props y estado; las herramientas del navegador muestran recursos, variables y red. Un re-render no prueba que se haya modificado todo el DOM ni que el resultado sea correcto. Localiza la primera operación donde tipo o valor diverge antes de añadir memoización o cambiar dependencias.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/27. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

12 produce resultado 15 y se identifica texto como string.

### Implementación completa del componente

```jsx
import { useState } from "react";
export default function App() {
  const [texto, setTexto] = useState("12");
  const numero = Number(texto);
  const resultado = texto.trim() !== "" && Number.isFinite(numero) ? numero + 3 : null;
  return (
    <section>
      <h2>Inspeccionar props, estado y conversión</h2>
      <label htmlFor="valor">Número ficticio</label>
      <input
        id="valor"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <pre>
        {JSON.stringify(
          {
            texto,
            tipo: typeof texto,
            numero: Number.isFinite(numero) ? numero : null,
            resultado,
          },
          null,
          2,
        )}
      </pre>
    </section>
  );
}
```

### Experimentar y comprobar

En una copia calcula texto+3 y analiza el breakpoint. Después introduce vacío, 12abc e Infinity, corrige y registra una regresión con resultado numérico.

**Casos que debes registrar:** 12; concatenación; vacío; sufijo; Infinity; tipo y valor.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 26: Errores y Error Boundaries](../unidad26-errores/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 28: Re-renderizados y rendimiento](../unidad28-rendimiento/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2027%20%E2%80%94%20DevTools%20y%20depuraci%C3%B3n%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad27-debug%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
