# Unidad 13 — useEffect, dependencias y cleanup

## Qué aprenderás
Escribir efectos que se sincronizan correctamente con valores reactivos y limpiar recursos obsoletos.

# 1. Forma

```jsx
useEffect(() => {
  // setup

  return () => {
    // cleanup
  };
}, [dependencias]);
```

# 2. Dependencias no son una elección estética

Si el efecto lee un valor reactivo de props/estado/componente, ese valor suele pertenecer a dependencias.

No elimines una dependencia solo para “hacer que se ejecute una vez”.

Reestructura el código si la semántica deseada es distinta.

# 3. Sin array

El efecto se ejecuta después de cada commit relevante del componente.

No significa “bucle infinito” por sí solo.

Se vuelve bucle si el efecto actualiza estado que provoca otra ejecución de forma repetitiva.

# 4. Array vacío

```jsx
useEffect(() => {
  conectar();
  return desconectar;
}, []);
```

expresa que el setup no depende de valores reactivos cambiantes.

En desarrollo StrictMode puede hacer setup→cleanup→setup adicional.

# 5. Cleanup

Debe deshacer el setup:
- unsubscribe;
- clearInterval;
- abort;
- removeEventListener;
- cerrar conexión.

No es solo “código al desmontar”: también ocurre antes de reejecutar un efecto cuando cambian dependencias.

# 6. Stale closure

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log(contador);
  }, 1000);
}, []);
```

captura el contador del render asociado al efecto.

No “arregles” añadiendo valores al azar. Decide si el timer debe reiniciarse, usar updater/ref u otro diseño.

# 7. Funciones/objetos como dependencias

Una función/objeto creado en cada render tiene identidad nueva.

Antes de envolver todo en useCallback/useMemo, pregunta si:
- puede crearse dentro del efecto;
- el efecto puede depender de valores primitivos;
- realmente necesitas el efecto.

# 8. Linter de hooks

Las reglas de hooks ayudan a detectar dependencias/reactividad.

No las desactives por costumbre.

# 9. Práctica guiada

Implementa:
- document.title;
- timer;
- suscripción simulada.

Cambia dependencias y observa setup/cleanup.

# 10. Errores frecuentes
- dependencia omitida;
- [] para forzar “una vez”;
- cleanup solo mentalmente al unmount;
- stale closures;
- memoización para callar linter;
- effect para derivar estado.

# 11. Reto
Suscripción que cambia de canal sin dejar conexiones antiguas.

# 12. Autoevaluación
1. ¿Dependencias describen qué?
2. ¿Cleanup cuándo ocurre?
3. ¿[] significa exactamente una ejecución en dev?
4. ¿Qué es stale closure?
5. ¿Cómo resolver función dependency?
6. ¿Desactivar linter?

# 13. Checklist
- [ ] Dependencias correctas.
- [ ] Cleanup simétrico.
- [ ] Sin stale data.
- [ ] Efectos mínimos.

Continúa con datos remotos.
