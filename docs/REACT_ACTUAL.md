# React actual y alcance del curso

[Índice](../README.md) · [Referencias](REFERENCIAS.md)

El curso utiliza React/React DOM 19.3.0, Vite 8.3.3 y React Router 8.4.0, fijados junto con las herramientas de pruebas en el manifiesto y lockfile. Son una base reproducible, no una instrucción para instalar siempre latest sin revisar cambios.

## Fundamentos que siguen siendo necesarios

Componentes, props, identidad, estado, pureza, efectos, formularios y accesibilidad siguen gobernando el comportamiento de una aplicación. Una versión nueva no convierte un efecto para copiar datos derivados en una buena decisión ni corrige una key aleatoria.

El proveedor de Context puede utilizar directamente el componente de contexto en React 19. La forma con .Provider aparece en ejemplos anteriores y sigue siendo reconocible. La unidad 19 muestra la forma actual en su laboratorio.

## Acciones de formulario

La [extensión de la unidad 10](../unidad10-formularios/ejemplo/AccionNombre.jsx) muestra useActionState y form action con una operación local simulada. Devuelve estado de resultado y pending; no implementa una Server Function ni un backend. El formulario principal conserva el modelo controlado onSubmit para comparar ambos diseños.

Una acción resuelta puede reiniciar campos no controlados del formulario. Un objeto con un mensaje de validación sigue siendo un resultado resuelto de la acción: decide explícitamente cómo conservar entrada cuando una aplicación lo necesite. useReducer y la función de una acción asíncrona tienen contratos distintos; un reducer puro no debe empezar a enviar peticiones porque otra API admite efectos.

## API use y efectos

use tiene reglas especiales y puede consumir recursos compatibles; no equivale a cualquier hook ni a llamar fetch durante cada render. En particular, sus posibilidades condicionales no permiten llamar useState o useEffect arbitrariamente dentro de condiciones.

useEffectEvent permite separar cierta lógica no reactiva asociada a efectos en versiones compatibles. No es una herramienta para esconder dependencias reales ni un reemplazo universal de handlers.

## Optimización y mecanismos adicionales

React Compiler puede aplicar optimizaciones en entornos configurados. Este proyecto no lo activa, para observar manualmente memo, useMemo y useCallback en la unidad 29. El resultado debe continuar correcto sin depender de una caché como almacenamiento del dominio.

Otras APIs modernas (como gestión optimista, actividades o transiciones visuales) merecen un contrato y pruebas propios. No se presentan como requisitos del proyecto introductorio. Este curso construye una SPA cliente con Vite: no implementa Server Components, renderizado del servidor ni autenticación.

[Volver a formularios](../unidad10-formularios/README.md) · [Volver a memoización](../unidad29-memoizacion/README.md)
