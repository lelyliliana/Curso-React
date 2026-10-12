# Unidad 25: Pruebas de flujos asíncronos

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Probar secuencias loading→resultado/error→retry sin depender de Internet ni de tiempos arbitrarios.

## 1. Flujo

```text
render
→ loading
→ respuesta
→ success/empty/error
→ interacción posterior
```

Prueba la historia, no cada setState.

## 2. Async queries

Las herramientas ofrecen consultas que esperan a que aparezca/desaparezca contenido.

No uses `setTimeout(1000)` en tests como forma principal de sincronización.

Espera una condición observable.

## 3. Red

Usa:

- mock del cliente;
- service worker de pruebas;
- servidor controlado;
según alcance.

No llames una API pública real.

## 4. Success

Configura respuesta y verifica:

- loading;
- datos;
- loading desaparece.

## 5. Empty

Respuesta `[]` debe producir estado vacío, no error.

## 6. Error

Simula rechazo/HTTP clasificado y comprueba mensaje + retry.

No pruebes stack trace interno.

## 7. Retry

Primera llamada falla, segunda funciona.

Verifica que el usuario puede recuperarse.

## 8. Carrera/cancelación

Cuando es crítico, prueba que un resultado obsoleto no sobrescribe el nuevo.

Puede requerir controlar Promises manualmente.

## 9. Evita implementación

No afirmes:
> fetch fue llamado exactamente desde useEffect.

Afirma:
> al cambiar query se solicita el recurso correcto y se muestra el resultado vigente.

## 10. Práctica guiada

Crea pruebas para:

- loading→success;
- loading→empty;
- loading→error→retry→success.

## 11. Errores frecuentes

- wait con tiempo fijo;
- red real;
- test del hook interno en vez del flujo;
- no cubrir empty;
- retry no probado;
- mock que no se restaura.

## 12. Reto
Suite completa de buscador remoto con retry y respuesta obsoleta.

## 13. Autoevaluación

1. ¿Qué esperar en async?
2. ¿Internet real?
3. ¿Empty?
4. ¿Qué prueba retry?
5. ¿Implementación o flujo?
6. ¿Cómo probar carrera?

## 14. Checklist

- [ ] Async por condiciones.
- [ ] Red controlada.
- [ ] Success/empty/error.
- [ ] Retry.
- [ ] Carrera si aplica.

Continúa con errores.

## Laboratorio desarrollado: Esperar resultados asíncronos observables

### Modelo, contrato y decisiones

Una acción asíncrona produce estados sucesivos. La prueba debe esperar el resultado pertinente y también comprobar loading cuando sea parte del contrato. Un retraso fijo arbitrario puede hacer lenta una suite sin asegurar que el estado esperado ocurrió. Los clientes sustituidos controlan resolución, rechazo y orden; las pruebas de API usan el servidor real de laboratorio, sin Internet. Un cliente que ignora abort permite ensayar la defensa ante una respuesta tardía.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/25. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Cargar produce loading y después success, empty o error.

### Implementación completa del componente

```jsx
import Catalogo from "../../features/catalogo/Catalogo.jsx";
export default function App() {
  return (
    <section>
      <h2>Prueba de un flujo asíncrono</h2>
      <p>
        Antes de esperar éxito, observa loading y prueba una respuesta vacía o
        fallida.
      </p>
      <Catalogo />
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Añade un caso que resuelva dos cargas en orden inverso y comprueba lista final. Incluye una colección vacía y un HTTP fallido sin tratarlos como el mismo resultado.

**Casos que debes registrar:** Loading; éxito; vacío; rechazo; orden inverso; unmount.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 24: Pruebas de componentes](../unidad24-pruebas/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 26: Errores y Error Boundaries](../unidad26-errores/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2025%20%E2%80%94%20Pruebas%20de%20flujos%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad25-pruebas-flujos%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
