# ⭐ Star Wars Universe Explorer

## Descripción del Proyecto

**Star Wars Universe Explorer** es una aplicación web desarrollada con **React JS** y **Vite** con el objetivo educativo de **consumir una API externa** (SWAPI - Star Wars API). 

Este proyecto demuestra cómo:
- 🔌 Conectarse y consumir datos de una API REST externa
- 📱 Construir una interfaz moderna y responsiva
- 💾 Gestionar estado global con Context API y useReducer
- ⭐ Implementar funcionalidades como favoritos y búsqueda
- 🎨 Aplicar diseño minimalista y elegante

### Características Principales

- **Exploración de personajes**: Visualiza todos los personajes de Star Wars
- **Exploración de planetas**: Descubre los mundos del universo Star Wars
- **Detalles completos**: Accede a información detallada de cada personaje y planeta
- **Sistema de favoritos**: Guarda tus personajes y planetas favoritos
- **Diseño responsive**: Funciona perfectamente en dispositivos móviles y desktop

---

## Getting Started

> 📦 Asegúrate de usar Node.js versión 20 o superior.

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Crea un archivo `.env`:
   ```bash
   cp .env.example .env
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run start
   ```

---

## 🏗️ Estructura del Proyecto

```
src/
├── components/        # Componentes reutilizables
├── pages/            # Páginas principales
├── hooks/            # Custom hooks (useGlobalReducer)
├── services/         # Servicios para consumir APIs
├── store.js          # Estado global con useReducer
├── routes.jsx        # Configuración de rutas
└── index.css         # Estilos globales
```

## 🎓 Conceptos Educativos

Este proyecto enseña:

- **Consumo de APIs REST**: Cómo hacer fetch a datos externos
- **Gestión de Estado**: Usar Context API y useReducer
- **React Hooks**: useState, useEffect, useContext
- **Componentes Funcionales**: Arquitectura moderna de React
- **Routing**: Navegación con React Router
- **Diseño Responsivo**: Mobile-first con CSS moderno

## 🔗 API Utilizada

[SWAPI - Star Wars API](https://swapi.tech/) - Una API gratuita con datos de Star Wars

## 🎨 Tecnologías

- **React 18+** - Librería UI
- **Vite** - Bundler rápido
- **React Router** - Enrutamiento
- **Bootstrap 5** - Framework CSS
- **Font Awesome** - Iconos

## 📝 Licencia

Este es un proyecto educativo de 4Geeks Academy
  //here you use the hook to get dispatcher and store
  import { dispatch, store } = useGlobalReducer();

  return <div>{/* you can use your actions or store inside the html */}</div>
}
```

## Publish your website!

1. **Vercel:** The FREE recomended hosting provider is [vercel.com](https://vercel.com/), you can deploy in 1 minutes by typing the following 2 commands:

Login (you need to have an account):
```sh
$ npm i vercel -g && vercel login
```
Deploy:
```sh
$ vercel --prod
```
✎ Note: If you don't have an account just go to vercel.com, create a account and come back here.

![Vercel example procedure to deploy](https://github.com/4GeeksAcademy/react-hello-webapp/blob/4b530ba091a981d3916cc6e960e370decaf2e234/docs/deploy.png?raw=true)

## Contributors

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning) and [CyberSecurity Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/cybersecurity).
