# Unidad 10 — Formularios en React

## Qué aprenderás
Diseñar formularios controlados/no controlados, validar sin duplicar innecesariamente HTML y mantener accesibilidad.

# 1. Controlado

```jsx
const [nombre, setNombre] = useState("");

<input
  value={nombre}
  onChange={e => setNombre(e.target.value)}
/>
```

React state gobierna el valor.

# 2. No controlado

Un input puede mantener su propio estado DOM y leerse al enviar mediante FormData/ref según necesidad.

React no exige que todo input sea controlado.

Elige según interacción/validación.

# 3. Submit

```jsx
function manejarSubmit(event) {
  event.preventDefault();
  // procesar
}
```

Escucha el `onSubmit` del form, no solo click del botón.

Así conservas Enter y semántica de formulario.

# 4. Labels

```jsx
<label htmlFor="email">Correo</label>
<input id="email" name="email" />
```

React no elimina requisitos de accesibilidad HTML.

# 5. Estado de errores

No guardes un booleano por cada posible error si puedes derivar mensajes desde valores/touched/submit según diseño.

Pero tampoco recalcules reglas costosas/remotas sin necesidad.

# 6. Validación nativa

Puedes usar:
- required;
- type;
- min/max;
- pattern.

React convive con Constraint Validation API.

No recrees en JS lo que HTML resuelve bien sin una razón.

# 7. Número

`event.target.value` suele ser string.

Un input type=number no convierte automáticamente tu estado React a Number.

Decide cómo representar vacío y conversión.

# 8. Checkbox

```jsx
<input
  type="checkbox"
  checked={acepta}
  onChange={e => setAcepta(e.target.checked)}
/>
```

Usa `checked`, no `value`, para el estado booleano.

# 9. Foco tras error

No muevas foco por cada validación mientras escribe.

Tras un submit fallido complejo, puede ser útil enfocar resumen/primer error según diseño.

# 10. Formularios grandes

Decenas de campos pueden requerir estrategias/librerías.

Primero comprende controlado/no controlado y estado; una librería no elimina esos conceptos.

# 11. Práctica guiada

Formulario con nombre, email, cantidad (0 válido) y checkbox.

Implementa versión controlada y compara con FormData al submit.

# 12. Errores frecuentes
- escuchar solo botón;
- input number = Number automático;
- checkbox con value;
- recrear validación HTML;
- mover foco constantemente;
- controlar todo por dogma.

# 13. Reto
Formulario accesible con 0 válido, validación y errores asociados.

# 14. Autoevaluación
1. ¿Controlado?
2. ¿React exige controlado?
3. ¿Por qué onSubmit?
4. ¿Number automático?
5. ¿Checkbox usa checked?
6. ¿HTML validation sigue sirviendo?

# 15. Checklist
- [ ] Form semántico.
- [ ] Estado apropiado.
- [ ] Validación accesible.
- [ ] Conversión explícita.

Continúa con estado compartido.
