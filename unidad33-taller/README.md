# Unidad 33 — Taller integrador React

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Propósito

Resolver interfaces sin que el enunciado indique qué hook utilizar.

Debes decidir si algo es prop, state, URL, dato remoto, evento, efecto o valor derivado.

# Método

Para cada reto:
1. dibuja árbol;
2. clasifica estado;
3. define propietario;
4. implementa render puro;
5. añade eventos;
6. añade efectos solo si sincronizas;
7. prueba accesibilidad;
8. prueba comportamiento;
9. perfila solo si existe lentitud.

# Reto 1 — Lista filtrable

- datos;
- filtro;
- resultados derivados;
- keys estables.

No guardes la lista filtrada como segundo estado.

# Reto 2 — Formulario

- labels;
- controlado/no controlado justificado;
- validación;
- error;
- submit.

# Reto 3 — Catálogo remoto

- loading;
- success;
- empty;
- error;
- retry.

Cliente API separado.

# Reto 4 — Buscador cancelable

- query;
- debounce si aporta;
- AbortController;
- sin respuestas obsoletas.

# Reto 5 — Routing

- listado;
- detalle;
- query params;
- 404;
- acceso directo a URL.

# Reto 6 — Context

Comparte tema/idioma.

Explica por qué Context es mejor aquí que prop drilling o composición.

# Reto 7 — Reducer

Carrito con acciones de dominio.

Prueba reducer como función pura.

# Reto 8 — Persistencia

Preferencia versionada y recuperación ante datos corruptos.

# Reto 9 — Accesibilidad

Dialog o flujo equivalente:
- teclado;
- foco;
- nombres;
- retorno.

# Reto 10 — Pruebas

Cubre:
- interacción;
- async;
- empty/error/retry.

# Reto 11 — Rendimiento

Solo si puedes reproducir lentitud:
- perfil;
- hipótesis;
- cambio;
- comparación.

# Reto 12 — Arquitectura

Organiza dos features y shared sin ciclos.

# Evidencia

Entrega:
- árbol;
- mapa de estado;
- decisiones de efectos;
- pruebas;
- auditoría de accesibilidad;
- perfil cuando aplique.

# Autoevaluación

1. ¿Puedo evitar effect innecesario?
2. ¿Sé dónde vive estado?
3. ¿Comprendo keys?
4. ¿Puedo cancelar red?
5. ¿Context cuándo?
6. ¿Reducer cuándo?
7. ¿Pruebo como usuario?
8. ¿Memoizo solo con evidencia?

# Checklist

- [ ] Render puro.
- [ ] Estado mínimo.
- [ ] Efectos reales.
- [ ] Accesibilidad.
- [ ] Pruebas.
- [ ] Arquitectura.
- [ ] Rendimiento con evidencia.

Continúa con proyecto final.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 32 — Build y publicación de una SPA](../unidad32-build/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 34 — Proyecto final](../unidad34-proyecto-final/README.md)
