# Unidad 22 — Persistencia local en React

## Qué aprenderás
Inicializar y sincronizar preferencias o borradores sin duplicar estado innecesariamente.

# 1. Qué persistir

Buenos candidatos:
- tema;
- preferencias;
- borrador local;
- selección no sensible.

No persistas por defecto secretos ni un espejo completo del estado remoto.

# 2. Inicialización lazy

```jsx
const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme")
    ?? "system";
});
```

La lectura ocurre durante inicialización del estado en cliente.

En SSR, window/localStorage puede no existir y la estrategia debe cambiar.

# 3. Sincronización

```jsx
useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);
```

Aquí el efecto sincroniza React con un sistema externo.

# 4. JSON

Para objetos usa JSON.stringify/JSON.parse.

Maneja:
- ausencia;
- JSON corrupto;
- estructura antigua.

# 5. Versionado

Puedes guardar un campo version junto con las preferencias.

Una nueva versión de la app puede encontrar datos creados meses antes.

Define migración o fallback.

# 6. Fallos

Storage puede no estar disponible o fallar por políticas/cuota/contexto.

Una preferencia no debería derribar toda la aplicación.

# 7. Varias pestañas

El evento storage puede informar cambios en otros documentos del mismo origen.

Si la sincronización externa se vuelve compleja, centraliza el diseño en vez de añadir listeners dispersos.

# 8. Seguridad

Una vulnerabilidad XSS puede leer datos disponibles a JavaScript.

No uses localStorage para secretos por reflejo.

# 9. Práctica guiada

Tema persistente:
- inicialización;
- cambio;
- recarga;
- JSON inválido;
- versión anterior.

# 10. Errores frecuentes
- leer storage en cada render;
- secretos;
- parse sin fallback;
- persistir cache remoto entero;
- olvidar SSR;
- datos sin versión.

# 11. Reto
Preferencias versionadas con recuperación segura ante corrupción.

# 12. Autoevaluación
1. ¿Por qué lazy init?
2. ¿Storage es sistema externo?
3. ¿Qué pasa en SSR?
4. ¿JSON puede fallar?
5. ¿Por qué versionar?
6. ¿Storage para secretos?

# 13. Checklist
- [ ] Persisto solo requisito.
- [ ] Inicializo conscientemente.
- [ ] Sincronizo con efecto.
- [ ] Manejo fallos/versiones.

Continúa con accesibilidad.
