# Diseñar una comparación de rendimiento que se pueda repetir

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad28-rendimiento/ejemplo/App.jsx](../unidad28-rendimiento/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 28 en http://127.0.0.1:5173/#/laboratorio/28.

## 2. Sigue los datos y las decisiones

Profiler engloba Lista y llama medir cuando se registra un commit perfilado. El callback recibe id, fase y duración del trabajo de render de ese árbol. Esa medida no equivale al tiempo total de interacción, red, layout y pintura.

Actualizar padre cambia cantidad y puede volver a ejecutar la lista. Si los cien recursos siguen iguales, que exista trabajo de render no significa que React reescriba cien nodos del DOM. Distinguir render y commit evita justificar optimizaciones solo por logs repetidos.

Para comparar, conserva navegador, equipo, tamaño de datos y acción. Descarta o identifica el primer montaje por separado de las actualizaciones. Registra diez muestras por variante y compara una medida resumida como mediana, junto con los valores, en vez de seleccionar solo el mejor número.

El modo de desarrollo y StrictMode introducen comprobaciones adicionales. Una lista pequeña puede no producir una diferencia útil. No inventes milisegundos esperados para cualquier equipo ni conviertas una reducción local en una garantía universal.

## 3. Contrasta una modificación

Registra diez actualizaciones de la lista fija. En una copia aumenta su tamaño y repite la misma interacción. Conserva funcionalidad y contenido de controles. Describe si el costo está en crear elementos, filtrar o realizar otro cálculo antes de decidir qué optimización estudiar.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
