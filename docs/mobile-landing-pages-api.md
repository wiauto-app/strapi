# WiAuto CMS (Strapi) — API de Landing Pages (Mobile)

Documentación **solo** de los endpoints de contenido de landing pages del CMS Strapi.  
No incluye noticias, prensa, FAQs globales, políticas, comentarios ni APIs de Nest (vehículos, auth, billing).

**Stack:** Strapi 5 · REST · prefijo `/api`  
**i18n:** no activo en estos content-types (un solo idioma).  
**Draft & Publish:** sí (solo contenido publicado aparece en las respuestas públicas).

---

## 1. Autenticación y base URL

| Variable | Descripción |
|---|---|
| `STRAPI_URL` | Host del CMS, ej. `https://strapi.wiauto.es` (sin `/api`) |
| `STRAPI_TOKEN` | API Token de Strapi (Bearer) |

Todas las peticiones usan:

```http
GET {STRAPI_URL}/api/{recurso}?populate=...
Authorization: Bearer {STRAPI_TOKEN}
Content-Type: application/json
```

Ejemplo:

```bash
curl -s \
  -H "Authorization: Bearer $STRAPI_TOKEN" \
  "$STRAPI_URL/api/financiacion?populate[hero][populate][imagen]=true"
```

> Sin token (o sin permisos en el role Public / token) Strapi responde `401` / `403`.

---

## 2. Forma general de respuesta

### Single type (todas las landings de esta doc)

```ts
interface StrapiSingleResponse<T> {
  data: T | null;
}
```

Cada entrada incluye metadatos:

```ts
interface StrapiEntryMeta {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}
```

### Media (imágenes / iconos)

```ts
interface StrapiMedia {
  id: number;
  documentId?: string;
  url: string; // puede ser relativa o absoluta (CDN/MinIO)
  alternativeText?: string | null;
  width?: number;
  height?: number;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  } | null;
}
```

**Regla de URL de media:** si `url` empieza por `/`, anteponer el host del CMS o el CDN configurado (ej. `https://media.wiauto.es`). Preferir `formats.medium.url` o `formats.small.url` en listas; `url` original para hero.

### Rich text (Blocks de Strapi)

Algunos campos (`descripcion` de process tabs, `respuesta` de FAQs embebidas, labels de app stores, etc.) llegan como **Blocks** (array JSON de nodos), no como HTML.

```ts
/** Estructura simplificada; el payload real es compatible con Strapi Blocks */
type BlocksContent = Array<{
  type: string;
  children?: Array<{
    type: string;
    text?: string;
    bold?: boolean;
    italic?: boolean;
  }>;
}>;
```

### Icons

En features suele venir:
- `icon`: media opcional
- `iconName`: string tipo `LuGlobe`, `FaCheck`, etc. (prioridad de UI si no hay imagen)

---

## 3. Componentes compartidos (reutilizados en varias landings)

```ts
interface StrapiLink {
  id: number;
  label: string;
  url: string;
  destacado: boolean | null;
  imagen: StrapiMedia | null;
}

interface StrapiIconFeature {
  id: number;
  label: string;
  descripcion: string | null;
  icon?: StrapiMedia | null;
  iconName: string | null;
}

interface StrapiCard {
  id: number;
  titulo: string | null;
  descripcion: string | null;
  boton: StrapiLink | null;
  imagen: StrapiMedia | null;
  colorFondo: string | null;
  colorTexto: string | null;
  iconName: string | null;
}

interface StrapiHeader {
  id: number;
  titulo: string | null;
  descripcion: string | null;
}

interface StrapiHero {
  id: number;
  titulo: string | null;
  descripcion: string | null;
  acciones: StrapiLink[] | null;
  imagen: StrapiMedia | null;
  caracteristicas: StrapiIconFeature[] | null;
  card: StrapiCard | null;
}

interface StrapiEstadistica {
  id: number;
  estadistica: string | null;
  descripcion: string | null;
}

interface StrapiSeo {
  id: number;
  metaTitle: string | null;
  metaDescription: string | null;
  keywords: string | null;
  canonicalURL: string | null;
  shareImage: StrapiMedia | null;
  noIndex: boolean | null;
}

interface StrapiImage {
  id: number;
  alt: string | null;
  image: StrapiMedia | null;
  order: number;
  active: boolean | null;
}

interface StrapiUser {
  id: number;
  nombre: string;
  imagen: StrapiMedia | null;
  descripcion: string | null;
}

interface StrapiComment {
  id: number;
  usuario: StrapiUser | null;
  rating: number; // 0–5
  comentario: string;
}

interface StrapiDesplegable {
  id: number;
  titulo: string;
  descripcion: BlocksContent | null;
  imagen: StrapiMedia[] | null;
  orientacion: "vertical" | "horizontal" | null;
}

interface StrapiFeaturesSection {
  id: number;
  title: string | null;
  description: string | null;
  feature: StrapiIconFeature[] | null;
}

interface StrapiMobileAdvertisment {
  id: number;
  header: StrapiHeader | null;
  imagen: StrapiMedia | null;
  apple: StrapiLink | null;
  google: StrapiLink | null;
  caracteristicas: StrapiIconFeature[] | null;
}
```

---

## 4. Endpoints de landing (índice)

| Landing | Método | Path | Tipo Strapi |
|---|---|---|---|
| Home | `GET` | `/api/homepage` | Single |
| Financiación | `GET` | `/api/financiacion` | Single |
| Seguros | `GET` | `/api/seguro` | Single |
| Soporte | `GET` | `/api/soporte` | Single |
| Simulador | `GET` | `/api/simulador` | Single |
| Planes (contenido visual) | `GET` | `/api/pagina-plan` | Single |
| Vender vehículo | `GET` | `/api/vender-vehiculo` | Single |
| Sobre nosotros | `GET` | `/api/sobre-nosotro` | Single |
| Footer (global) | `GET` | `/api/footer` | Single |

> **Nota:** el catálogo comercial de precios/planes de suscripción **no** va por Strapi en producción web; usa Nest. `pagina-plan` es solo copy/UI de marketing.

---

## 5. Home — `GET /api/homepage`

### Populate recomendado

```
/api/homepage
?populate[homeSeo][populate][shareImage]=true
&populate[homeHero][populate][caracteristicas][populate][icon]=true
&populate[homeHero][populate][backgroundImage]=true
&populate[homeHero][populate][heroImages][populate][image]=true
&populate[homeHero][populate][actionLinks]=true
&populate[homeAppAdvertisment][populate][appMockup]=true
&populate[homeFeatures][populate][feature][populate][icon]=true
&populate[homeNewsletter]=true
&populate[processSection][populate][tabs][populate][image]=true
&populate[herramientas][populate][imagen]=true
&populate[herramientas][populate][boton]=true
&populate[bajas_emisiones][populate][header]=true
&populate[bajas_emisiones][populate][imagen]=true
&populate[bajas_emisiones][populate][links][populate][imagen]=true
&populate[bajas_emisiones][populate][links][populate][boton]=true
```

### Interface

```ts
interface HomepageData {
  homeSeo: StrapiSeo | null;
  homeHero: {
    id: number;
    title: string | null;
    subtitle: string | null;
    descarga_app: string | null;
    backgroundImage: StrapiMedia | null;
    heroImages: StrapiImage[] | null;
    actionLinks: StrapiLink[] | null;
    caracteristicas: StrapiIconFeature[] | null;
  } | null;
  herramientas: StrapiCard[] | null;
  homeAppAdvertisment: {
    id: number;
    appMockup: StrapiMedia | null;
    title: string | null;
    phrase: string | null;
    description: string | null;
    googleLabel: BlocksContent | null;
    appleLabel: BlocksContent | null;
  } | null;
  homeFeatures: StrapiFeaturesSection | null;
  homeNewsletter: {
    id: number;
    subtitle: string | null;
    title: string | null;
    description: string | null;
  } | null;
  processSection: {
    id: number;
    titulo: BlocksContent | null;
    tabs: Array<{
      id: number;
      tab: string | null;
      titulo: string | null;
      descripcion: BlocksContent | null;
      image: StrapiMedia | null;
    }> | null;
  } | null;
  bajas_emisiones: {
    id: number;
    header: StrapiHeader | null;
    imagen: StrapiMedia | null;
    links: StrapiCard[] | null;
  } | null;
}

type HomepageResponse = StrapiSingleResponse<HomepageData & StrapiEntryMeta>;
```

---

## 6. Financiación — `GET /api/financiacion`

### Populate (objeto `qs`)

```json
{
  "populate": {
    "hero": {
      "populate": {
        "acciones": { "populate": { "imagen": true } },
        "imagen": true,
        "caracteristicas": { "populate": { "icon": true } },
        "card": {
          "populate": {
            "boton": { "populate": { "imagen": true } },
            "imagen": true
          }
        }
      }
    },
    "ventajas": {
      "populate": {
        "header": true,
        "caracteristicas": { "populate": { "icon": true } }
      }
    },
    "pasos": {
      "populate": {
        "header": true,
        "steps": { "populate": { "icon": true } }
      }
    },
    "soporte": {
      "populate": {
        "acciones": { "populate": { "imagen": true } },
        "imagen": true,
        "caracteristicas": { "populate": { "icon": true } },
        "card": {
          "populate": {
            "boton": { "populate": { "imagen": true } },
            "imagen": true
          }
        }
      }
    },
    "estadisticas": true
  }
}
```

### Interface

```ts
interface FinanciacionAdvantages {
  id: number;
  header: StrapiHeader | null;
  caracteristicas: StrapiIconFeature[] | null;
}

interface FinanciacionSteps {
  id: number;
  header: StrapiHeader | null;
  steps: StrapiIconFeature[] | null;
}

interface FinanciacionPageData extends StrapiEntryMeta {
  hero: StrapiHero | null;
  ventajas: FinanciacionAdvantages | null;
  pasos: FinanciacionSteps | null;
  soporte: StrapiHero | null;
  estadisticas: StrapiEstadistica[] | null;
}

type FinanciacionResponse = StrapiSingleResponse<FinanciacionPageData>;
```

---

## 7. Seguros — `GET /api/seguro`

> Path del recurso: **`seguro`** (singular), no `seguros`.

### Populate

```json
{
  "populate": {
    "hero": { "populate": { "acciones": { "populate": { "imagen": true } }, "imagen": true, "caracteristicas": { "populate": { "icon": true } }, "card": { "populate": { "boton": { "populate": { "imagen": true } }, "imagen": true } } } },
    "caracteristicas": { "populate": { "feature": { "populate": { "icon": true } } } },
    "seguridad": { "populate": { "acciones": { "populate": { "imagen": true } }, "imagen": true, "caracteristicas": { "populate": { "icon": true } }, "card": { "populate": { "boton": { "populate": { "imagen": true } }, "imagen": true } } } },
    "incluido": { "populate": { "feature": { "populate": { "icon": true } } } },
    "aliados": { "populate": { "feature": { "populate": { "icon": true } } } }
  }
}
```

### Interface

```ts
interface SegurosPageData extends StrapiEntryMeta {
  hero: StrapiHero | null;
  caracteristicas: StrapiFeaturesSection | null;
  seguridad: StrapiHero | null;
  incluido: StrapiFeaturesSection | null;
  aliados: StrapiFeaturesSection | null;
}

type SegurosResponse = StrapiSingleResponse<SegurosPageData>;
```

---

## 8. Soporte — `GET /api/soporte`

### Populate

```json
{
  "populate": {
    "hero": {
      "populate": {
        "acciones": { "populate": { "imagen": true } },
        "imagen": true,
        "caracteristicas": { "populate": { "icon": true } },
        "card": {
          "populate": {
            "boton": { "populate": { "imagen": true } },
            "imagen": true
          }
        }
      }
    },
    "caracteristicas": { "populate": { "icon": true } },
    "canales": {
      "populate": {
        "header": true,
        "channel": {
          "populate": {
            "boton": { "populate": { "imagen": true } },
            "imagen": true
          }
        }
      }
    },
    "preguntas": {
      "populate": {
        "header": true,
        "preguntas": true
      }
    }
  }
}
```

### Interface

```ts
interface SoportePreguntaItem {
  id: number;
  pregunta: string | null;
  respuesta: BlocksContent | null;
}

interface SoporteCanales {
  id: number;
  header: StrapiHeader | null;
  channel: StrapiCard[] | null;
}

interface SoportePreguntas {
  id: number;
  header: StrapiHeader | null;
  preguntas: SoportePreguntaItem[] | null;
}

interface SoportePageData extends StrapiEntryMeta {
  hero: StrapiHero | null;
  caracteristicas: StrapiIconFeature[] | null;
  canales: SoporteCanales | null;
  preguntas: SoportePreguntas | null;
}

type SoporteResponse = StrapiSingleResponse<SoportePageData>;
```

---

## 9. Simulador — `GET /api/simulador`

### Populate

```json
{
  "populate": {
    "header": true,
    "financiar": {
      "populate": {
        "razones": { "populate": { "icon": true } }
      }
    },
    "facilidades": {
      "populate": {
        "razones": { "populate": { "icon": true } }
      }
    },
    "comentarios": {
      "populate": {
        "comentario": {
          "populate": {
            "usuario": { "populate": { "imagen": true } }
          }
        }
      }
    }
  }
}
```

### Interface

```ts
interface SimuladorReasons {
  id: number;
  titulo: string;
  razones: StrapiIconFeature[] | null;
}

interface SimuladorComments {
  id: number;
  titulo: string;
  comentario: StrapiComment[] | null;
}

interface SimuladorPageData extends StrapiEntryMeta {
  header: StrapiHeader | null;
  financiar: SimuladorReasons | null;
  facilidades: SimuladorReasons | null;
  comentarios: SimuladorComments | null;
}

type SimuladorResponse = StrapiSingleResponse<SimuladorPageData>;
```

---

## 10. Planes (landing visual) — `GET /api/pagina-plan`

### Populate

```json
{
  "populate": {
    "hero": {
      "populate": {
        "acciones": true,
        "imagen": true
      }
    },
    "estadisticas": true,
    "caracteristicas": {
      "populate": {
        "header": true,
        "caracteristicas": { "populate": { "icon": true } }
      }
    },
    "tech_add": {
      "populate": {
        "header": true,
        "caracteristicas": { "populate": { "icon": true } },
        "imagen": true
      }
    },
    "mobile_advertisment": {
      "populate": {
        "header": true,
        "imagen": true,
        "apple": true,
        "google": true,
        "caracteristicas": { "populate": { "icon": true } }
      }
    }
  }
}
```

### Interface

```ts
interface PlanesCaracteristicas {
  id: number;
  header: StrapiHeader | null;
  caracteristicas: StrapiIconFeature[] | null;
}

interface PlanesTechAdd {
  id: number;
  header: StrapiHeader | null;
  caracteristicas: StrapiIconFeature[] | null;
  imagen: StrapiMedia | null;
}

interface PlanesPageData extends StrapiEntryMeta {
  hero: StrapiHero | null;
  estadisticas: StrapiEstadistica[] | null;
  caracteristicas: PlanesCaracteristicas | null;
  tech_add: PlanesTechAdd | null;
  mobile_advertisment: StrapiMobileAdvertisment | null;
}

type PlanesResponse = StrapiSingleResponse<PlanesPageData>;
```

---

## 11. Vender vehículo — `GET /api/vender-vehiculo`

### Populate

```json
{
  "populate": {
    "imagen": true,
    "profesional": { "populate": { "boton": true, "imagen": true } },
    "particular": { "populate": { "boton": true, "imagen": true } },
    "marketingCard": { "populate": { "boton": true, "imagen": true } },
    "ventajas": {
      "populate": {
        "ventaja": { "populate": { "boton": true, "imagen": true } }
      }
    },
    "comparacion": {
      "populate": {
        "planes": { "populate": { "caracteristicas": true } }
      }
    },
    "consejos": {
      "populate": {
        "consejo": { "populate": { "boton": true, "imagen": true } }
      }
    },
    "preguntas": {
      "populate": {
        "pregunta": { "populate": { "imagen": true } }
      }
    }
  }
}
```

### Interface

```ts
interface VenderFeature {
  id: number;
  titulo: string | null;
  incluido: boolean | null;
}

interface VenderPlan {
  id: number;
  nombre: string | null;
  caracteristicas: VenderFeature[] | null;
}

interface VenderVentajas {
  id: number;
  titulo: string | null;
  descripcion: string | null;
  ventaja: StrapiCard[] | null;
}

interface VenderComparacion {
  id: number;
  titulo: string | null;
  planes: VenderPlan[] | null;
}

interface VenderConsejos {
  id: number;
  titulo: string | null;
  descripcion: string | null;
  consejo: StrapiCard[] | null;
}

interface VenderFaqs {
  id: number;
  titulo: string | null;
  pregunta: StrapiDesplegable[] | null;
}

interface VenderVehiculoPageData extends StrapiEntryMeta {
  titulo: string;
  descripcion: string;
  imagen: StrapiMedia[];
  profesional: StrapiCard;
  particular: StrapiCard;
  marketingCard: StrapiCard;
  ventajas: VenderVentajas;
  comparacion: VenderComparacion;
  consejos: VenderConsejos;
  preguntas: VenderFaqs;
}

type VenderVehiculoResponse = StrapiSingleResponse<VenderVehiculoPageData>;
```

---

## 12. Sobre nosotros — `GET /api/sobre-nosotro`

> Path del recurso: **`sobre-nosotro`** (así está en Strapi; no `sobre-nosotros`).

### Populate

```
/api/sobre-nosotro
?populate[caracteristicas][populate]=icon
&populate[imagen]=true
&populate[businessCard][populate][caracteristicas][populate]=icon
&populate[equipo][populate][persona][populate]=imagen
```

### Interface

```ts
interface AboutFeature {
  id: number;
  label: string;
  descripcion: string;
  icon?: StrapiMedia | null;
  iconName?: string | null;
}

interface AboutBusinessCard {
  id: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  caracteristicas?: AboutFeature[] | null;
}

interface AboutPersona {
  id: number;
  nombre: string;
  descripcion: string;
  imagen?: StrapiMedia | null;
}

interface AboutTeam {
  id: number;
  titulo: string;
  subtitulo: string;
  persona?: AboutPersona[] | null;
}

interface AboutUsPageData extends StrapiEntryMeta {
  titulo: string;
  caracteristicas?: AboutFeature[] | null;
  imagen?: StrapiMedia | null;
  businessCard?: AboutBusinessCard | null;
  equipo?: AboutTeam | null;
}

type AboutUsResponse = StrapiSingleResponse<AboutUsPageData>;
```

---

## 13. Footer — `GET /api/footer`

Usado como chrome global de landings.

### Populate

```
/api/footer
?populate[logo]=true
&populate[redesSociales][populate][imagen]=true
&populate[sections][populate][links][populate][imagen]=true
```

### Interface

```ts
interface FooterSection {
  id: number;
  titulo: string;
  links: StrapiLink[] | null;
}

interface FooterData {
  logo: StrapiMedia | null;
  descripcion: string | null;
  redesSociales: StrapiLink[] | null;
  sections: FooterSection[] | null;
  derechosReservados: string | null;
}

type FooterResponse = StrapiSingleResponse<FooterData & Partial<StrapiEntryMeta>>;
```

---

## 14. Ejemplo mínimo de cliente (Dart / Flutter)

```dart
final uri = Uri.parse('$strapiUrl/api/financiacion').replace(
  queryParameters: {
    // o serializar populate con un encoder tipo qs
  },
);

final response = await http.get(
  uri,
  headers: {
    'Authorization': 'Bearer $strapiToken',
    'Accept': 'application/json',
  },
);

if (response.statusCode != 200) {
  throw Exception('Strapi error ${response.statusCode}');
}

final json = jsonDecode(response.body) as Map<String, dynamic>;
final data = json['data']; // Map o null
```

Para `populate` anidado en mobile, usar un serializador estilo [qs](https://www.npmjs.com/package/qs) (`encodeValuesOnly: true`) o armar la query a mano como en Home/Footer.

---

## 15. Checklist de integración mobile

1. Recibir `STRAPI_URL` + `STRAPI_TOKEN` (no commitear el token).
2. Implementar helper de media URL (relativa → absoluta).
3. Consumir cada single type con su `populate` (sin populate, los components/media salen `null`).
4. Tipar respuestas con las interfaces de esta doc.
5. Renderizar Blocks donde aplique (no asumir HTML).
6. Manejar `data: null` (contenido no publicado / vacío).
7. Cachear respuestas (el contenido de landings cambia poco).
8. No mezclar estos endpoints con el backend Nest (vehículos, login, checkout).

---

## 16. Fuera de alcance (a propósito)

Estos existen en Strapi pero **no** forman parte de esta documentación de landings:

- Noticias / categorías / comentarios  
- Prensa  
- Preguntas frecuentes (colección global)  
- Políticas / términos / cookies  
- Catálogo CMS `plan` (billing)  
- Servicios (`/api/services`)  

Si mobile necesita alguno de esos, pedir documentación aparte.
