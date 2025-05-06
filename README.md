# Login maquetacin#1

LOGIN es una aplicacion web diseñada para loguearse y registrarse y navegar por los varios componentes 


## 📌 Descripción

Esta app permite registrar, visualizar  y ver las diferentes pestañas 


## 🛠️ Tecnologías utilizadas
- **CSS** – Estilos personalizados  
- **HTML** – Estructura base del proyecto
- - **React JS** – Biblioteca principal para la interfaz de usuario  
- **JSON-Server** – Simulación de API REST con datos en formato JSON  
- **React Router DOM** – Ruteo dinámico entre vistas

  ## 🎨 Paleta de colores

- `#000000`  
- `#f4f6f8`  
- `#333`  
- `#646cff`  
- `#535bf2`
- `#213547`

## 🔤 Tipografías

- **Lato** – Títulos  
- **Roboto** – Contenido general


## 🚀 Ejecución del proyecto

El proyecto se ejecuta con dos servicios en paralelo:

- **Backend**: JSON-Server (puerto por defecto: `http://localhost:3000`)
- **Frontend**: Vite + React (puerto por defecto: `http://localhost:5173`)

---


## 💾 Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/track-x.git
cd track-x

# 2. Instala las dependencias del frontend
npm install

# 3. Inicia el servidor JSON (backend simulado)
npx json-server --watch db.json --port 3000

# 4. En una nueva terminal, inicia el frontend con Vite
npm run dev
```


## 🗂️ Estructura del proyecto

```
src/
├── components/
│   ├── Login.tsx
│   ├── Registro.tsx
│   ├── Home.tsx
│   ├── Servicios.tsx
│   └── Contacto.tsx
├── App.tsx         
├── App.css
├── main.tsx

```

## 📫 Autor
Desarrollado por **Jean carlos giraldo ramos**  

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
