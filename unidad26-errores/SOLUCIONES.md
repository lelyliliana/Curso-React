# Solución razonada: Errores de render y de acciones

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

El widget falla y se recupera; el contenido externo permanece.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

getDerivedStateFromError marca el estado del boundary. El evento utiliza try/catch y un mensaje local. Si Widget siempre lanza, el reintento vuelve a producir fallback; reiniciar identidad no arregla una regla incorrecta ni un módulo ausente. Console puede mostrar el error deliberado de desarrollo: distínguelo de una excepción inesperada. No muestres la pila al usuario final.

## Resolución concreta de la práctica

El fallo de render se captura en LimiteError. El fallo de evento se captura en el propio onClick y actualiza errorEvento. Reintentar funciona en la referencia porque cambia la condición y la identidad del límite. Si la causa persiste, vuelve el fallback. En desarrollo puede aparecer un diagnóstico del fallo deliberado en Console; clasifícalo sin confundirlo con una excepción inesperada en las demás unidades.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 25: Pruebas de flujos asíncronos](../unidad25-pruebas-flujos/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 27: React DevTools y depuración](../unidad27-debug/README.md)
