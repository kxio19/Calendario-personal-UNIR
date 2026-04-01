# 📅 Mis Guardias

Aplicación web personal para registrar y gestionar turnos, guardias y horas extras. Sincronización en tiempo real con Firebase Firestore. Diseñada para uso en móvil, sin instalación.

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

### Sincronización
- Guardado automático en **Firebase Firestore**
- Indicador de estado en tiempo real: 🟡 guardando / 🟢 sincronizado / 🔴 error
- Sin login — acceso directo desde cualquier dispositivo con la URL

### UX
- Modo oscuro / claro con persistencia
- Día de la semana visible al abrir cualquier día
- Fines de semana diferenciados visualmente
- Día actual resaltado
- Días pasados atenuados con tachado

---

## 🚀 Tecnologías

| Herramienta | Uso |
|---|---|
| HTML + JS vanilla | Toda la app en un único archivo |
| Tailwind CSS (CDN) | Estilos y responsive |
| Firebase Firestore | Base de datos en tiempo real |
| Chart.js | Gráficos de estadísticas |
| html2canvas | Captura de pantalla de meses |
| GitHub Pages | Hosting gratuito |

---

## ⚙️ Configuración

### Firebase
1. Crea un proyecto en [console.firebase.google.com](https://console.firebase.google.com)
2. Activa **Firestore Database** en modo prueba
3. Configura las reglas de Firestore:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /mis-guardias/{document=**} {
      allow read, write: if true;
    }
  }
}
```
4. Registra una app web y copia el bloque `firebaseConfig`
5. Pégalo en `index.html` en la sección `// --- 1. CONFIGURACIÓN FIREBASE ---`

### GitHub Pages
1. Sube `index.html` al repositorio
2. Ve a **Settings → Pages**
3. Branch: `main`, carpeta: `/ (root)`
4. La app estará disponible en `https://TU_USUARIO.github.io/REPO/`

---

## 📁 Estructura

```
/
└── index.html     ← Toda la aplicación
└── README.md      ← Este archivo
```

Un único archivo. Sin dependencias locales, sin build, sin node_modules.

---

## 🔄 Actualizar la app

Sube el nuevo `index.html` al repositorio sobreescribiendo el anterior. GitHub Pages se actualiza en 1-2 minutos. Fuerza recarga con `Ctrl+Shift+R` si el navegador sirve la versión anterior desde caché.
