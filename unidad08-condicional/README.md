# Unidad 08: Renderizado condicional

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Representar estados de interfaz con if, ternarios y operadores lógicos sin esconder diferencias semánticas.

## 1. Retorno temprano

```jsx
function Perfil({ usuario }) {
  if (!usuario) {
    return <p>Inicia sesión.</p>;
  }

  return <PerfilUsuario usuario={usuario} />;
}
```

Es claro cuando los estados producen interfaces sustancialmente distintas.

## 2. Ternario

```jsx
{activo
  ? <Badge>Activo</Badge>
  : <Badge>Inactivo</Badge>}
```

Útil para dos alternativas pequeñas.

Evita cadenas de ternarios anidados difíciles de leer.

## 3. &&

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

## 4. null

Un componente puede retornar `null` para no renderizar contenido.

No significa que el componente no exista conceptualmente en el árbol React.

## 5. No renderizar vs ocultar con CSS

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

## 6. Estado y ramas

Si dos ramas ocupan la misma posición/tipo, React puede preservar estado.

Cambiar key/tipo puede reiniciarlo.

No dependas de intuición visual: piensa en identidad del árbol.

## 7. Permisos

Ocultar un botón por permiso mejora UI, pero **no autoriza** una operación sensible.

El backend debe verificar autorización.

## 8. Práctica guiada

Panel con:

- cargando;
- no autenticado;
- autenticado sin permiso;
- autorizado.

Define qué rama corresponde a cada estado.

## 9. Errores frecuentes

- ternarios encadenados;
- && con número 0;
- CSS oculto = desmontado;
- esconder botón = seguridad;
- ramas que reinician estado accidentalmente.

## 10. Reto
Panel de acceso con estados claros y sin condiciones ambiguas.

## 11. Autoevaluación

1. ¿Cuándo retorno temprano?
2. ¿Qué riesgo tiene && con 0?
3. ¿null renderiza DOM?
4. ¿display:none desmonta?
5. ¿Ocultar botón autoriza?
6. ¿Qué puede reiniciar estado?

## 12. Checklist

- [ ] Ramas claras.
- [ ] Condiciones booleanas.
- [ ] Comprendo montaje.
- [ ] Seguridad no depende de UI.

Continúa con listas.

## Laboratorio desarrollado: Condiciones y estados excluyentes

### Modelo, contrato y decisiones

fase representa una alternativa de UI. El ejemplo es una simulación sin red: seleccionar loading no inicia una petición y debe presentarse como tal. Representar una fase explícita evita combinar varios booleanos que permitan loading y success al mismo tiempo. Empty es un éxito sin elementos y error informa que no se obtuvo el resultado válido. Un contenido que desaparece puede desmontar componentes y reiniciar estado interno cuando vuelva.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/08. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

La selección cambia mensajes y solo success muestra la lista.

### Implementación completa del componente

```jsx
import { useState } from "react";
export default function App() {
  const [fase, setFase] = useState("idle");
  const mensajes = {
    idle: "Listo",
    loading: "Cargando",
    success: "Datos disponibles",
    empty: "No hay resultados",
    error: "Falló la operación",
  };
  return (
    <section>
      <h2>Renderizado condicional</h2>
      <label htmlFor="fase">Estado simulado</label>
      <select id="fase" value={fase} onChange={(e) => setFase(e.target.value)}>
        {Object.keys(mensajes).map((k) => (
          <option key={k}>{k}</option>
        ))}
      </select>
      <p role={fase === "error" ? "alert" : "status"}>{mensajes[fase]}</p>
      {fase === "success" && (
        <ul>
          <li>Recurso 1</li>
          <li>Recurso 2</li>
        </ul>
      )}
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Añade un caso denied con un mensaje explícito y sin lista. Explica por qué una colección vacía no debe usar ese mismo mensaje ni el de error.

**Casos que debes registrar:** idle; loading; success; empty; error; denied simulado.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 07: Estado con useState](../unidad07-usestate/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 09: Listas, keys e identidad](../unidad09-listas-keys/README.md)
