# Solución razonada: Accesibilidad como comportamiento

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Agregar anuncia cantidad; Limpiar deja 0 y enfoca Agregar.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Captura recursos.length en el handler antes de setRecursos([]) para construir el mensaje. El nuevo estado se ve en otro render; leer recursos inmediatamente después del setter todavía lee el snapshot anterior. Un texto de resultado en role=status suele ser suficiente para el anuncio. Las pruebas automáticas de roles y foco no certifican accesibilidad completa: escucha y recorre la interacción real.

## Resolución concreta de la práctica

La [solución ejecutable](ejemplo/Solucion.jsx) conserva mensaje y recursos. limpiar escribe Se eliminaron 3 recursos cuando hay tres, vacía la colección y enfoca agregar.current. La segunda limpieza informa cero. Usa Tab y Enter y comprueba el elemento activo; una captura visual del botón resaltado no sustituye el recorrido con lector de pantalla.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/23. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 22: Persistencia local en React](../unidad22-persistencia/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 24: Pruebas de componentes](../unidad24-pruebas/README.md)
