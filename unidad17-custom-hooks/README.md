# Unidad 17 — Custom hooks

## Qué aprenderás
Extraer lógica reactiva reutilizable sin esconder prematuramente el comportamiento de la aplicación.

# 1. Qué es

Una función cuyo nombre comienza con use y que puede llamar hooks.

```jsx
function useOnlineStatus() {
  const [online, setOnline] =
    useState(navigator.onLine);

  // sincronización...
  return online;
}
```

# 2. Comparte lógica, no estado automáticamente

Dos componentes que llaman el mismo custom hook obtienen instancias independientes de sus hooks internos, salvo que el hook use una fuente compartida externa/contexto.

Un custom hook no crea un singleton.

# 3. Reglas de Hooks

Los hooks se llaman:
- en nivel superior;
- desde componentes React o custom hooks;
- no dentro de if/loops arbitrarios.

Esto permite a React asociar las llamadas de manera consistente.

# 4. Cuándo extraer

Señales:
- lógica reactiva repetida;
- componente mezcla demasiada sincronización;
- existe una abstracción con nombre y contrato claros.

No extraigas solo para reducir líneas.

# 5. API de dominio

```jsx
const {
  data,
  status,
  retry
} = useProducts(query);
```

Puede ser más claro que crear inmediatamente un mega useFetch genérico con decenas de opciones.

# 6. Efectos internos

El hook debe cumplir las mismas reglas:
- dependencias;
- cleanup;
- cancelación;
- evitar estado derivado.

Extraer un efecto incorrecto no lo corrige.

# 7. Callbacks

Un hook puede retornar acciones.

No uses useCallback automáticamente; la estabilidad referencial solo importa en contextos concretos.

# 8. Pruebas

Prueba preferentemente el comportamiento observable del componente que usa el hook o el hook con herramientas apropiadas cuando merece aislamiento.

No pruebes cada setState interno.

# 9. Práctica guiada

Extrae la lógica de búsqueda remota con query, loading, error y cancelación.

Después compara una API específica useProductSearch frente a una abstracción useFetch.

# 10. Errores frecuentes
- hook = estado compartido;
- hook dentro de if;
- extraer una sola línea sin beneficio;
- mega hook genérico prematuro;
- useCallback por defecto;
- esconder un effect defectuoso.

# 11. Reto
Custom hook de dominio con API pequeña y cancelación correcta.

# 12. Autoevaluación
1. ¿Hook comparte estado automáticamente?
2. ¿Dónde llamar hooks?
3. ¿Cuándo extraer?
4. ¿Genérico siempre mejor?
5. ¿Effect interno sigue mismas reglas?
6. ¿useCallback obligatorio?

# 13. Checklist
- [ ] Lógica reutilizable.
- [ ] Reglas de hooks.
- [ ] API clara.
- [ ] Sin abstracción prematura.

Continúa con routing.
