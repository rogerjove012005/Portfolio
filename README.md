# Portfolio Personal

Portfolio profesional moderno construido con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🎨 Animaciones suaves con Framer Motion
- 📱 Completamente responsive
- ⚡ Optimizado para rendimiento
- 🎯 SEO friendly
- 🌙 Modo oscuro por defecto

## 📋 Secciones

- **Hero**: Presentación principal con enlaces sociales
- **Sobre Mí**: Información personal y profesional
- **Habilidades**: Stack tecnológico con barras de progreso
- **Proyectos**: Galería de proyectos destacados
- **Contacto**: Formulario de contacto e información

## 🛠️ Tecnologías

- [Next.js 14](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Estilos
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [React Icons](https://react-icons.github.io/react-icons/) - Iconos

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/portfolio.git
cd portfolio
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Personalización

### Cambiar información personal

1. **Hero Section** (`components/Hero.tsx`):
   - Cambia "Tu Nombre" por tu nombre
   - Actualiza la descripción
   - Modifica los enlaces sociales

2. **About Section** (`components/About.tsx`):
   - Actualiza la biografía
   - Cambia las áreas de especialización

3. **Skills Section** (`components/Skills.tsx`):
   - Añade o elimina habilidades
   - Ajusta los niveles de competencia

4. **Projects Section** (`components/Projects.tsx`):
   - Añade tus proyectos reales
   - Actualiza enlaces de GitHub y demos
   - Cambia las tecnologías utilizadas

5. **Contact Section** (`components/Contact.tsx`):
   - Actualiza información de contacto
   - Configura el formulario de contacto (necesitarás un backend)

### Colores

Los colores se pueden personalizar en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Personaliza estos valores
  }
}
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🚢 Despliegue

### Vercel (Recomendado)

1. Importa tu repositorio en [Vercel](https://vercel.com)
2. Vercel detectará automáticamente Next.js
3. Haz clic en Deploy

### Otras plataformas

El proyecto puede desplegarse en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

Tu Nombre - email@example.com

Enlace del proyecto: [https://github.com/tu-usuario/portfolio](https://github.com/tu-usuario/portfolio)

#$env:PATH += ";C:\Program Files\nodejs"; npm run dev

#$Get-Process -Id 13192 | Stop-Process -Force