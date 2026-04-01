# 📅 Mis Guardias

Aplicación web personal para registrar y gestionar turnos, guardias y horas extras. Sincronización en tiempo real con Firebase Firestore. Diseñada para uso en móvil, **instalable como aplicación nativa (PWA)** y con **soporte offline real**.

---

## 📱 Instalación (Como App)

Esta aplicación es una **PWA (Progressive Web App)**. Puedes instalarla en tu teléfono para usarla a pantalla completa sin la barra del navegador, mejorando el rendimiento de carga y permitiendo su uso sin conexión:

- **Android (Chrome)**: Entra en la web, toca los 3 puntos arriba a la derecha y selecciona "Instalar aplicación" o "Añadir a pantalla de inicio".
- **iOS (Safari)**: Entra en la web, toca el botón de "Compartir" (cuadrado con flecha abajo) y selecciona "Añadir a la pantalla de inicio".

---

## ✨ Funcionalidades

### Calendario
- Vista mensual de todo el año con scroll vertical
- Marcado rápido de turnos: **M7, M8, M9, TARDE, LIBRANZA, VACACIONES, INTENTO V.**
- Guardias con precio automático: G, GFF, LOC, LFF, FSM y variantes 112
- Sedes personalizadas (Princesa, Rosario Pino, Embajadores...)
- Días festivos con precio configurable
- Notas por día y **nota general por mes**
- Horas extras en incrementos de **0,5h**
- Foto/captura de cualquier mes para compartir

### Gestión
- **Selección múltiple de días** — aplica el mismo turno a varios días a la vez
- Modo solo lectura (candado) para evitar cambios accidentales
- Ocultar importes económicos con un toque

### Estadísticas 📊
- Contador de vacaciones y asuntos propios con base configurable
- **Alerta automática** cuando quedan ≤5 días de vacaciones
- Resumen del mes en curso (guardias, euros, horas)
- **Gráfico de guardias por mes**
- **Gráfico comparativa entre años**
- **Gráfico de horas extras por mes**
- Desglose de guardias por tipo

### Sincronización y Rendimiento 🚀
- Guardado automático en **Firebase Firestore**
- **Modo Offline Real:** Gracias a la caché persistente de Firebase, puedes añadir o borrar guardias sin cobertura (ej. en el ascensor) y se sincronizarán solas de forma segura al recuperar la red.
- Indicador de estado en tiempo real: 🟡 guardando / 🟢 sincronizado / 🔴 error
- Sin login — acceso directo desde cualquier dispositivo con la URL
- **Soporte PWA
