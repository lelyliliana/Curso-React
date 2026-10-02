# Unidad 08 — Renderizado condicional

## Qué aprenderás
Representar estados de interfaz con if, ternarios y operadores lógicos sin esconder diferencias semánticas.

# 1. Retorno temprano

```jsx
function Perfil({ usuario }) {
  if (!usuario) {
    return <p>Inicia sesión.</p>;
  }

  return <PerfilUsuario usuario={usuario} />;
}
```

Es claro cuando los estados producen interfaces sustancialmente distintas.

# 2. Ternario

```jsx
{activo
  ? <Badge>Activo</Badge>
  : <Badge>Inactivo</Badge>}
```

Útil para dos alternativas pequeñas.

Evita cadenas de ternarios anidados difíciles de leer.

# 3. &&

```jsx
{error && <ErrorMessage />}
```

Funciona cuando solo necesitas renderizar algo si la condición es truthy.

Pero recuerda JavaScript:

```jsx
{cantidad && <p>{cantidad}</p>}
```

si cantidad es 0, React puede renderizar `0`.

Usa una condición booleana explícita cuando corresponda.

# 4. null

Un componente puede retornar `null` para no renderizar contenido.

No significa que el componente no exista conceptualmente en el árbol React.

# 5. No renderizar vs ocultar con CSS

```jsx
{abierto && <Panel />}
```

desmonta/monta el Panel al cambiar.

```css
.hidden { display:none; }
```

mantiene el elemento en DOM aunque oculto.

Esto puede cambiar:
- estado interno;
- efectos;
- foco;
- accesibilidad;
- rendimiento.

No son equivalentes.

# 6. Estado y ramas

Si dos ramas ocupan la misma posición/tipo, React puede preservar estado.

Cambiar key/tipo puede reiniciarlo.

No dependas de intuición visual: piensa en identidad del árbol.

# 7. Permisos

Ocultar un botón por permiso mejora UI, pero **no autoriza** una operación sensible.

El backend debe verificar autorización.

# 8. Práctica guiada

Panel con:
- cargando;
- no autenticado;
- autenticado sin permiso;
- autorizado.

Define qué rama corresponde a cada estado.

# 9. Errores frecuentes
- ternarios encadenados;
- && con número 0;
- CSS oculto = desmontado;
- esconder botón = seguridad;
- ramas que reinician estado accidentalmente.

# 10. Reto
Panel de acceso con estados claros y sin condiciones ambiguas.

# 11. Autoevaluación
1. ¿Cuándo retorno temprano?
2. ¿Qué riesgo tiene && con 0?
3. ¿null renderiza DOM?
4. ¿display:none desmonta?
5. ¿Ocultar botón autoriza?
6. ¿Qué puede reiniciar estado?

# 12. Checklist
- [ ] Ramas claras.
- [ ] Condiciones booleanas.
- [ ] Comprendo montaje.
- [ ] Seguridad no depende de UI.

Continúa con listas.
