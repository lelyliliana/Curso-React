# Glosario de React

[Índice](../README.md)

| Término | Significado en el curso |
|---|---|
| Componente | Unidad que describe una parte de UI a partir de sus entradas |
| JSX | Sintaxis que se transforma para describir elementos; no es HTML concatenado |
| Prop | Dato recibido del propietario que renderiza un componente |
| children | Contenido pasado entre etiquetas de un componente |
| Render | Cálculo de la descripción de UI; debe conservar pureza |
| Commit | Aplicación de actualizaciones de la UI por React |
| Estado | Dato que React conserva para una instancia entre renders |
| Snapshot | Valores correspondientes a un render y capturados por sus funciones |
| Actualizador | Función que calcula estado pendiente desde su valor anterior |
| Estado derivado | Resultado calculable desde otras fuentes actuales |
| Lifting state up | Mover estado al propietario común para coordinar hijos |
| Key | Identidad de un elemento entre hermanos a través de renders |
| Hook | API reactiva llamada bajo sus reglas correspondientes |
| Custom hook | Función use... que reutiliza lógica reactiva, sin compartir automáticamente estado |
| Effect | Sincronización con un sistema externo asociada a valores reactivos |
| Cleanup | Operación que retira recursos creados por un setup |
| Dependencia | Valor reactivo del que depende el efecto/cálculo correspondiente |
| StrictMode | Comprobaciones adicionales en desarrollo para revelar errores |
| Context | Distribución de un valor a consumidores bajo un proveedor |
| Reducer | Transición pura definida a partir de estado anterior y acción |
| Dispatch | Solicitud de una transición mediante una acción |
| Action de formulario | Operación usada por una API de acciones; no implica por sí sola servidor |
| Error Boundary | Componente que aísla ciertos errores de descendientes y presenta fallback |
| Suspense | Límite de espera para recursos y mecanismos compatibles |
| Ruta | Correspondencia entre dirección y vista navegable |
| Parámetro | Valor extraído de una ruta o de búsqueda según el router |
| HashRouter | Router cuya ruta interna pertenece al fragmento de la URL |
| Memoización | Reutilización de referencia o resultado bajo condiciones; optimización |
| Profiler | Instrumentación para analizar renders/commits en entornos apropiados |
| Feature | Conjunto de responsabilidades de una capacidad del producto |
| Build | Construcción de recursos preparados para publicación |
| Bundle | Código empaquetado que recibe y puede inspeccionar el cliente |
| Lockfile | Resolución fijada de dependencias para reproducir instalación |
| Mock | Sustitución controlada de un límite para probar un caso |
