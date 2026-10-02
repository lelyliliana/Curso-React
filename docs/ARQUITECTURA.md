# Arquitectura pedagógica

## Dependencias
HTML/CSS → JavaScript → React.

## Reglas
- Componentes funcionales.
- No usar useEffect para valores que pueden derivarse durante render.
- Estado mínimo necesario.
- Props inmutables.
- Keys estables; no índice por defecto si identidad importa.
- Formularios y controles accesibles.
- Estados remotos explícitos.
- Cancelar/ignorar respuestas obsoletas cuando aplica.
- Context no sustituye automáticamente gestión de estado.
- memoización solo con razón/medición.
- Tests desde comportamiento observable.
- No guardar secretos en variables frontend.
- No prometer contenido futuro.
