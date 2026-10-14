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

La navegación usa React Router. Al desplegar el sitio, el hosting debe redirigir las rutas desconocidas hacia `index.html` para permitir el acceso directo a `/productos`.
