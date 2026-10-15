# Unidad 22: Persistencia local en React

**[Recorrido del código y resolución paso a paso](DESARROLLO.md)**

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Inicializar y sincronizar preferencias o borradores sin duplicar estado innecesariamente.

## 1. Qué persistir

Buenos candidatos:

- tema;
- preferencias;
- borrador local;
- selección no sensible.

No persistas por defecto secretos ni un espejo completo del estado remoto.

## 2. Inicialización lazy

```jsx
const [theme, setTheme] = useState(() => {
  try {
    const tema = localStorage.getItem("curso-react-tema-v1");
    return ["claro", "oscuro"].includes(tema) ? tema : "system";
  } catch {
    return "system";
  }
});
```

La lectura ocurre durante inicialización del estado en cliente.

En SSR, window/localStorage puede no existir y la estrategia debe cambiar.

## 3. Sincronización

```jsx
useEffect(() => {
  try {
    localStorage.setItem("curso-react-tema-v1", theme);
    setErrorGuardado("");
  } catch {
    setErrorGuardado("La preferencia sigue en memoria, pero no se pudo guardar.");
  }
}, [theme]);
```

El fragmento supone setErrorGuardado definido en el componente. Aquí el efecto sincroniza React con un sistema externo. Esta preferencia simple puede guardar su valor inicial; la colección de tareas del laboratorio adopta otra política: no sobrescribir durante carga y guardar solo tras una revisión válida.

## 4. JSON

Para objetos usa JSON.stringify/JSON.parse.

Maneja:

- ausencia;
- JSON corrupto;
- estructura antigua.

## 5. Versionado

Puedes guardar un campo version junto con las preferencias.

Una nueva versión de la app puede encontrar datos creados meses antes.

Define migración o fallback.

## 6. Fallos

Storage puede no estar disponible o fallar por políticas/cuota/contexto.

Una preferencia no debería derribar toda la aplicación.

## 7. Varias pestañas

El evento storage puede informar cambios en otros documentos del mismo origen.

Si la sincronización externa se vuelve compleja, centraliza el diseño en vez de añadir listeners dispersos.

## 8. Seguridad

Una vulnerabilidad XSS puede leer datos disponibles a JavaScript.

No uses localStorage para secretos por reflejo.

## 9. Práctica guiada

Tema persistente:

- inicialización;
- cambio;
- recarga;
- JSON inválido;
- versión anterior.

## 10. Errores frecuentes

- leer storage en cada render;
- secretos;
- parse sin fallback;
- persistir cache remoto entero;
- olvidar SSR;
- datos sin versión.

## 11. Reto
Preferencias versionadas con recuperación segura ante corrupción.

## 12. Autoevaluación

1. ¿Por qué lazy init?
2. ¿Storage es sistema externo?
3. ¿Qué pasa en SSR?
4. ¿JSON puede fallar?
5. ¿Por qué versionar?
6. ¿Storage para secretos?

## 13. Checklist

- [ ] Persisto solo requisito.
- [ ] Inicializo conscientemente.
- [ ] Sincronizo con efecto.
- [ ] Manejo fallos/versiones.

Continúa con accesibilidad.

## Laboratorio desarrollado: Persistencia y recuperación

### Modelo, contrato y decisiones

La inicialización lee y valida JSON versionado. Una carga corrupta se informa y empieza una sesión vacía en memoria sin escribir durante ese montaje. Solo una acción válida incrementa revision y habilita el efecto de guardado. Una acción nueva puede reemplazar el contenido corrupto; copia su clave antes de actuar si necesitas analizarlo. Si guardar falla, el estado de memoria se mantiene y aparece aviso. Los datos pertenecen a un navegador y origen, no a una cuenta sincronizada.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/22. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Las tareas válidas reaparecen al recargar el mismo origen.

### Implementación completa del componente

```jsx
import Tareas from "../../features/tareas/Tareas.jsx";
export default function App() {
  return (
    <section>
      <h2>Persistencia versionada y falible</h2>
      <Tareas />
    </section>
  );
}
```

### Experimentar y comprobar

Prueba JSON corrupto, escritura bloqueada y recarga. Antes de modificar datos corruptos, comprueba que la carga no cambió la clave.

**Casos que debes registrar:** Datos válidos; corruptos; lectura sin escritura; cuota; origen distinto.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 21: Diseñar el estado de una aplicación](../unidad21-estado-app/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 23: Accesibilidad en React](../unidad23-accesibilidad/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2022%20%E2%80%94%20Persistencia%20local%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad22-persistencia%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
