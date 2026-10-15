# Solución razonada: Esperar resultados asíncronos observables

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Cargar produce loading y después success, empty o error.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

La prueba de respuestas obsoletas conserva el segundo resultado aunque el primero se resuelva después. waitFor espera una condición, no adivina un tiempo; act se utiliza para resolver manualmente trabajo que provoca actualizaciones de React. El cliente falso no reemplaza la necesidad de validar el contrato HTTP en pruebas separadas. Ambas capas aportan evidencia diferente.

## Resolución concreta de la práctica

La prueba existente usa un arreglo de resolutores. resolver[1] entrega Nuevo antes de resolver[0], que entrega Antiguo. La lista final debe permanecer Nuevo. Un resultado [] se resuelve correctamente y muestra No hay resultados; un error con categoria=http muestra HTTP 500. No hagas que el cliente falso atienda obligatoriamente abort en la prueba de carrera: su desobediencia deliberada permite comprobar la protección de la UI.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 24: Pruebas de componentes](../unidad24-pruebas/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 26: Errores y Error Boundaries](../unidad26-errores/README.md)
