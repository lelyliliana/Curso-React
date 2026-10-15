# Solución razonada: Campo controlado y validación

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Espacios se rechazan; Ana se recibe normalizada; no se guarda en un servidor.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

Cada useId obtiene una relación distinta entre label e input. El callback solo se invoca después de validar; el padre puede guardar nombres ficticios en su propio estado. El valor recibido es Ana, sin espacios exteriores. No declares que el formulario guarda datos remotamente: el ejemplo solo ejecuta una función local. Consulta la prueba real de componentes para observar esas aserciones.

## Resolución concreta de la práctica

La [solución completa](ejemplo/Solucion.jsx) reutiliza dos FormularioNombre con callbacks setPrimero y setSegundo. Un carácter se rechaza antes del callback; " Ana " se normaliza a Ana. useId mantiene etiquetas independientes. El estado de cada padre cambia solo por el callback correspondiente. required y maxLength siguen activos; la demostración no sustituye esos atributos por una validación exclusivamente visual.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/10. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 09: Listas, keys e identidad](../unidad09-listas-keys/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 11: Estado derivado y lifting state up](../unidad11-estado-compartido/README.md)
