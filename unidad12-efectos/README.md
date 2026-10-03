# Unidad 12 — Render, eventos y efectos

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Decidir si una operación pertenece al render, a un handler o a un efecto de sincronización.

# 1. Tres lugares

**Render:** calcular UI desde props/estado.  
**Evento:** responder a una interacción concreta.  
**Efecto:** sincronizar con un sistema externo porque el componente está renderizado con cierto estado.

# 2. Render

```jsx
const nombreCompleto =
  `${nombre} ${apellido}`;

const visibles = items.filter(...);
```

No necesitas useEffect para cálculos derivados.

# 3. Evento

Usuario pulsa comprar:

```jsx
function comprar() {
  enviarPedido();
}
```

La causa es la interacción.

No necesitas guardar `debeComprar=true` y un efecto que observe ese estado para enviar.

# 4. Efecto

Ejemplos:
- suscribirse a WebSocket;
- sincronizar document.title;
- conectar un widget externo;
- timer que existe mientras el componente está montado;
- petición ligada a una consulta/URL que representa el estado actual.

# 5. No todo externo necesita effect

Guardar al pulsar “Guardar” es un evento.

Un efecto se usa cuando la causa es que **la UI está presente/configurada con ciertos valores**, no una acción puntual que ya conoces.

# 6. Efectos como escape hatch

React puede calcular mucho declarativamente.

Los efectos conectan React con sistemas que React no controla.

Menos efectos suele significar menos sincronización y menos estados imposibles.

# 7. Ciclo conceptual

```text
render
→ commit
→ effect
→ posible cleanup
→ nuevo effect cuando cambian dependencias
```

Los detalles de scheduling pueden variar; no bases lógica en tiempos accidentales.

# 8. StrictMode

En desarrollo puede ejecutar setup/cleanup adicional para comprobar que el efecto es reversible.

Si eso rompe tu código, probablemente el efecto no limpia/sincroniza correctamente.

# 9. Práctica guiada

Clasifica:
- filtrar lista;
- calcular total;
- enviar formulario;
- cambiar title por página;
- suscripción;
- guardar por click;
- timer;
- focus tras abrir dialog.

Justifica render/event/effect.

# 10. Errores frecuentes
- effect para derivar;
- effect para cada click;
- effect como “código después del render”;
- ignorar cleanup;
- desactivar StrictMode para esconder problemas.

# 11. Reto
Refactoriza un componente con tres efectos innecesarios y deja solo sincronizaciones externas reales.

# 12. Autoevaluación
1. ¿Filtro necesita effect?
2. ¿Compra por click?
3. ¿Qué es sistema externo?
4. ¿Cuándo ocurre effect conceptualmente?
5. ¿StrictMode por qué ayuda?

# 13. Checklist
- [ ] Render para derivar.
- [ ] Evento para interacción.
- [ ] Effect para sincronización.
- [ ] Cleanup reversible.

Continúa con useEffect.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 11 — Estado derivado y lifting state up](../unidad11-estado-compartido/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 13 — useEffect, dependencias y cleanup](../unidad13-useeffect/README.md)
