# 📅 Calendario Personal UNIR

Aplicación web personal para registrar y gestionar turnos, guardias, sedes y horas extras. Sincronización en tiempo real con Firebase Firestore. Diseñada para uso en móvil, instalable como aplicación nativa (PWA) y con soporte offline real.

---

## 📱 Instalación (Como App)

Esta aplicación es una **PWA (Progressive Web App)**. Puedes instalarla en tu teléfono para usarla a pantalla completa sin la barra del navegador, con arranque inmediato y soporte sin conexión:

- **Android (Chrome):** Entra en la web → toca los 3 puntos arriba a la derecha → *"Instalar aplicación"* o *"Añadir a pantalla de inicio"*.
- **iOS (Safari):** Entra en la web → toca el botón *"Compartir"* (cuadrado con flecha) → *"Añadir a la pantalla de inicio"*.

---

## ✨ Funcionalidades

### 🔐 Autenticación
- Inicio de sesión con **Google** (Firebase Auth)
- Cada usuario tiene sus propios datos privados en Firestore
- Botón de cierre de sesión desde el menú flotante

### 📆 Calendario
- Vista mensual de todo el año con scroll vertical
- Selector de año (años anteriores y futuros disponibles)
- Los días pasados se muestran atenuados y tachados
- El día de hoy se resalta con un anillo azul
- Marcado rápido de turnos: **M7, M8, M9, TARDE, LIBRANZA, VACACIONES, INTENTO V.**
- **Guardias** con precio automático (ver tabla más abajo)
- **Festivo** registrable como tipo de guardia (precio 0 €)
- **Sedes** personalizadas: Princesa, Rosario Pino, S. Compostela, Gral. Castaños, Embajadores, J. Camarillo 11
- Notas por día y nota general por mes
- Horas extras en incrementos de 0,5h
- Contador de **AAPP** (asuntos propios) en incrementos de 2h — al llegar a 8h el día queda bloqueado como día AAPP completo
- Indicador visual de nota (punto rojo) y píldoras de horas/AAPP en cada celda del calendario

### 💶 Precios de Guardias

| Código | Precio |
|---|---|
| G | 27,55 € |
| G112 | 27,55 € |
| GFF | 69,60 € |
| GFF 112 | 69,60 € |
| LOC | 7,32 € |
| LFF | 18,48 € |
| L112 M | 7,32 € |
| LFF112 M | 18,48 € |
| L112 T | 7,32 € |
| LFF112 T | 18,48 € |
| FSM | 0 € |
| FSM 112 | 0 € |
| Festivo (F) | 0 € |

### ✏️ Edición
- Tap en cualquier día para abrir el modal de edición
- Vistas secundarias dentro del modal para **Guardia...** y **Sede...**
- Opciones de borrado individuales (borrar turno, borrar guardia) o total
- Guardar nota, horas extras y AAPP por día con un solo botón
- **Modo solo lectura** (🔒) para evitar cambios accidentales — activable desde el menú flotante

### ☑️ Selección Múltiple
- Activa desde el menú flotante → selecciona varios días tocándolos
- Banner superior con contador de días seleccionados
- Aplica el mismo turno, guardia o sede a todos los días seleccionados a la vez

### 📊 Estadísticas
- Contador de **vacaciones** usadas vs. base anual configurable
- Contador de **AAPP** en horas vs. base anual configurable
- Alerta automática animada cuando quedan ≤5 días de vacaciones
- Resumen del **mes en curso**: guardias, importe y horas extras
- Desglose de guardias por tipo
- Total de horas extras del año (positivo/negativo)

### 💰 Totales económicos
- Total global del año visible en la cabecera
- Total por mes en cada tarjeta del calendario
- Botón para **ocultar/mostrar importes** con un toque (🙈/👁️) — persiste entre sesiones

### 🌗 Apariencia
- **Modo claro y oscuro** — toggle desde el menú flotante, persiste entre sesiones
- Diseño suave en modo claro (tonos gris slate, sin blancos estridentes)
- Totalmente **responsive**, optimizado para móvil

### 🚀 Sincronización
- Guardado automático en **Firebase Firestore** tras cada cambio
- **Modo offline real**: gracias a la caché persistente de Firebase puedes registrar guardias sin cobertura — se sincronizan solas al recuperar la red
- Indicador de estado en tiempo real en la cabecera: 🟡 guardando / 🟢 sincronizado / 🔴 error
- Navegación entre años sin recargar la página

---

## 🛠️ Tecnologías

| Herramienta | Uso |
|---|---|
| HTML + JS vanilla | Interfaz y lógica principal (sin frameworks) |
| Tailwind CSS (CDN) | Estilos y diseño responsive |
| Firebase Auth | Autenticación con Google |
| Firebase Firestore | Base de datos en tiempo real (`persistentLocalCache`) |
| PWA / Service Worker | Instalación móvil, caché offline y arranque instantáneo |

> Sin dependencias locales, sin build, sin `node_modules`.

---

## ⚙️ Configuración

### Firebase

1. Crea un proyecto en [console.firebase.google.com](https://console.firebase.google.com)
2. Activa **Firestore Database** en modo producción
3. Activa **Authentication** y habilita el proveedor **Google**
4. Configura las reglas de Firestore para que cada usuario solo acceda a sus datos:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /mis-guardias/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

5. Registra una **app web** en el proyecto y copia el bloque `firebaseConfig`
6. Pégalo en `index.html` en la sección `// --- 1. CONFIGURACIÓN FIREBASE ---`

### GitHub Pages

1. Sube los archivos al repositorio (`index.html`, `manifest.json`, `sw.js`, `README.md`)
2. Ve a **Settings → Pages**
3. Branch: `main`, carpeta: `/ (root)`
4. La app estará disponible en `https://TU_USUARIO.github.io/REPO/`

---

## 📁 Estructura

```
/
├── index.html      ← Toda la aplicación (HTML + CSS + JS)
├── manifest.json   ← Identidad de la app para el sistema operativo (PWA)
├── sw.js           ← Service Worker para caché de archivos y modo offline
└── README.md       ← Este archivo
```

---

## 🔄 Actualizar la app

Sube los nuevos archivos al repositorio sobreescribiendo los anteriores. GitHub Pages se actualiza en 1–2 minutos.

Para que los usuarios (o tú mismo) reciban la nueva versión, fuerza la recarga:
- **Escritorio:** `Ctrl + Shift + R`
- **Móvil:** cierra completamente la app desde la multitarea y vuelve a abrirla

Esto limpia la caché del Service Worker y descarga la versión más reciente.
