# Unidad 01 — Modelo mental de React

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Comprender render declarativo, árbol de componentes, pureza del render y diferencia entre calcular UI y modificar el DOM.

# 1. Idea central

```text
props + estado
      ↓
   render
      ↓
descripción de UI
      ↓
 React actualiza DOM
```

Tú describes qué interfaz corresponde al estado actual.

# 2. Declarativo

En código imperativo podrías buscar un botón, cambiar texto, ocultar un panel y añadir una clase manualmente.

En React describes el resultado:

```jsx
return activo
  ? <Panel />
  : <Mensaje />;
```

# 3. Componente como función

Modelo inicial:

```text
UI = f(props, estado)
```

Para las mismas entradas, el render debería ser predecible.

# 4. Render no es pintar inmediatamente

React ejecuta el componente para calcular qué debería mostrarse.

Después aplica los cambios necesarios al DOM durante la fase correspondiente.

Distinguir render y commit prepara el tema de efectos.

# 5. Render debe ser puro

Durante render no deberías iniciar fetch, escribir localStorage o cambiar document.title.

Esos son efectos externos.

React puede ejecutar render más veces de las que intuitivamente esperas, especialmente en desarrollo y modelos concurrentes.

# 6. No mutar entradas

```jsx
function Lista({ items }) {
  items.push(nuevo); // incorrecto
}
```

El render no debe modificar props ni estado existente.

# 7. Estado como snapshot

En un render concreto, una variable de estado representa un snapshot.

Llamar al setter no modifica esa variable ya capturada: solicita una actualización que puede producir otro render.

# 8. Reconciliación

Cuando la descripción cambia, React reconcilia el árbol y actualiza el DOM necesario.

No necesitas conocer todos los detalles internos para programar correctamente.

# 9. StrictMode

En desarrollo puede ejecutar procesos adicionales para detectar código impuro y problemas de efectos.

No desactives StrictMode solo para esconder un efecto duplicado sin investigar la causa.

# 10. DOM manual

Refs permiten foco, medición o integración con sistemas externos.

Pero modificar manualmente nodos administrados por React como patrón habitual puede desincronizar la interfaz.

# 11. Práctica guiada

Para un carrito identifica:
- props;
- estado;
- UI derivada;
- eventos;
- efectos externos.

Dibuja el árbol de componentes.

# 12. Errores frecuentes
- setter = asignación inmediata;
- fetch durante render;
- mutar props;
- DOM manual para mostrar/ocultar;
- StrictMode interpretado como bug.

# 13. Reto
Describe una interfaz como función de props/estado sin escribir efectos.

# 14. Autoevaluación
1. ¿Qué significa declarativo?
2. ¿Render y commit son lo mismo?
3. ¿Por qué render puro?
4. ¿Estado es snapshot?
5. ¿Setter cambia la variable actual?
6. ¿DOM manual está prohibido siempre?

# 15. Checklist
- [ ] Pienso declarativamente.
- [ ] Render puro.
- [ ] No muto entradas.
- [ ] Distingo render/commit.

Continúa con JSX.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 00 — Entorno y primer proyecto React](../unidad00-entorno/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 02 — JSX](../unidad02-jsx/README.md)
