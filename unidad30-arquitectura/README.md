# Unidad 30: Arquitectura por features

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/react/)

## Qué aprenderás
Organizar una aplicación por funcionalidades y definir dependencias sin imponer una plantilla universal.

## 1. App pequeña

Puede comenzar con pocos archivos/carpetas. No necesitas veinte carpetas vacías.

## 2. Cuando crece

Una opción:

```text
src/
├── app/
├── features/
│   ├── products/
│   └── cart/
└── shared/
```

Agrupa lo que cambia junto.

## 3. Feature

Una feature puede contener componentes, hooks, API, modelo y páginas cuando realmente existen esas responsabilidades.

No crees subcarpetas vacías por plantilla.

## 4. Shared

Coloca allí lo realmente reutilizado y agnóstico.

No muevas algo a shared “por si después”.

## 5. Dependencias

Una regla posible:

```text
app → features → shared
```

Evita que una feature importe internals de otra arbitrariamente.

Coordina mediante API pública o composición desde app.

## 6. API pública

Un index puede exponer las partes soportadas de una feature.

No lo uses para reexportar todo ni esconder ciclos.

## 7. Estado

La arquitectura de carpetas no decide automáticamente dónde vive el estado.

Estado local sigue local; Context/reducer solo cuando el mapa de estado lo justifica.

## 8. Datos remotos

Clientes/queries pueden vivir cerca de la feature.

Una capa API global gigante puede convertirse en cajón de sastre.

## 9. Pruebas

Pueden vivir cerca del código o en estructura acordada.

Prioriza facilidad de encontrar/mantener sobre una convención universal.

## 10. Práctica guiada

Reorganiza catálogo y carrito. Dibuja imports permitidos y elimina un ciclo.

## 11. Errores frecuentes

- arquitectura empresarial para app pequeña;
- shared como basurero;
- carpetas vacías;
- imports internos cruzados;
- index que exporta todo;
- estado global por plantilla.

## 12. Reto
Arquitectura por features con diagrama de dependencias.

## 13. Autoevaluación

1. ¿Cuándo features?
2. ¿Qué va a shared?
3. ¿Carpetas vacías?
4. ¿Cómo coordinar features?
5. ¿Index para qué?
6. ¿Carpetas deciden state?

## 14. Checklist

- [ ] Estructura proporcional.
- [ ] Features coherentes.
- [ ] Dependencias claras.
- [ ] Shared real.

Continúa con configuración.

## Laboratorio desarrollado: Organización por responsabilidad

### Modelo, contrato y decisiones

features/tareas contiene reglas, reducer, almacenamiento e interfaz. El componente no accede a la posición de una lista filtrada para decidir identidad. El dominio se prueba sin React ni DOM; el almacenamiento valida antes de aceptar o guardar registros; la interfaz coordina estado local de campos, acciones y foco. Separar archivos solo por su tamaño no garantiza buena arquitectura: observa las dependencias y evita que reglas puras importen el coordinador visual.

Un componente correcto conserva su contrato cuando cambian entradas y condiciones. Antes de añadir una optimización o una abstracción, identifica qué dato tiene propietario, qué resultado se deriva y qué efecto toca un recurso externo. En este laboratorio puedes observar esas decisiones y comparar una modificación concreta con la referencia.

### Preparar y abrir

Sigue [ENTORNO.md](../docs/ENTORNO.md) desde la raíz del curso. Después abre http://127.0.0.1:5173/#/laboratorio/30. El [archivo App.jsx](ejemplo/App.jsx) es el componente completo de la unidad. GitHub muestra código fuente: para interactuar necesitas la copia local y el servidor Vite.

No hace falta un proyecto npm distinto por unidad. El [índice de laboratorios](../src/App.jsx) carga este componente y conserva la navegación. Los estilos y la entrada comunes están en src. Si lo copias a otro proyecto, conserva los imports que use y el contexto de router cuando corresponda; un fragmento aislado no incluye automáticamente esas dependencias.

### Resultado esperado

La feature ofrece CRUD, filtros y guardado con reglas independientes.

### Implementación completa del componente

```jsx
import Tareas from "../../features/tareas/Tareas.jsx";
export default function App() {
  return (
    <section>
      <h2>Una feature con límites explícitos</h2>
      <p>
        Reglas, reducer, almacenamiento e interfaz se encuentran en
        features/tareas.
      </p>
      <Tareas />
    </section>
  );
}
```

Lee primero los imports, después el estado/valores derivados y al final los handlers y JSX. Los cambios de estado solicitan otro render: no cambian el snapshot ya capturado por un handler. En componentes que importan una feature, abre el archivo importado para seguir su contrato; no confundas un wrapper visual con toda la lógica del flujo.

### Experimentar y comprobar

Dibuja dependencias y añade una búsqueda o filtro sin mover el dominio al componente. Completa una tarea desde una vista filtrada y comprueba el id correcto.

**Casos que debes registrar:** Dependencias; filtro; edición por id; pruebas puras; sin ciclos.

Escribe la predicción antes de modificar. Cambia una condición por vez y contrasta el resultado visible con sus datos de entrada. Console y Network aportan diagnóstico, pero una ausencia de excepciones no prueba por sí sola que la regla o la interacción sean correctas. Restaura las variantes defectuosas antes de continuar.

### Actividad y solución

Realiza [PRACTICA.md](PRACTICA.md) y consulta después [SOLUCIONES.md](SOLUCIONES.md). La solución explica qué decisión conserva el contrato; no exige copiar exactamente los mismos nombres. Cuando haya controles, recórrelos también con teclado y verifica que un error no elimine la posibilidad de corregirlo.

---

## Continuar el curso

- **Unidad anterior:** [Unidad 29: memo, useMemo y useCallback](../unidad29-memoizacion/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Siguiente unidad:** [Unidad 31: Configuración y variables de entorno](../unidad31-configuracion/README.md)
