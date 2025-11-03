# SOSING S.A.S. - Sitio Web Empresarial

Sitio web corporativo para **Soluciones Sostenibles de Ingeniería S.A.S.**, especializada en Ingeniería Ambiental, Civil y Saneamiento Básico.

## 📋 Estructura del Proyecto

```
jair/
├── index.html              # Página principal
├── ambiental.html          # Servicios de Ingeniería Ambiental
├── hidrico.html            # Servicios de Agua Potable y Saneamiento
├── civil.html              # Servicios de Ingeniería Civil y Consultoría
├── style.css               # Estilos personalizados
├── main.js                 # Scripts de navegación y formulario
├── robots.txt              # Configuración para crawlers
├── sitemap.xml             # Mapa del sitio
├── DEPLOY_HEADERS.md       # Ejemplos de cabeceras HTTP
├── img/                    # Imágenes optimizadas
│   ├── logo.png            # Logo principal
│   ├── logo.webp           # Logo WebP (1x)
│   ├── logo@2x.png          # Logo retina (2x)
│   ├── logo@2x.webp        # Logo WebP retina (2x)
│   ├── hero-bg.jpg         # Imagen de fondo hero
│   ├── hero-bg.webp        # Hero WebP
│   ├── team.jpg            # Equipo
│   ├── team.webp           # Equipo WebP
│   └── favicon.ico          # Favicon
└── docs/                   # Portafolios PDF (crear carpeta)
    ├── ambiental.pdf       # Portafolio Ingeniería Ambiental
    ├── hidrico.pdf          # Portafolio Agua Potable y Saneamiento
    └── civil.pdf            # Portafolio Ingeniería Civil
```

## 🚀 Instrucciones de Despliegue

### 1. Preparar Archivos

**Antes de publicar, reemplaza los placeholders:**

#### En `index.html`:
- `<link rel="canonical" href="https://YOUR-DOMAIN/">` → Tu dominio completo
- `og:image` y `twitter:image` → URLs absolutas (o relativas si usas CDN)
- `Organization.url` y `sameAs` → URLs reales de redes sociales

#### En `robots.txt`:
- `Sitemap: https://YOUR-DOMAIN/sitemap.xml` → Tu dominio

#### En `sitemap.xml`:
- Reemplaza todos los `https://YOUR-DOMAIN/` por tu dominio real

#### Archivos necesarios:
- ✅ Crea la carpeta `docs/` y sube los PDFs de portafolios:
  - `ambiental.pdf`
  - `hidrico.pdf`
  - `civil.pdf`

### 2. Hosting Recomendado

**Opción A: Netlify (Recomendado para sitios estáticos)**
1. Sube la carpeta completa a Netlify
2. Configura dominio personalizado
3. Crea archivo `_headers` (ver `DEPLOY_HEADERS.md`)
4. Activa HTTPS automático

**Opción B: GitHub Pages / Vercel**
1. Sube a repositorio Git
2. Conecta con GitHub Pages o Vercel
3. Configura dominio personalizado

**Opción C: Servidor propio (Nginx/Apache)**
1. Sube archivos vía FTP/SFTP
2. Configura virtual host
3. Aplica configuraciones de `DEPLOY_HEADERS.md`

### 3. Configurar Formspree

El formulario ya está conectado a `https://formspree.io/f/mpwogdra`.
- Verifica que el endpoint funcione haciendo un envío de prueba
- Opcional: personaliza el mensaje de éxito en `main.js`

### 4. Verificar Funcionalidad

- ✅ Formulario de contacto envía correos
- ✅ Enlaces a WhatsApp funcionan (`573116608217`)
- ✅ Botones "Descargar Portafolio" descargan PDFs
- ✅ Mapa de Google Maps se muestra correctamente
- ✅ Imágenes se cargan (WebP con fallback)

## ✅ Checklist de Publicación

### Pre-Despliegue

- [ ] Reemplazar `YOUR-DOMAIN` en `index.html`, `robots.txt`, `sitemap.xml`
- [ ] Subir PDFs a carpeta `docs/`
- [ ] Actualizar URLs de redes sociales en `index.html` (footer y JSON-LD)
- [ ] Verificar que todas las imágenes existan en `img/`
- [ ] Probar formulario de contacto (enviar prueba a Formspree)
- [ ] Revisar textos y ortografía

### Despliegue

- [ ] Subir todos los archivos al servidor
- [ ] Configurar dominio personalizado
- [ ] Activar HTTPS (certificado SSL)
- [ ] Configurar redirección HTTP → HTTPS (301)
- [ ] Aplicar cabeceras de seguridad (ver `DEPLOY_HEADERS.md`)
- [ ] Configurar compresión Gzip/Brotli

### Post-Despliegue

- [ ] Verificar que el sitio carga correctamente
- [ ] Probar formulario en producción
- [ ] Validar Open Graph con [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Validar Twitter Cards con [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Enviar `sitemap.xml` a Google Search Console
- [ ] Enviar `sitemap.xml` a Bing Webmaster Tools
- [ ] Ejecutar Lighthouse (Chrome DevTools) y corregir issues críticos
- [ ] Probar en dispositivos móviles reales
- [ ] Verificar accesibilidad básica (navegación con teclado)

### SEO y Analytics (Opcional pero Recomendado)

- [ ] Instalar Google Analytics o Matomo
- [ ] Configurar eventos de conversión (envió de formulario)
- [ ] Crear página 404 personalizada
- [ ] Configurar uptime monitoring (UptimeRobot, StatusCake)

## 🔧 Mantenimiento

### Actualizar Contenido

- **Imágenes**: Reemplaza archivos en `img/` y regenera WebP si es necesario
- **Textos**: Edita directamente en HTML
- **Portafolios**: Reemplaza PDFs en `docs/` manteniendo nombres iguales

### Optimización Periódica

- Revisar Lighthouse cada 3-6 meses
- Actualizar dependencias de CDN (Bootstrap, Bootstrap Icons) si hay nuevas versiones
- Monitorear velocidad de carga (PageSpeed Insights)
- Verificar enlaces rotos periódicamente

## 📞 Contacto y Soporte

**SOSING S.A.S.**
- 📍 Cra. 9 #13B-35 Local 3, Barrio Cañahuate, Valledupar
- 📞 (095) 5901353 - 311 660 82 17
- 📧 ambiental@sosing-sas.com
- 💬 WhatsApp: [573116608217](https://wa.me/573116608217)

## 🛠️ Tecnologías Utilizadas

- **HTML5** con semántica moderna
- **CSS3** con variables CSS y diseño responsive
- **Bootstrap 5.3.3** (CDN)
- **Bootstrap Icons 1.11.3** (CDN)
- **JavaScript Vanilla** (ES6+)
- **Formspree** para formularios
- **Google Maps** embebido
- **WebP** para optimización de imágenes

## 📝 Notas Técnicas

- **Accesibilidad**: WCAG 2.1 nivel AA básico
- **Rendimiento**: Optimizado para Core Web Vitals
- **SEO**: Metadatos completos (OG, Twitter, Schema.org)
- **Seguridad**: Cabeceras recomendadas en `DEPLOY_HEADERS.md`
- **Compatibilidad**: Navegadores modernos (últimas 2 versiones)

---

**Última actualización**: 2024
**Versión**: 1.0.0

