# Configuración de EmailJS para el Formulario de Contacto

## ¿Qué es EmailJS?

EmailJS es un servicio que te permite enviar correos electrónicos directamente desde el frontend sin necesidad de un backend propio. Es perfecto para formularios de contacto simples.

## Pasos para Configurar EmailJS

### 1. Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Confirma tu email

### 2. Crear un Servicio de Email

1. En el dashboard de EmailJS, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Elige tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta de email
5. **Guarda el Service ID** que se te proporciona

### 3. Crear una Plantilla de Email

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura la plantilla con estos campos:
   - **To Email**: Tu email donde quieres recibir los mensajes (ej: `contacto@gamebuddy.com`)
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: `Nuevo mensaje de contacto desde GameBuddy`
   - **Content** (cuerpo del email):
     ```
     Has recibido un nuevo mensaje de contacto:
     
     Nombre: {{from_name}}
     Email: {{from_email}}
     
     Mensaje:
     {{message}}
     ```
4. Guarda la plantilla y **copia el Template ID**

### 4. Obtener tu Public Key

1. Ve a **"Account"** → **"General"**
2. Encuentra tu **Public Key** (también llamado API Key)
3. **Copia la Public Key**

### 5. Configurar el Código

1. Abre el archivo `src/components/Landing/ContactForm.jsx`
2. Busca estas líneas (alrededor de la línea 20-22):
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```
3. Reemplaza los valores:
   - `YOUR_SERVICE_ID` → Tu Service ID del paso 2
   - `YOUR_TEMPLATE_ID` → Tu Template ID del paso 3
   - `YOUR_PUBLIC_KEY` → Tu Public Key del paso 4

### Ejemplo de configuración:

```javascript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'abcdefghijklmnop';
```

## Límites del Plan Gratuito

- **200 emails por mes**
- Suficiente para la mayoría de proyectos pequeños/medianos

## Seguridad

⚠️ **IMPORTANTE**: Las credenciales de EmailJS están en el código del frontend. Esto es seguro porque:
- Solo puedes enviar emails a través de las plantillas que configuraste
- No puedes acceder a la cuenta de email del usuario
- EmailJS tiene protección contra spam

Sin embargo, si necesitas más seguridad, considera usar un backend propio.

## Prueba el Formulario

1. Inicia tu aplicación: `npm run dev`
2. Ve a la sección de contacto en la landing
3. Llena el formulario y envía un mensaje
4. Revisa tu email - deberías recibir el mensaje

## Solución de Problemas

### Error: "Por favor configura tus credenciales"
- Asegúrate de haber reemplazado todos los valores `YOUR_*` en `ContactForm.jsx`

### No recibo los emails
- Verifica que el email de destino en la plantilla sea correcto
- Revisa la carpeta de spam
- Verifica que el servicio de email esté correctamente conectado en EmailJS

### Error de CORS
- EmailJS maneja esto automáticamente, pero si persiste, verifica que estés usando la última versión de `@emailjs/browser`

## Alternativas

Si prefieres no usar EmailJS, puedes:
1. **Backend propio**: Node.js con Nodemailer
2. **Formspree**: Similar a EmailJS
3. **Netlify Forms**: Si despliegas en Netlify
4. **SendGrid/Mailgun**: Servicios profesionales (requieren backend)

