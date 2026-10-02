# Unidad 25 — Pruebas de flujos asíncronos

## Qué aprenderás
Probar secuencias loading→resultado/error→retry sin depender de Internet ni de tiempos arbitrarios.

# 1. Flujo

```text
render
→ loading
→ respuesta
→ success/empty/error
→ interacción posterior
```

Prueba la historia, no cada setState.

# 2. Async queries

Las herramientas ofrecen consultas que esperan a que aparezca/desaparezca contenido.

No uses `setTimeout(1000)` en tests como forma principal de sincronización.

Espera una condición observable.

# 3. Red

Usa:
- mock del cliente;
- service worker de pruebas;
- servidor controlado;
según alcance.

No llames una API pública real.

# 4. Success

Configura respuesta y verifica:
- loading;
- datos;
- loading desaparece.

# 5. Empty

Respuesta `[]` debe producir estado vacío, no error.

# 6. Error

Simula rechazo/HTTP clasificado y comprueba mensaje + retry.

No pruebes stack trace interno.

# 7. Retry

Primera llamada falla, segunda funciona.

Verifica que el usuario puede recuperarse.

# 8. Carrera/cancelación

Cuando es crítico, prueba que un resultado obsoleto no sobrescribe el nuevo.

Puede requerir controlar Promises manualmente.

# 9. Evita implementación

No afirmes:
> fetch fue llamado exactamente desde useEffect.

Afirma:
> al cambiar query se solicita el recurso correcto y se muestra el resultado vigente.

# 10. Práctica guiada

Crea pruebas para:
- loading→success;
- loading→empty;
- loading→error→retry→success.

# 11. Errores frecuentes
- wait con tiempo fijo;
- red real;
- test del hook interno en vez del flujo;
- no cubrir empty;
- retry no probado;
- mock que no se restaura.

# 12. Reto
Suite completa de buscador remoto con retry y respuesta obsoleta.

# 13. Autoevaluación
1. ¿Qué esperar en async?
2. ¿Internet real?
3. ¿Empty?
4. ¿Qué prueba retry?
5. ¿Implementación o flujo?
6. ¿Cómo probar carrera?

# 14. Checklist
- [ ] Async por condiciones.
- [ ] Red controlada.
- [ ] Success/empty/error.
- [ ] Retry.
- [ ] Carrera si aplica.

Continúa con errores.
