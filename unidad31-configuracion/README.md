# Unidad 31 — Configuración y variables de entorno

## Qué aprenderás
Separar configuración pública del código y comprender que todo valor incorporado al frontend puede ser visible.

# 1. Regla

Si el navegador necesita un valor, debes asumir que el usuario puede obtenerlo.

Una variable de entorno de build no convierte un secreto en secreto.

# 2. Vite

Vite expone al cliente variables según su convención/configuración, comúnmente con prefijo VITE_.

```js
const apiUrl =
  import.meta.env.VITE_API_URL;
```

Comprueba la documentación de la versión usada.

# 3. Valores apropiados

- URL pública de API;
- nombre de entorno;
- flags no sensibles;
- identificadores diseñados como públicos.

# 4. Nunca

- password;
- API key privada;
- secret OAuth;
- token de servicio;
- clave de firma.

Aunque el archivo .env no esté en Git, el valor incorporado al bundle puede quedar visible.

# 5. Archivo example

Puedes versionar `.env.example` con nombres y valores ficticios.

# 6. Build-time

En una SPA estática, estas variables suelen incorporarse durante build.

Cambiar la variable del servidor después puede no modificar un bundle ya construido.

Runtime config requiere otra estrategia.

# 7. Entornos

Desarrollo puede usar API local y producción una API pública sin modificar el código fuente.

# 8. Validación

Si falta una configuración crítica, produce un error claro en vez de construir URLs con undefined.

# 9. Feature flags

Un flag frontend controla experiencia, no autorización.

El backend sigue protegiendo operaciones sensibles.

# 10. Práctica guiada

Crea builds con dos API_URL. Busca el valor en la salida generada para comprobar que es observable.

# 11. Errores frecuentes
- secreto en VITE_;
- creer que .env protege bundle;
- cambiar env tras build esperando efecto;
- flag como autorización;
- URL repetida en muchos módulos.

# 12. Reto
Configuración validada sin secretos y con archivo example.

# 13. Autoevaluación
1. ¿Frontend guarda secretos?
2. ¿Qué hace VITE_?
3. ¿.env protege el bundle?
4. ¿Qué es build-time?
5. ¿Flag autoriza?
6. ¿Qué versionar?

# 14. Checklist
- [ ] Solo configuración pública.
- [ ] Fuente central.
- [ ] Validación.
- [ ] Sin secretos.

Continúa con build.
