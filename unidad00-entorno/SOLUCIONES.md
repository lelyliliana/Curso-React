# Solución razonada: Proyecto, entrada y transformación

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

La pantalla contiene React cargó correctamente.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Distingue servidor iniciado, transformación y render. La ruta equivocada falla al obtener o resolver un módulo; la etiqueta inválida impide transformar JSX. Solo después de corregir esos recursos tiene sentido investigar estado o eventos. No borres el lockfile para reparar un componente.

## Resolución concreta de la práctica

El cambio de texto debe aparecer en el laboratorio 00; el encabezado y la navegación comunes permanecen. Una etiqueta incompleta falla al transformar JSX. Un import con una ruta equivocada falla al resolver el módulo, aunque su JSX sea válido. Comprueba cada error por separado y restaura ambos. La solución de código completa sigue siendo [App.jsx](ejemplo/App.jsx); no necesitas sustituir la entrada, crear otra raíz ni anidar routers.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 01: Modelo mental de React](../unidad01-modelo-mental/README.md)
