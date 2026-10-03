# Unidad 24 — Pruebas de componentes

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Probar componentes desde el contrato visible para el usuario en lugar de detalles internos.

# 1. Pregunta

No:
> ¿el state interno vale X?

Sí:
> ¿la persona ve/puede hacer lo esperado?

# 2. Consultas

Con herramientas como Testing Library, prefiere consultas cercanas a accesibilidad:
- role;
- label;
- texto;
- placeholder cuando sea realmente el identificador disponible.

Esto incentiva una UI accesible.

# 3. Evento de usuario

Herramientas como user-event simulan interacciones de forma más realista que disparar eventos aislados manualmente en muchos casos.

Usa la API compatible con las versiones del proyecto.

# 4. Formulario

Prueba:
1. encontrar por label;
2. escribir;
3. enviar;
4. ver error/resultado.

No selecciones por `.form-input:nth-child(2)`.

# 5. Props

Para un componente presentacional, renderiza props relevantes y comprueba resultado.

No necesitas testear que React “pasa props”.

# 6. Estado

Provoca el cambio mediante la interacción pública.

Evita llamar setters internos desde el test.

# 7. Mock

Mockea límites externos:
- cliente API;
- tiempo cuando corresponda;
- browser API difícil de controlar.

No mockees todos los hijos solo para aislar el componente.

# 8. Accesibilidad

Un test que no encuentra un botón por rol/nombre puede revelar un problema real de markup.

No “arregles el test” cambiándolo a testid antes de revisar UI.

# 9. Snapshot

Puede servir en casos pequeños/estables, pero snapshots enormes aceptados automáticamente aportan poca confianza.

# 10. Práctica guiada

Prueba un formulario:
- submit vacío;
- mensaje;
- completar;
- submit válido;
- callback.

# 11. Errores frecuentes
- probar state interno;
- clases CSS como selector;
- testid para todo;
- fireEvent cuando user interaction aporta más;
- mockear cada hijo;
- snapshots gigantes.

# 12. Reto
Suite de formulario usando labels/roles y comportamiento observable.

# 13. Autoevaluación
1. ¿Qué contrato probar?
2. ¿Por qué role/label?
3. ¿Setter interno?
4. ¿Qué mockear?
5. ¿Testid primera opción?
6. ¿Snapshot grande?

# 14. Checklist
- [ ] Perspectiva del usuario.
- [ ] Queries accesibles.
- [ ] Interacciones reales.
- [ ] Mocks en límites.

Continúa con flujos.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 23 — Accesibilidad en React](../unidad23-accesibilidad/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 25 — Pruebas de flujos asíncronos](../unidad25-pruebas-flujos/README.md)
