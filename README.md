# **Proyecto PTGA - Landing**

## Español 🇦🇷

## Landing Page para Cooperativa PTGA - Servicios de instalación en telecomunicaciones y electricidad. ⚡ 📻

Este proyecto consiste en la creacion de una landing page diseñado específicamente para la cooperativa PTGA , la cual provee asesoramiento, investigación, fabricación y servicios de instalación en telecomunicaciones y electricidad.
EL mismo utiliza tecnologías modernas para que agilizaron el proceso de desarrollo y asi, proporciona una experiencia fluida tanto para los desarrolladores como para los usuarios finales.

## Requisitos de Instalación 🛠️

Para ejecutar este proyecto localmente, asegúrate de tener instalados los siguientes requisitos:

- **Node.js**: Se requiere Node.js en tu sistema. Puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org).
- **Next.js**: Este proyecto utiliza Next.js como framework de desarrollo web. A continuacion dejare información sobre cómo instalar y configurar el mismo, y usar variables de entorno con el.

Puedes instalarlo globalmente usando npm:

```bash
npm install -g next

```

**React.js**: Next.js utiliza React.js como biblioteca para construir interfaces de usuario. No necesitas instalar React.js por separado, ya que viene incluido con Next.js.

**Tailwind CSS**:Utilizamos Tailwind CSS para estilizar nuestras aplicaciones. Puedes instalarlo ejecutando:

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

## Instrucciones de Instalación 🚀

Sigue estos pasos para configurar y ejecutar el proyecto localmente.

1- Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/tu-proyecto.git
```

2- Navega al directorio del proyecto:

```bash
cd tu-proyecto
```

3- Instala las dependencias del proyecto usando npm:

```bash
npm install
```

4- Inicia el servidor de desarrollo:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo en _http://localhost:3000._

## Variables de Entorno

Las variables de entorno son una forma de configurar la aplicación sin valores estaticos en el código. NOs ayuda a manejar configuraciones que pueden variar en diferentes entornos, como claves de API, URLs, y otros datos sensibles.

### Configuración de Variables de Entorno en Next.js

Next.js soporta el uso de archivos `.env` para manejar variables de entorno. Estos archivos se crean en la raíz del proyecto.

#### Pasos para configurar variables de entorno:

1. **Crear un archivo `.env.local`**:

   Crear un archivo llamado `.env.local` en la raíz del proyecto y luego agregar este archivo a tu `.gitignore` para que no se suba a tu repositorio.
   
   Puedes utilizar el env.example como guia.

2. **Definir las variables de entorno**:

   Dentro de `.env.local`, define tus variables de entorno. Recuerda que en el caso de Next, las variables que necesitas usar en el cliente (navegador) deben comenzar con el prefijo NEXT_PUBLIC_*

   Por ejemplo:

   ```
   NEXT_PUBLIC_CONTACT_NUMBER=1234567890
   ```

## Contribuciones 🤝

Las contribuciones son bienvenidas y apreciada. Si tienes alguna idea, duda o problema, no dudes en abrir un issue o enviar un pull request. Tu participación ayuda a mejorar este proyecto para todes. ❤️
