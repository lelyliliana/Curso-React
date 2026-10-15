# Invalidar resultados y distinguir cancelar de agotar tiempo

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [features/catalogo/useCatalogo.js](../features/catalogo/useCatalogo.js) desde la copia completa del curso. Ejecuta el laboratorio 16 en http://127.0.0.1:5173/#/laboratorio/16.

## 2. Sigue los datos y las decisiones

El hook conserva tres referencias: controller para pedir cancelación, solicitud para la identidad vigente y activo para el montaje. Al iniciar otra carga aborta la anterior, crea un controller y asigna un id incrementado. Tanto la rama de éxito como la de fallo comprueban que el montaje esté activo y que ese id siga vigente.

Supón que A recibe id 1 y B recibe id 2. Si B termina primero se acepta. Si A termina después, 1 ya no coincide con solicitud.current y su resultado se ignora. La comprobación cubre incluso un cliente de prueba que no atienda abort. Solo inspeccionar Network no demuestra esa protección.

Cancelar manualmente la solicitud vigente no incrementa el id: el cliente informa categoría cancelada. Sustituirla por otra sí cambia identidad y evita mostrar el fallo de la anterior. Al desmontar, el cleanup marca inactivo, incrementa solicitud y aborta. El cliente también dispone de su propio timeout; ambos motivos producen mensajes diferentes.

## 3. Contrasta una modificación

Inicia lento y cancela inmediatamente. Después inicia lento sin cancelar y espera: debe producir timeout. Finalmente inicia lento y luego normal; espera a que la antigua pudiera terminar. El resultado normal debe permanecer. La prueba con promesas controladas permite invertir el orden sin depender de tiempos de red reales.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
