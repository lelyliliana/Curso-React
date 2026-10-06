# Unidad 33: Taller integrador React

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Propósito

Resolver interfaces sin que el enunciado indique qué hook utilizar.

Debes decidir si algo es prop, state, URL, dato remoto, evento, efecto o valor derivado.

## Método

Para cada reto:

1. dibuja árbol;
2. clasifica estado;
3. define propietario;
4. implementa render puro;
5. añade eventos;
6. añade efectos solo si sincronizas;
7. prueba accesibilidad;
8. prueba comportamiento;
9. perfila solo si existe lentitud.

## Reto 1: Lista filtrable

- datos;
- filtro;
- resultados derivados;
- keys estables.

No guardes la lista filtrada como segundo estado.

## Reto 2: Formulario

- labels;
- controlado/no controlado justificado;
- validación;
- error;
- submit.

## Reto 3: Catálogo remoto

- loading;
- success;
- empty;
- error;
- retry.

Cliente API separado.

## Reto 4: Buscador cancelable

- query;
- debounce si aporta;
- AbortController;
- sin respuestas obsoletas.

## Reto 5: Routing

- listado;
- detalle;
- query params;
- 404;
- acceso directo a URL.

## Reto 6: Context

Comparte tema/idioma.

Explica por qué Context es mejor aquí que prop drilling o composición.

## Reto 7: Reducer

Carrito con acciones de dominio.

Prueba reducer como función pura.

## Reto 8: Persistencia

Preferencia versionada y recuperación ante datos corruptos.

## Reto 9: Accesibilidad

Dialog o flujo equivalente:

- teclado;
- foco;
- nombres;
- retorno.

## Reto 10: Pruebas

Cubre:

- interacción;
- async;
- empty/error/retry.

## Reto 11: Rendimiento

Solo si puedes reproducir lentitud:

- perfil;
- hipótesis;
- cambio;
- comparación.

## Reto 12: Arquitectura

Organiza dos features y shared sin ciclos.

## Evidencia

Entrega:

- árbol;
- mapa de estado;
- decisiones de efectos;
- pruebas;
- auditoría de accesibilidad;
- perfil cuando aplique.

## Autoevaluación

1. ¿Puedo evitar effect innecesario?
2. ¿Sé dónde vive estado?
3. ¿Comprendo keys?
4. ¿Puedo cancelar red?
5. ¿Context cuándo?
6. ¿Reducer cuándo?
7. ¿Pruebo como usuario?
8. ¿Memoizo solo con evidencia?

## Checklist

- [ ] Render puro.
- [ ] Estado mínimo.
- [ ] Efectos reales.
- [ ] Accesibilidad.
- [ ] Pruebas.
- [ ] Arquitectura.
- [ ] Rendimiento con evidencia.

Continúa con proyecto final.

## Taller desarrollado: de reglas a una aplicación

### Etapa 1. Contrato de tareas

Usa registros con id entero positivo, titulo normalizado de 1 a 80 unidades UTF-16 y completada booleano. Admite hasta 200 tareas. Los títulos iguales son válidos porque id identifica cada tarea. Las operaciones retornan colecciones nuevas con registros independientes; no deben alterar entradas congeladas.

Los id se asignan por el máximo actual más uno y permanecen estables mientras la tarea existe. No son identificadores globales ni un historial: eliminar el id más alto permite reutilizarlo posteriormente. No implementes referencias externas a tareas eliminadas sin cambiar esa estrategia.

Implementa crear, editar, alternar y eliminar por id. Comprueba entradas inválidas y tareas inexistentes antes de conectar el DOM. El [dominio de referencia](../features/tareas/dominio.js) permite contrastar esos casos con pruebas de Node.

### Etapa 2. Estado y transiciones

Distingue colección, revisión de cambios válidos, mensajes, campo de título, modo de edición y filtros. La lista visible es derivada. Un reducer puro calcula transiciones y expresa un error sin borrar la colección anterior. La revisión no debe aumentar cuando la regla rechaza una acción.

No genere ids con Math.random dentro del reducer ni escribas localStorage desde una función actualizadora. Un cálculo repetido con la misma entrada debe obtener el mismo resultado. Las escrituras pertenecen a un límite de efectos o a una acción explícita que tenga su propio contrato.

### Etapa 3. Interfaz y acceso

Construye un formulario con label, campo, submit y mensaje relacionado. Cuando comienza edición, rellena el campo y cambia la acción a Guardar cambios. Cancelar descarta solo el borrador, no la tarea. Completar o eliminar desde una vista filtrada utiliza id, aunque cambie la posición visible.

Usa nombres que diferencien controles por tarea y devuelve foco a un destino existente cuando una fila deje de estar visible. Anuncia resultados relevantes sin mover foco a cada región de texto. Practica con teclado, ancho 320 px y texto duplicado antes de agregar estilos decorativos.

### Etapa 4. Almacenamiento falible

Lee una clave propia con JSON versionado y valida todos los registros. No aceptes parcialmente una colección corrupta. Una carga inválida informa problema y no sobrescribe durante montaje. Una nueva acción puede guardar otra colección; eso se documenta, no se presenta como recuperación de datos corruptos.

Simula setItem que lanza excepción y conserva la sesión de memoria. No uses localStorage.clear para un ejercicio de una clave. Explica navegador/origen, ausencia de respaldo y comportamiento entre pestañas: la referencia no implementa coordinación mediante storage events.

### Etapa 5. Catálogo y rutas

Integra el cliente de red como feature independiente, con estados idle/loading/success/empty/error. Separa HTTP, JSON, esquema, timeout y cancelación. Inicia dos solicitudes en orden rápido y comprueba que la respuesta vieja no gobierne la vista, incluso si el transporte ignora la señal.

Navega entre tareas y catálogo con enlaces semánticos. Usa las rutas hash del proyecto común y recarga cada una directamente. En hosting estático el catálogo no hereda automáticamente la API local; documenta qué recursos están disponibles en el entorno real.

### Etapa 6. Evidencia

Ejecuta [pruebas y build](../docs/VERIFICACION.md), agrega un caso significativo a tu extensión y describe un diagnóstico reproducido. La arquitectura se explica con dependencias, no con una cantidad de carpetas. El rendimiento se mide solo si existe un flujo lento demostrable.

Completa [PRACTICA.md](PRACTICA.md) y compara con [SOLUCIONES.md](SOLUCIONES.md). La referencia completa es el [proyecto](../ejemplos/app-referencia/README.md).

---

## Continuar el curso

- **Unidad anterior:** [Unidad 32: Build y publicación de una SPA](../unidad32-build/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 34: Proyecto final](../unidad34-proyecto-final/README.md)
