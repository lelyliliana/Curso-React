# Solución razonada: Configuración pública y build

[Práctica](PRACTICA.md) · [Lección](README.md) · [Índice](../README.md)

## Resultado de la referencia

Aparece nombre público y modo del entorno, sin una promesa de privacidad.

La implementación completa está en [App.jsx](ejemplo/App.jsx). Si importa un componente de features, revisa también sus reglas, hook/reducer y efectos: la interfaz de la unidad no duplica esa lógica.

## Desarrollo y explicación de la actividad

En el explorador de archivos puedes copiar y renombrar en los tres sistemas, sin comandos Bash obligatorios. El valor aparece en la salida generada. Cambiar una variable del hosting después de subir dist no reescribe un JavaScript ya construido: necesitarías otra build o un diseño de configuración en tiempo de ejecución. No pruebes esta observación con una clave real.

## Resolución concreta de la práctica

Con VITE_NOMBRE_CURSO definido se muestra su texto y aparece en el build. Sin la variable se utiliza Aprende React. Si la defines como cadena vacía, ?? conserva vacío; no significa que falló la lectura. El modo dev y el de build pueden diferir. La comprobación usa un texto ficticio y no crea ni publica secretos.

[Seguir el recorrido del código](DESARROLLO.md) · [Volver a la práctica](PRACTICA.md)

---

## Continuar el curso

- **Unidad anterior:** [Unidad 30: Arquitectura por features](../unidad30-arquitectura/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 32: Build y publicación de una SPA](../unidad32-build/README.md)
