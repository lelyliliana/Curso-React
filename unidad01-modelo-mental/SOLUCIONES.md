# Solución razonada: Interfaz derivada del estado

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

El saludo empieza en Hola, Ana y cambia al escribir.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

La longitud pertenece al mismo snapshot que el saludo. Declara const longitud = nombre.length dentro del componente y muéstrala con JSX. No uses useEffect para copiarla a otro estado: esa copia introduce una fuente que puede quedar desactualizada. Un nombre vacío es un estado del formulario, no un error de React.

## Resolución concreta de la práctica

Dentro de App, después de saludo, escribe `const longitud = nombre.length;` y añade `<p>Longitud: {longitud}</p>` al section. Ana produce 3, Luis produce 4 y vacío produce 0. No agregues useEffect ni otro useState. El mensaje de saludo puede quedar en Hola, al vaciar; cambiarlo a un aviso sería una decisión adicional de producto. Recargar vuelve al estado inicial porque esta unidad no escribe Storage.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 00: Entorno y primer proyecto React](../unidad00-entorno/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 02: JSX](../unidad02-jsx/README.md)
