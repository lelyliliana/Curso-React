# Leer una máquina de estados remotos completa

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [features/catalogo/Catalogo.jsx](../features/catalogo/Catalogo.jsx) desde la copia completa del curso. Ejecuta el laboratorio 15 en http://127.0.0.1:5173/#/laboratorio/15.

## 2. Sigue los datos y las decisiones

App de esta unidad es una envoltura; la lógica real está en Catalogo, useCatalogo y cliente. Catalogo conserva la opción elegida. Cambiarla no inicia por sí solo una carga: el botón llama iniciar con esa opción. Esta diferencia frente a la unidad 14 permite separar una preferencia de una acción.

useCatalogo empieza en idle. iniciar limpia datos y errores previos y pasa a loading. La resolución válida elige success o empty según longitud. El rechazo usa fase error y conserva una categoría, por ejemplo http, json, esquema, timeout o cancelada. Una categoría explica la causa; no es otra fase adicional.

Cancelar solicitud solo está habilitado durante loading. Cargar catálogo permanece disponible para iniciar una nueva solicitud que sustituye a la anterior. El pre muestra el estado para inspección educativa; en un producto podrías presentar menos detalle técnico. La lista marca aria-busy durante carga y los mensajes se anuncian como status.

## 3. Contrasta una modificación

Registra fase, categoría, cantidad de filas y botones habilitados en normal, vacío, HTTP 500, JSON inválido, esquema inválido y lento. Selecciona un escenario sin pulsar Cargar y comprueba que elegir no equivale a solicitar. Repite Cargar con el mismo escenario para distinguir reintento de cambio de condiciones.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
