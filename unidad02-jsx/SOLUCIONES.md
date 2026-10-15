# Solución razonada: JSX, expresiones y texto

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Ana aparece como activa; el marcado se ve literalmente y no crea una imagen.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

0 es un valor renderizable; false, null y undefined no generan contenido visible en ese punto. La expresión cantidad && contenido devuelve 0 cuando cantidad vale 0. Escribe una condición booleana explícita si buscas ocultar un bloque. Para el marcado, verifica cero nodos img en Inspector; la ausencia de una alerta no basta como evidencia.

## Resolución concreta de la práctica

Dentro de App declara `const cantidad = 0;` y compara `{cantidad && <p>Hay elementos</p>}` con `{cantidad > 0 && <p>Hay elementos</p>}`. El primer caso puede dejar un 0 y el segundo no deja contenido. Con 1 ambos muestran el párrafo. Cambiar activo a false debe mostrar inactiva. La cadena con img sigue siendo texto; el número de elementos img del laboratorio debe ser cero.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 01: Modelo mental de React](../unidad01-modelo-mental/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 03: Componentes](../unidad03-componentes/README.md)
