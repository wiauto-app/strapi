# WiAuto Content (Strapi)

CMS headless del proyecto WiAuto. Gestiona homepage, noticias, comentarios, políticas legales y el resto del contenido consumido por el frontend Next.js.

- **Panel de administración:** `http://localhost:1337/admin`
- **API REST:** `http://localhost:1337/api`
- **Base de datos:** SQLite (por defecto)

## Requisitos

- Node.js 20+
- npm, yarn o pnpm

## Configuración inicial

1. Instala dependencias:

```bash
npm install
```

2. Crea el archivo de entorno a partir del ejemplo:

```bash
cp .env.example .env
```

3. Genera valores seguros para las claves de `.env` (`APP_KEYS`, `JWT_SECRET`, etc.) antes de usar el proyecto en un entorno compartido.

## Base de datos (SQLite)

Strapi lee la base de datos desde **`.tmp/data.db`** (ver `config/database.ts`). En la raíz del proyecto se guarda una copia de respaldo o de referencia en **`data.db`**.

### Usar tus datos existentes

**Detén Strapi** antes de copiar el archivo (si está en ejecución, la copia puede quedar corrupta).

Desde la raíz de este proyecto (`strapi/`):

```bash
mkdir -p .tmp
cp data.db .tmp/data.db
```

En macOS o Linux también puedes usar:

```bash
npm run db:sync
```

Ese script crea `.tmp` si no existe y copia `data.db` → `.tmp/data.db`.

> **Nota:** La carpeta `.tmp` está en `.gitignore`. El archivo `data.db` de la raíz sí puede versionarse si el equipo lo acuerda; cada desarrollador debe ejecutar la copia local tras clonar o actualizar `data.db`.

### Base de datos vacía

Si no tienes `data.db` en la raíz, al arrancar Strapi se creará `.tmp/data.db` automáticamente. Tendrás que completar el registro del primer usuario admin en el panel.

## Comandos

### Desarrollo (recomendado)

Inicia Strapi con recarga automática del código y del panel admin:

```bash
npm run develop
```

### Producción local

Compila el panel y arranca sin recarga:

```bash
npm run build
npm run start
```

### Sincronizar base de datos

Copia `data.db` de la raíz a `.tmp/data.db`:

```bash
npm run db:sync
```

## Integración con el frontend

El proyecto Next.js (`wiauto-frontend`) consume esta API. En su `.env`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_TOKEN=<token_de_api_con_permisos>
```

Crea el token en **Settings → API Tokens** y asigna permisos a los content-types que expongas (`noticia`, `comentario`, `homepage`, etc.).

## Permisos de la API

Para desarrollo, revisa en el admin:

- **Settings → Users & Permissions → Roles → Public** (lectura pública si aplica)
- **Settings → API Tokens** (token para el servidor Next.js)

Los comentarios y noticias con **Draft & Publish** solo aparecen en la API cuando están **publicados**.

## Estructura relevante

| Ruta | Descripción |
|------|-------------|
| `src/api/` | Content-types y controladores |
| `src/components/` | Componentes reutilizables (SEO, home, etc.) |
| `config/database.ts` | Configuración de SQLite / otras BD |
| `data.db` | Copia de referencia de la base de datos |
| `.tmp/data.db` | Archivo que usa Strapi en tiempo de ejecución |

## Despliegue

Opciones oficiales: [documentación de despliegue de Strapi](https://docs.strapi.io/dev-docs/deployment). Para producción conviene migrar a PostgreSQL o MySQL en lugar de SQLite.

## Documentación

- [Documentación de Strapi](https://docs.strapi.io)
- [CLI de Strapi](https://docs.strapi.io/dev-docs/cli)
