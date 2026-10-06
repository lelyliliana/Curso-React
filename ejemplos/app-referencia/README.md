# Proyecto ejecutable: estudio con tareas y catálogo

[Índice del curso](../../README.md) · [Taller](../../unidad33-taller/README.md) · [Proyecto final](../../unidad34-proyecto-final/PRACTICA.md)

## Abrir paso a paso

1. Prepara la raíz del curso según [ENTORNO.md](../../docs/ENTORNO.md).
2. Instala versiones fijadas con npm ci.
3. Inicia npm run dev y conserva el proceso abierto.
4. Abre http://127.0.0.1:5173/#/proyecto para tareas.
5. Usa el enlace Catálogo o abre http://127.0.0.1:5173/#/proyecto/catalogo.

Esta carpeta contiene el coordinador de rutas, no un proyecto npm independiente. Importa features/tareas y features/catalogo y utiliza el router/entrada comunes. Para obtener una copia ejecutable, conserva la raíz del curso con esos módulos y su manifiesto; copiar solo App.jsx no proporciona todos los archivos. Para extraer otra aplicación, identifica primero esas dependencias y crea una entrada con un único router compatible.

## Capacidades

Agregar, editar, cancelar edición, completar/volver a pendiente, eliminar, filtrar por estado y buscar en títulos. Las acciones se hacen por id y la lista usa keys estables. La búsqueda ignora mayúsculas con locale es y conserva diferencias de tildes; no es una búsqueda fonética.

Los títulos se normalizan con trim y admiten de 1 a 80 unidades UTF-16. La colección admite hasta 200 tareas y títulos iguales con id distintos. Los id son únicos entre tareas activas y estables mientras existen; borrar el mayor puede permitir reutilizarlo. No constituyen identidad global ni historial de auditoría.

El catálogo tiene respuestas normales, vacías y fallidas, cancelación y un límite temporal. Los resultados viejos no reemplazan solicitudes nuevas. Consulta el [contrato HTTP](../../docs/API_LOCAL.md).

## Responsabilidades

| Archivo o carpeta | Responsabilidad |
|---|---|
| src/App.jsx de esta carpeta | Rutas de vistas y título/foco del proyecto |
| features/tareas/dominio.js | Validar y transformar tareas sin React ni DOM |
| features/tareas/reducer.js | Transiciones y revisión de cambios válidos |
| features/tareas/almacenamiento.js | Clave propia y JSON versionado |
| features/tareas/Tareas.jsx | Estado local de campos/filtros, efectos, eventos y UI |
| features/catalogo/cliente.js | HTTP, JSON, esquema, cancelación y tiempo |
| features/catalogo/useCatalogo.js | Estado remoto, identidad de solicitud y desmontaje |
| features/catalogo/Catalogo.jsx | Controles y resultados visibles |
| laboratorio/api.js | Respuestas controladas del proceso de Vite |
| src del curso | Router común, galería, estilos y entrada |

## Persistencia y fallos

La inicialización lee y valida antes de aceptar datos. Un contenido corrupto se informa y no se sobrescribe durante carga; la sesión comienza con una colección vacía. Solo una acción válida aumenta revision y habilita el guardado. Una acción nueva puede reemplazar la clave corrupta si Storage funciona: copia ese contenido antes de actuar si necesitas analizarlo.

Si guardar falla, el cambio continúa en memoria y aparece aviso. No hay respaldo remoto, cuenta ni sincronización entre dispositivos. Cambiar puerto/origen cambia los datos disponibles. Dos pestañas no se coordinan con storage events en esta versión. Usa datos ficticios y no lo utilices como único respaldo de tareas importantes.

## Acceso

El formulario utiliza etiqueta y controles nativos; useId evita relaciones duplicadas al reutilizarlo. Resultados se anuncian en status; errores en alert. Agregar/editar vuelve al campo; completar/eliminar proporciona también un destino válido cuando la fila deja de estar visible. La navegación conserva enlaces, título y foco del contenido.

Revisa teclado y lector de pantalla además de las comprobaciones automáticas. El texto con marcado se representa como texto tanto en tareas como en catálogo; esa protección no sustituye validar destinos URL o permisos en una aplicación que los necesite.

## Comprobar y publicar

Ejecuta npm run check, npm test y npm run build por separado. Las [pruebas](../../docs/VERIFICACION.md) cubren reglas, componentes y Firefox. Construir produce dist con galería y proyecto; no produce un backend de tareas.

El base relativo y HashRouter permiten rutas internas en una subcarpeta de hosting estático. La API local existe en dev y preview por el plugin; no existe por subir únicamente dist. Las tareas locales funcionan en hosting, pero el catálogo requiere un endpoint disponible o una demostración alternativa declarada. No incluyas secretos en VITE_.

[Revisar aceptación del proyecto](../../unidad34-proyecto-final/PRACTICA.md)
