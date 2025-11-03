# Cabeceras de seguridad y rendimiento (ejemplos)

## Nginx
```
# Seguridad
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
# HSTS (activar solo en HTTPS estable)
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

# Compresión
gzip on;
gzip_types text/css application/javascript application/json image/svg+xml;

# Cache estáticos
location ~* \\.(?:css|js|png|jpg|jpeg|gif|webp|ico|svg)$ {
    expires 30d;
    add_header Cache-Control "public, max-age=2592000, immutable";
}

# HTML sin cache larga
location = /index.html {
    add_header Cache-Control "no-cache";
}
```

## Apache (.htaccess)
```
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "DENY"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/css application/javascript application/json image/svg+xml
</IfModule>

# Cache
<FilesMatch "\\.(css|js|png|jpg|jpeg|gif|webp|ico|svg)$">
  Header set Cache-Control "public, max-age=2592000, immutable"
</FilesMatch>

<Files "index.html">
  Header set Cache-Control "no-cache"
</Files>
```

## Netlify (_headers)
Crear un archivo `_headers` en la raíz del deploy con:
```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()

/img/*
  Cache-Control: public, max-age=2592000, immutable

/*.css
  Cache-Control: public, max-age=2592000, immutable

/*.js
  Cache-Control: public, max-age=2592000, immutable

/index.html
  Cache-Control: no-cache
```

