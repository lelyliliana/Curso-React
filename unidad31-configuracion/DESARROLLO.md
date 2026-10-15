# Distinguir configuración pública y datos que llegan al navegador

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad31-configuracion/ejemplo/App.jsx](../unidad31-configuracion/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 31 en http://127.0.0.1:5173/#/laboratorio/31.

## 2. Sigue los datos y las decisiones

import.meta.env se transforma mediante Vite. VITE_NOMBRE_CURSO es configuración destinada al código cliente; no es una variable privada de un servidor que el navegador consulta al abrir cada página. El build incorpora sus valores para esa construcción.

El operador ?? utiliza Aprende React cuando el valor es null o undefined. Una cadena vacía definida no activa ese fallback. Antes de aceptar cualquier nombre como configuración de producto podrías validar también el texto vacío, pero eso sería una regla adicional.

Después de cambiar un archivo de entorno, reinicia dev para observar la configuración cargada. Para cambiar un build existente, vuelve a construir; editar una variable en tu terminal después de publicar los assets no reescribe el JavaScript que ya se distribuyó.

No pruebes privacidad introduciendo una credencial real. Un nombre ficticio basta para buscar el contenido resultante en dist y demostrar que puede verse. La variable de API o una bandera pública tampoco proporciona autorización de usuario.

## 3. Contrasta una modificación

Copia el ejemplo de entorno, define un nombre ficticio, reinicia dev y verifica el laboratorio. Construye y busca ese texto en los assets. Retira tu archivo local, reinicia y repite el caso ausente. No subas un archivo local con datos que no pertenecen al curso.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
