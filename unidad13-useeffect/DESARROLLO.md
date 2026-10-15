# Cambiar una suscripción sin acumular intervalos

[Unidad](README.md) · [Práctica](PRACTICA.md) · [Solución](SOLUCIONES.md)

## 1. Ubica la implementación

Abre [unidad13-useeffect/ejemplo/App.jsx](../unidad13-useeffect/ejemplo/App.jsx) desde la copia completa del curso. Ejecuta el laboratorio 13 en http://127.0.0.1:5173/#/laboratorio/13.

## 2. Sigue los datos y las decisiones

Reloj se monta mientras visible es true. Su efecto crea un intervalo y la función de retorno cancela precisamente ese id. El setter funcional permite incrementar ticks sin capturar una cantidad antigua; por eso ticks no necesita convertirse en dependencia del intervalo.

La extensión recibe intervaloMs como prop y lo incluye en dependencias. Al cambiar de 1000 a 200, React limpia el intervalo anterior antes de instalar el nuevo. La identidad de Reloj permanece, así que conserva ticks; cambiar la frecuencia no implica reiniciar su memoria.

Ocultar retira Reloj del árbol. La limpieza cancela el intervalo y se destruye su estado local. Mostrar crea otra instancia con ticks=0. Es una operación distinta de cambiar la prop. En StrictMode pueden verse comprobaciones adicionales de setup y cleanup: una limpieza correcta deja una sola suscripción efectiva.

## 3. Contrasta una modificación

En la extensión deja pasar un segundo, cambia frecuencia y luego oculta. Muestra de nuevo y comprueba cero inicial. Repite tres veces. Para verificar acumulación de forma determinista usa temporizadores falsos en una prueba; una observación manual de tiempo exacto puede variar por planificación del navegador.

La [extensión resuelta completa](ejemplo/Solucion.jsx) se ejecuta en http://127.0.0.1:5173/#/solucion/13. Ábrela después de intentar la práctica; la referencia original sigue disponible en el enlace de regreso.

## 4. Resuelve y explica

Completa la [práctica](PRACTICA.md) y contrasta después la [solución razonada](SOLUCIONES.md). Anota la entrada o acción, el resultado que predijiste y el observado; utiliza la diferencia para explicar la decisión del tema.
