# Minimalist Portfolio — Guías del proyecto

Portafolio web de una sola página construido con **Astro 4 + TypeScript + Tailwind CSS v3**, desplegado en Netlify. Es una aplicación de datos guiada por archivos JSON de currículum (formato JSON Resume).

## Stack

- **Framework:** Astro 4 (salida estática) + TypeScript (`astro.config.mjs`)
- **Estilos:** Tailwind CSS v3 (`tailwind.config.js`) + variables CSS en `public/styles/global.css`
- **Datos:** `src/cv.json` (español) y `src/cv-en.json` (inglés). Alias `@cv` → `src/cv.json` en `tsconfig.json`.
- **Iconos:** SVGs inline en `src/icons/*.astro`.
- **Deploy:** Netlify (archivos estáticos en `dist/`).

## Comandos

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Verificación de tipos + build  →  astro check && astro build
npm run preview  # Previsualizar el build de producción
```

## Arquitectura

```
src/
├── pages/index.astro              # Única página; scripts inline (i18n ES/EN, tema, modal)
├── layouts/Layout.astro           # Shell HTML, SEO, Open Graph, structured data, window.__LH
├── components/
│   ├── Section.astro              # Envoltorio de sección con animación de aparición
│   └── sections/                  # Hero, Projects, Experience, About, Contact, Footer
├── lib/shared.js                  # Helpers getRole/roleClass/techColor/formatDuration
├── icons/                         # Iconos SVG inline (GitHub, LinkedIn, Twitch, etc.)
└── cv.json / cv-en.json           # Contenido del portafolio en español e inglés
public/
├── styles/global.css              # Variables de tema (dark/light), estilos de impresión
├── scripts/global.js              # Comportamiento del cliente (scroll, menú, tema)
└── gallery/                       # Imágenes de proyectos
```

## Convenciones y reglas críticas

1. **Paridad ES/EN:** Todo contenido nuevo (proyectos, experiencia, skills) debe agregarse en `src/cv.json` y su traducción en `src/cv-en.json`. Nunca editar solo un idioma.

2. **`CV_EN` inline en `src/pages/index.astro`:** El objeto `const CV_EN = {...}` es una copia embebida de `src/cv-en.json` y alimenta el toggle de inglés del lado cliente. **Cuando cambie `src/cv-en.json`, hay que regenerar esa línea** con `JSON.stringify({ projects: <proyectos de cv-en.json> })` (script de referencia: `scripts/make-cv-inline.mjs`). Si no se regenera, el modo inglés mostrará datos desactualizados.

3. **`window.__LH` en `Layout.astro`:** Duplica los helpers de `src/lib/shared.js` (`getRole`, `roleClass`, `techColor`, `formatDuration`). Al editar `shared.js`, sincronizar también la copia inline de `Layout.astro`.

4. **Roles y etiquetas:** La etiqueta de cada tarjeta de proyecto se deriva de las palabras clave de su `description` mediante `getRole()` en `src/lib/shared.js`. **El orden de las comprobaciones importa:** se evalúa de arriba hacia abajo y el primer match gana. Por ejemplo, una descripción con "turnos" (Agenda) y "juego" a la vez puede clasificarse mal. Al redactar descripciones en español, evitar palabras que disparen categorías no deseadas.

5. **i18n:** Los textos traducibles usan atributos `data-i18n` + el diccionario `window.__TR` en `index.astro`; los proyectos en inglés se intercambian vía `window.__CV_EN` y el evento `langchange`. Al añadir textos nuevos, añadir también su traducción en el bloque `__TR.es` y `__TR.en` de `index.astro`.

6. **Tema claro/oscuro e impresión:** Los colores se controlan con variables CSS en `public/styles/global.css` (`--theme-color`, `--bg-*`, `--text-*`, `--border-*`). Hay overrides para modo claro (`[data-theme="light"]`) y estilos de impresión (`@media print`). Respetar ese sistema en vez de colores hardcodeados.

7. **Verificación previa a commit:** Ejecutar `npm run build` y validar los JSONs (`node -e "require('./src/cv.json')"`) antes de terminar. Commits atómicos con mensajes descriptivos en español.

## Equipo de agentes

Estos subagentes están definidos en `.opencode/agent/` y se invocan con `/agents` o vía el menú de agentes de opencode:

- **ui-ux** — Revisión visual y de experiencia de usuario (consistencia, responsive, accesibilidad, animaciones, tema claro/oscuro, impresión).
- **generador** — Generación de código y contenido siguiendo las convenciones del proyecto (secciones, componentes, datos ES/EN, i18n, regeneración del `CV_EN` inline).
- **refactorizacion** — Refactorización con criterios de salida claros (eliminar duplicación, mejorar rendimiento y mantenibilidad sin cambiar comportamiento).
- **qa** — Aseguramiento de calidad (validación de datos, paridad ES/EN, build, etiquetas/roles, enlaces, accesibilidad, rendimiento).
- **producto** — Criterio de producto (requerimientos, alcance, prioridades, criterios de aceptación, decisión de qué construir o cambiar).

Cada agente debe leer los archivos antes de editar y respetar las reglas anteriores.