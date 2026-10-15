# Seguir una petición desde la dependencia hasta el estado

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [features/catalogo/cliente.js](../features/catalogo/cliente.js) desde la copia completa del curso. Ejecuta el laboratorio 14 en http://127.0.0.1:5173/#/laboratorio/14.

## 2. Sigue los datos y las decisiones

El componente de la unidad carga al montar y al cambiar escenario. Comienza por la dependencia del efecto, después sigue cargarCatalogo y finalmente vuelve a las ramas then/catch. No atribuyas todo fallo a fetch: el cliente comprueba HTTP, interpreta JSON y valida registros antes de aceptar la colección.

En cada setup se crea un AbortController y una bandera vigente. El cleanup marca esa ejecución como obsoleta y solicita cancelación. Si una promesa anterior termina después del cambio, su bandera impide que modifique el estado de la ejecución nueva. Esta es una protección de la vista; abortar no deshace una operación que un servidor ya completó.

Una respuesta aceptada con filas produce success; sin filas produce empty. Un fallo produce error con categoría y mensaje. El cliente usa 400 ms por defecto y el escenario lento tarda más: esperar no garantiza que termine en éxito. El límite temporal pertenece al contrato de la práctica.

## 3. Contrasta una modificación

Selecciona lento y cambia pronto a normal. Espera más que la demora lenta y confirma que no reemplazó el resultado normal. Después contrasta http500 y jsoninvalido. Network y el mensaje describen límites distintos: un HTTP exitoso todavía puede contener texto que no se pueda interpretar como JSON.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
