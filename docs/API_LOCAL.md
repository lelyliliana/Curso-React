# API local del laboratorio

[Índice](../README.md) · [Entorno](ENTORNO.md) · [Datos remotos](../unidad14-datos-remotos/README.md)

El [plugin de Vite](../laboratorio/api.js) responde GET /api/catalogo en dev y preview. Es una simulación local, sin usuarios, autenticación ni base de datos. No es un servicio de producción.

| escenario | HTTP | Cuerpo o comportamiento | Resultado del cliente |
|---|---|---|---|
| normal | 200 | Dos recursos | success |
| vacio | 200 | [] | empty |
| http404 | 404 | Error de laboratorio | Categoría http |
| http500 | 500 | Error de laboratorio | Categoría http |
| jsoninvalido | 200 | JSON incompleto | Categoría json |
| esquemainvalido | 200 | Objeto sin colección | Categoría esquema |
| lento | 200 si llega a completarse | Demora de 800 ms | timeout a los 400 ms del cliente, o cancelada antes |
| marcado | 200 | Título con texto de una etiqueta img | Texto literal, sin elemento img |
| Valor desconocido | 400 | Error de escenario | Categoría http |

El cliente exige una colección de hasta 100 recursos con id entero positivo único y titulo de 1 a 100 unidades UTF-16. Proyecta esos campos y descarta adicionales. Un array vacío cumple el contrato. HTTP exitoso, JSON analizable y estructura válida son comprobaciones distintas.

La URL se construye con URLSearchParams. El cliente expone una función sin conocer DOM ni componentes; el hook coordina estado y solicitud vigente. El timer del cliente abarca fetch y lectura JSON. El finally limpia timer y listener externo.

El catálogo se carga al pulsar un botón; la unidad 14 presenta además una carga ligada a una dependencia mediante un efecto. Ambos diseños pueden ser correctos según la causa de la operación.

Al publicar únicamente dist en hosting estático no se ejecuta el plugin. Un 404 o un HTML 200 de fallback no se debe presentar como catálogo válido. Para una publicación remota real necesitarías un endpoint disponible y su contrato/CORS, o una demostración estática claramente descrita como tal.

[Revisar cliente](../features/catalogo/cliente.js) · [Revisar hook](../features/catalogo/useCatalogo.js)
