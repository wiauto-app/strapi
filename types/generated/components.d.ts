import type { Schema, Struct } from '@strapi/strapi';

export interface AboutBusinessCard extends Struct.ComponentSchema {
  collectionName: 'components_about_business_cards';
  info: {
    displayName: 'business-card';
  };
  attributes: {
    caracteristicas: Schema.Attribute.Component<'shared.icon-feature', true>;
    descripcion: Schema.Attribute.Text;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface AboutTeam extends Struct.ComponentSchema {
  collectionName: 'components_about_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    persona: Schema.Attribute.Component<'shared.user', true>;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface BillingPlan extends Struct.ComponentSchema {
  collectionName: 'components_billing_plans';
  info: {
    displayName: 'plan';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    destacado: Schema.Attribute.Boolean;
    item: Schema.Attribute.Component<'billing.plan-item', true>;
    orden: Schema.Attribute.Integer;
    precios: Schema.Attribute.Component<'billing.precios', true>;
    stripe_product_id: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface BillingPlanItem extends Struct.ComponentSchema {
  collectionName: 'components_billing_plan_items';
  info: {
    displayName: 'plan-item';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    incluido: Schema.Attribute.Boolean;
  };
}

export interface BillingPrecios extends Struct.ComponentSchema {
  collectionName: 'components_billing_precios';
  info: {
    displayName: 'precios';
  };
  attributes: {
    price: Schema.Attribute.Decimal;
    recurrencia: Schema.Attribute.String;
    stripe_price_id: Schema.Attribute.String;
  };
}

export interface HomeAppAdvertisment extends Struct.ComponentSchema {
  collectionName: 'components_home_app_advertisments';
  info: {
    displayName: 'appAdvertisment';
  };
  attributes: {
    appleLabel: Schema.Attribute.Blocks;
    appMockup: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    googleLabel: Schema.Attribute.Blocks;
    phrase: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_home_features_sections';
  info: {
    displayName: 'features_section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'shared.icon-feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    actionLinks: Schema.Attribute.Component<'shared.link', true>;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    caracteristicas: Schema.Attribute.Component<'shared.icon-feature', true>;
    descarga_app: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeLowEmisions extends Struct.ComponentSchema {
  collectionName: 'components_home_low_emisions';
  info: {
    displayName: 'low_emisions';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    links: Schema.Attribute.Component<'shared.carta-ventaja', true>;
  };
}

export interface HomeNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_home_newsletters';
  info: {
    displayName: 'newsletter';
  };
  attributes: {
    description: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_home_process_sections';
  info: {
    displayName: 'process_section';
  };
  attributes: {
    tabs: Schema.Attribute.Component<'home.process-section-tabs', true>;
    titulo: Schema.Attribute.Blocks;
  };
}

export interface HomeProcessSectionTabs extends Struct.ComponentSchema {
  collectionName: 'components_home_process_section_tabs';
  info: {
    displayName: 'process_section_tabs';
  };
  attributes: {
    descripcion: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tab: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface PlanesCaracteristicas extends Struct.ComponentSchema {
  collectionName: 'components_planes_caracteristicas';
  info: {
    displayName: 'caracteristicas';
  };
  attributes: {
    caracteristicas: Schema.Attribute.Component<'shared.icon-feature', true>;
    header: Schema.Attribute.Component<'shared.header', false>;
  };
}

export interface PlanesHero extends Struct.ComponentSchema {
  collectionName: 'components_planes_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
  };
}

export interface PlanesTechAdd extends Struct.ComponentSchema {
  collectionName: 'components_planes_tech_adds';
  info: {
    displayName: 'tech-add';
  };
  attributes: {
    caracteristicas: Schema.Attribute.Component<'shared.icon-feature', true>;
    header: Schema.Attribute.Component<'shared.header', false>;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedAnuncio extends Struct.ComponentSchema {
  collectionName: 'components_shared_anuncios';
  info: {
    displayName: 'anuncio';
  };
  attributes: {
    boton: Schema.Attribute.Component<'shared.link', false>;
    descripcion: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedBloqueCaracteristica extends Struct.ComponentSchema {
  collectionName: 'components_shared_bloque_caracteristicas';
  info: {
    displayName: 'bloque-caracteristica';
  };
  attributes: {
    descripcion: Schema.Attribute.Blocks & Schema.Attribute.Required;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    reversa: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCartaVentaja extends Struct.ComponentSchema {
  collectionName: 'components_shared_carta_ventajas';
  info: {
    displayName: 'card';
  };
  attributes: {
    boton: Schema.Attribute.Component<'shared.link', false>;
    colorFondo: Schema.Attribute.String;
    colorTexto: Schema.Attribute.String;
    descripcion: Schema.Attribute.Text;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedDesplegable extends Struct.ComponentSchema {
  collectionName: 'components_shared_desplegables';
  info: {
    displayName: 'desplegable';
  };
  attributes: {
    descripcion: Schema.Attribute.Blocks & Schema.Attribute.Required;
    imagen: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    orientacion: Schema.Attribute.Enumeration<['vertical', 'horizontal']>;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedEstadistica extends Struct.ComponentSchema {
  collectionName: 'components_shared_estadisticas';
  info: {
    displayName: 'estadistica';
  };
  attributes: {
    descripcion: Schema.Attribute.String;
    estadistica: Schema.Attribute.String;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    descripcion: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    acciones: Schema.Attribute.Component<'shared.link', true>;
    descripcion: Schema.Attribute.Text;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedIconFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_features';
  info: {
    displayName: 'icon_feature';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    destacado: Schema.Attribute.Boolean;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface SharedMobileAdvertisment extends Struct.ComponentSchema {
  collectionName: 'components_shared_mobile_advertisments';
  info: {
    displayName: 'mobile-advertisment';
  };
  attributes: {
    apple: Schema.Attribute.Component<'shared.link', false>;
    caracteristicas: Schema.Attribute.Component<'shared.icon-feature', true>;
    google: Schema.Attribute.Component<'shared.link', false>;
    header: Schema.Attribute.Component<'shared.header', false>;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedOtroLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_otro_links';
  info: {
    displayName: 'otro-link';
  };
  attributes: {
    descripcion: Schema.Attribute.Text & Schema.Attribute.Required;
    imagen: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    noIndex: Schema.Attribute.Boolean;
    shareImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedUser extends Struct.ComponentSchema {
  collectionName: 'components_shared_users';
  info: {
    displayName: 'user';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    imagen: Schema.Attribute.Media<'images' | 'files'>;
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface VenderVehiculoComparacion extends Struct.ComponentSchema {
  collectionName: 'components_vender_vehiculo_comparacions';
  info: {
    displayName: 'comparacion';
  };
  attributes: {
    planes: Schema.Attribute.Component<'vender-vehiculo.plan', true>;
    titulo: Schema.Attribute.String;
  };
}

export interface VenderVehiculoConsejos extends Struct.ComponentSchema {
  collectionName: 'components_vender_vehiculo_consejos';
  info: {
    displayName: 'consejos';
  };
  attributes: {
    consejo: Schema.Attribute.Component<'shared.carta-ventaja', true>;
    descripcion: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface VenderVehiculoFaqs extends Struct.ComponentSchema {
  collectionName: 'components_vender_vehiculo_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    pregunta: Schema.Attribute.Component<'shared.desplegable', true>;
    titulo: Schema.Attribute.String;
  };
}

export interface VenderVehiculoFeature extends Struct.ComponentSchema {
  collectionName: 'components_vender_vehiculo_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    incluido: Schema.Attribute.Boolean;
    titulo: Schema.Attribute.String;
  };
}

export interface VenderVehiculoPlan extends Struct.ComponentSchema {
  collectionName: 'components_vender_vehiculo_plans';
  info: {
    displayName: 'plan';
  };
  attributes: {
    caracteristicas: Schema.Attribute.Component<
      'vender-vehiculo.feature',
      true
    >;
    nombre: Schema.Attribute.String;
  };
}

export interface VenderVehiculoVentajas extends Struct.ComponentSchema {
  collectionName: 'components_vender_vehiculo_ventajas';
  info: {
    displayName: 'ventajas';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
    ventaja: Schema.Attribute.Component<'shared.carta-ventaja', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.business-card': AboutBusinessCard;
      'about.team': AboutTeam;
      'billing.plan': BillingPlan;
      'billing.plan-item': BillingPlanItem;
      'billing.precios': BillingPrecios;
      'home.app-advertisment': HomeAppAdvertisment;
      'home.features-section': HomeFeaturesSection;
      'home.hero': HomeHero;
      'home.low-emisions': HomeLowEmisions;
      'home.newsletter': HomeNewsletter;
      'home.process-section': HomeProcessSection;
      'home.process-section-tabs': HomeProcessSectionTabs;
      'planes.caracteristicas': PlanesCaracteristicas;
      'planes.hero': PlanesHero;
      'planes.tech-add': PlanesTechAdd;
      'shared.anuncio': SharedAnuncio;
      'shared.bloque-caracteristica': SharedBloqueCaracteristica;
      'shared.carta-ventaja': SharedCartaVentaja;
      'shared.desplegable': SharedDesplegable;
      'shared.estadistica': SharedEstadistica;
      'shared.header': SharedHeader;
      'shared.hero': SharedHero;
      'shared.icon-feature': SharedIconFeature;
      'shared.link': SharedLink;
      'shared.mobile-advertisment': SharedMobileAdvertisment;
      'shared.otro-link': SharedOtroLink;
      'shared.seo': SharedSeo;
      'shared.user': SharedUser;
      'vender-vehiculo.comparacion': VenderVehiculoComparacion;
      'vender-vehiculo.consejos': VenderVehiculoConsejos;
      'vender-vehiculo.faqs': VenderVehiculoFaqs;
      'vender-vehiculo.feature': VenderVehiculoFeature;
      'vender-vehiculo.plan': VenderVehiculoPlan;
      'vender-vehiculo.ventajas': VenderVehiculoVentajas;
    }
  }
}
