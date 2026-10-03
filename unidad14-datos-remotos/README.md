# Unidad 14 — Datos remotos en React

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Consumir APIs sin mezclar transporte, estado y render, y comprender cuándo un effect es una solución razonable.

# 1. Cliente API

```js
export async function obtenerProductos(signal) {
  const response = await fetch("/api/productos", {
    signal
  });

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status}`
    );
  }

  return response.json();
}
```

Mantén HTTP fuera del JSX cuando la aplicación crece.

# 2. Carga ligada a estado

Si mostrar `/productos?q=react` requiere sincronizarse con el valor `q`, un efecto puede iniciar la carga.

En aplicaciones con router/data framework, el framework puede ofrecer loaders/cache que eviten escribir fetch manual en effects.

Aprende el modelo antes de abstraerlo.

# 3. Effect básico

```jsx
useEffect(() => {
  let ignore = false;

  async function cargar() {
    const datos = await obtenerProductos();

    if (!ignore) {
      setProductos(datos);
    }
  }

  cargar();

  return () => {
    ignore = true;
  };
}, []);
```

Esto muestra el principio de ignorar resultados obsoletos; en la Unidad 16 usaremos AbortController.

# 4. No async directamente

El callback de useEffect debe devolver cleanup o undefined, no una Promise.

Por eso:

```jsx
useEffect(() => {
  async function cargar() {}
  cargar();
}, []);
```

en vez de `useEffect(async () => ...)`.

# 5. Waterfalls

Padre carga usuario; después hijo monta y carga pedidos; después nieto carga detalles.

Esto puede crear cascadas de red.

Routing/data libraries o cargas paralelas pueden mejorar el diseño.

No todo fetch pertenece a cada componente individual.

# 6. Cache

Un effect manual no proporciona automáticamente:
- cache;
- deduplicación;
- revalidación;
- prefetch;
- sincronización entre consumidores.

Librerías/frameworks de datos pueden aportar esas capacidades cuando la aplicación las necesita.

# 7. SSR

Fetch en effects ocurre solo en cliente después del render/commit, por lo que no participa en renderizado servidor inicial.

Esto importa en frameworks React con SSR.

# 8. Práctica guiada

Carga productos con cliente separado. Después dibuja qué ocurre si dos componentes necesitan el mismo recurso.

# 9. Errores frecuentes
- fetch dentro de JSX/render;
- useEffect(async ...);
- HTTP y markup mezclados;
- asumir cache;
- waterfalls ignoradas;
- creer que effect fetch corre en servidor.

# 10. Reto
Carga remota con cliente separado y explicación de cuándo migrarías a una solución de datos dedicada.

# 11. Autoevaluación
1. ¿fetch durante render?
2. ¿Por qué effect callback no async?
3. ¿Effect manual cachea?
4. ¿Qué es waterfall?
5. ¿Effect corre en SSR?
6. ¿Cliente API conoce JSX?

# 12. Checklist
- [ ] Cliente separado.
- [ ] Effect correcto.
- [ ] Comprendo limitaciones.
- [ ] Evito waterfalls obvias.

Continúa con estados remotos.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 13 — useEffect, dependencias y cleanup](../unidad13-useeffect/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 15 — Loading, error, empty y datos remotos](../unidad15-estados-remotos/README.md)
