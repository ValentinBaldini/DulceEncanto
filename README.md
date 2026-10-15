# Dulce Encanto

Landing page de presentación para Dulce Encanto, emprendimiento de brigadeiros brasileños, chipá congelado y tortas en Mendoza.

## Desarrollo

```bash
npm install
npm run dev
```

## Verificación

```bash
npm run lint
npm run build
```

La interfaz está construida con React, Vite, Tailwind CSS y Lucide Icons. Los enlaces principales dirigen al WhatsApp y al Instagram oficiales de la marca.

## Páginas

- `/`: presentación de Dulce Encanto.
- `/productos`: catálogo filtrable de brigadeiros, chipá congelado y tortas. Las cajas Premium y Tradicional incluyen selector de cantidad; las demás categorías permiten consultar por WhatsApp.

La navegación usa React Router. El build prerenderiza el contenido de Inicio y Productos, genera `dist/productos.html` con metadatos propios y `vercel.json` activa URLs limpias para que el acceso directo a `/productos` responda correctamente.

Los archivos `public/robots.txt` y `public/sitemap.xml` declaran las rutas públicas para buscadores. Si cambia el dominio de producción, también deben actualizarse `seo.config.js`, ambos archivos y los datos estructurados de `index.html`.

Las imágenes servidas por la interfaz están en `public/images/optimized` en formato WebP y usan variantes responsivas. Los JPEG originales se conservan como fuente y para las imágenes sociales declaradas en los metadatos.
