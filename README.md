# KOD Website

Web oficial del equipo **KOD**, construida con Astro y preparada para despliegue en Vercel.

---

## 🚀 Tecnologías

- Astro (framework principal)
- TypeScript / JavaScript
- HTML / CSS
- (Opcional) Rust + WebAssembly

---

## 📁 Estructura del proyecto

```
/
├── public/           # Assets estáticos (imágenes, iconos, favicon)
├── src/
│   ├── components/   # Componentes reutilizables
│   ├── layouts/      # Layouts globales
│   ├── pages/        # Rutas de la web
│   └── styles/       # Estilos globales
├── docs/             # Documentación interna del equipo
├── wasm/             # (Opcional) Código Rust para WebAssembly
└── README.md
```

---

## 📄 Páginas principales

- `/` → Home  
- `/about` → Sobre el equipo  
- `/projects` → Proyectos  
- `/contact` → Contacto  

---

## 🧑‍💻 Desarrollo

### 1. Clonar el repositorio

```bash
git clone <repo-url>
cd <repo-name>
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en local

```bash
npm run dev
```

Disponible en:  
http://localhost:4321

---

## 🏗️ Build

```bash
npm run build
```

---

## 🌐 Deploy (Vercel)

1. Subir el repositorio a GitHub  
2. Conectar el repo en Vercel  
3. Deploy automático  

---

## 🧠 Flujo de trabajo

- Cada funcionalidad → Issue  
- Cada cambio → Branch  
- Integración → Pull Request  

Ejemplo:

```
feature/navbar
fix/contact-form
```

---

## 📚 Carpeta `/docs`

Espacio para:

- Notas del proyecto  
- Ideas  
- Decisiones técnicas  
- Configuraciones útiles  

---

## 🦀 Rust + WebAssembly (opcional)

Solo usar si:

- Se necesitan cálculos complejos  
- Lógica avanzada en cliente  

No es necesario para la primera versión.

---

## ⚠️ Notas

- Mantener el código simple  
- Priorizar reutilización de componentes  
- Evitar complejidad innecesaria  

---

## 👥 Equipo

Proyecto desarrollado por el equipo KOD
