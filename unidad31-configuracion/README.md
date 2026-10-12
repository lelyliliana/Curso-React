# Unidad 31: Configuración y variables de entorno

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Separar configuración pública del código y comprender que todo valor incorporado al frontend puede ser visible.

## 1. Regla

Si el navegador necesita un valor, debes asumir que el usuario puede obtenerlo.

Una variable de entorno de build no convierte un secreto en secreto.

## 2. Vite

Vite expone al cliente variables según su convención/configuración, comúnmente con prefijo VITE_.

```js
const apiUrl =
  import.meta.env.VITE_API_URL;
```

Comprueba la documentación de la versión usada.

## 3. Valores apropiados

- URL pública de API;
- nombre de entorno;
- flags no sensibles;
- identificadores diseñados como públicos.

## 4. Nunca

- password;
- API key privada;
- secret OAuth;
- token de servicio;
- clave de firma.

Aunque el archivo .env no esté en Git, el valor incorporado al bundle puede quedar visible.

## 5. Archivo example

Puedes versionar `.env.example` con nombres y valores ficticios.

## 6. Build-time

En una SPA estática, estas variables suelen incorporarse durante build.

Cambiar la variable del servidor después puede no modificar un bundle ya construido.

Runtime config requiere otra estrategia.

## 7. Entornos

Desarrollo puede usar API local y producción una API pública sin modificar el código fuente.

## 8. Validación

Si falta una configuración crítica, produce un error claro en vez de construir URLs con undefined.

## 9. Feature flags

Un flag frontend controla experiencia, no autorización.

El backend sigue protegiendo operaciones sensibles.

## 10. Práctica guiada

Crea builds con dos API_URL. Busca el valor en la salida generada para comprobar que es observable.

## 11. Errores frecuentes

- secreto en VITE_;
- creer que .env protege bundle;
- cambiar env tras build esperando efecto;
- flag como autorización;
- URL repetida en muchos módulos.

## 12. Reto
Configuración validada sin secretos y con archivo example.

## 13. Autoevaluación

1. ¿Frontend guarda secretos?
2. ¿Qué hace VITE_?
3. ¿.env protege el bundle?
4. ¿Qué es build-time?
5. ¿Flag autoriza?
6. ¿Qué versionar?

## 14. Checklist

- [ ] Solo configuración pública.
- [ ] Fuente central.
- [ ] Validación.
- [ ] Sin secretos.

Continúa con build.

## Laboratorio desarrollado: Configuración pública y build

### Modelo, contrato y decisiones

VITE_NOMBRE_CURSO se lee como configuración pública y tiene un fallback. Vite incorpora variables expuestas al código del cliente; .env ignorado por Git no vuelve secreto el valor del bundle. Cambiar .env requiere reiniciar la herramienta según su flujo y volver a construir la salida que se publicará. Un nombre de curso es adecuado; una clave privada, contraseña o secreto de firma no lo es. Los valores de import.meta.env son APIs de la herramienta, no de cualquier archivo Node.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/31. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

Aparece nombre público y modo del entorno, sin una promesa de privacidad.

### Implementación completa del componente

```jsx
export default function App() {
  const nombre = import.meta.env.VITE_NOMBRE_CURSO ?? "Aprende React";
  return (
    <section>
      <h2>Configuración pública del cliente</h2>
      <p>Nombre: {nombre}</p>
      <p>Modo: {import.meta.env.MODE}</p>
      <p>Este valor se incorpora al código del cliente; no es un secreto.</p>
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Copia .env.example como .env y cambia el nombre ficticio. Reinicia dev, construye y busca ese texto en dist. Luego retira el archivo local para comprobar fallback.

**Casos que debes registrar:** Example; fallback; reinicio; build; valor visible; sin secretos.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 30: Arquitectura por features](../unidad30-arquitectura/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 32: Build y publicación de una SPA](../unidad32-build/README.md)

---

### ¿Necesitas apoyo con este tema?

Si te bloqueaste con la práctica, necesitas revisar tu entorno o adaptar lo aprendido a tu proyecto, podemos trabajarlo en una sesión personalizada.

[**Solicitar asesoría para este tema por WhatsApp**](https://wa.me/573103618296?text=Hola%2C%20Leli.%20Estoy%20estudiando%20Unidad%2031%20%E2%80%94%20Configuraci%C3%B3n%20y%20variables%20de%20entorno%20del%20curso%20React%20%28https%3A%2F%2Fgithub.com%2Flelyliliana%2FCurso-React%2Ftree%2Fmain%2Funidad31-configuracion%29%20y%20necesito%20una%20asesor%C3%ADa%20personalizada.%20Mi%20duda%20es%E2%80%A6)
