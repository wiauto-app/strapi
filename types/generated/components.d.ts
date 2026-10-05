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

export interface AuthCambiarContrasena extends Struct.ComponentSchema {
  collectionName: 'components_auth_cambiar_contrasenas';
  info: {
    description: 'Pantalla /cambiar-contrasena';
    displayName: 'cambiar-contrasena';
  };
  attributes: {
    boton: Schema.Attribute.Component<'ui.boton', false>;
    boton_limpiar: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Limpiar'>;
    boton_solicitar_enlace: Schema.Attribute.Component<'shared.link', false>;
    confirmar_contrasena: Schema.Attribute.Component<'formulario.campo', false>;
    contrasena: Schema.Attribute.Component<'formulario.campo', false>;
    encabezado: Schema.Attribute.Component<'ui.encabezado', false>;
    encabezado_enlace_invalido: Schema.Attribute.Component<
      'ui.encabezado',
      false
    >;
    enlace_volver: Schema.Attribute.Component<'shared.link', false>;
    mensajes: Schema.Attribute.Component<'ui.mensajes-accion', false>;
    pie: Schema.Attribute.Component<'ui.texto-enlace', false>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
  };
}

export interface AuthCompartido extends Struct.ComponentSchema {
  collectionName: 'components_auth_compartidos';
  info: {
    description: 'Textos comunes a todas las pantallas de autenticaci\u00F3n';
    displayName: 'compartido';
  };
  attributes: {
    boton_apple: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Continuar con Apple ID'>;
    boton_google: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Continuar con Google'>;
    panel_titulo: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Encuentra o vende tu pr\u00F3ximo coche hoy!'>;
    separador: Schema.Attribute.String & Schema.Attribute.DefaultTo<'o'>;
  };
}

export interface AuthConfirmarCorreo extends Struct.ComponentSchema {
  collectionName: 'components_auth_confirmar_correos';
  info: {
    description: 'Pantalla /confirmar-correo';
    displayName: 'confirmar-correo';
  };
  attributes: {
    ayuda: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Si no lo ves, revisa la carpeta de spam o solicita un nuevo enlace desde la pantalla de inicio de sesi\u00F3n.'>;
    boton: Schema.Attribute.Component<'shared.link', false>;
    encabezado: Schema.Attribute.Component<'ui.encabezado', false>;
    pie: Schema.Attribute.Component<'ui.texto-enlace', false>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
  };
}

export interface AuthLogin extends Struct.ComponentSchema {
  collectionName: 'components_auth_logines';
  info: {
    description: 'Pantalla /iniciar-sesion';
    displayName: 'login';
  };
  attributes: {
    boton: Schema.Attribute.Component<'ui.boton', false>;
    contrasena: Schema.Attribute.Component<'formulario.campo', false>;
    email: Schema.Attribute.Component<'formulario.campo', false>;
    encabezado: Schema.Attribute.Component<'ui.encabezado', false>;
    enlace_olvide_contrasena: Schema.Attribute.Component<'shared.link', false>;
    mensajes: Schema.Attribute.Component<'ui.mensajes-accion', false>;
    pie: Schema.Attribute.Component<'ui.texto-enlace', false>;
    recordar_sesion: Schema.Attribute.Component<'formulario.casilla', false>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
  };
}

export interface AuthOlvideContrasena extends Struct.ComponentSchema {
  collectionName: 'components_auth_olvide_contrasenas';
  info: {
    description: 'Pantalla /olvide-contrasena';
    displayName: 'olvide-contrasena';
  };
  attributes: {
    boton: Schema.Attribute.Component<'ui.boton', false>;
    email: Schema.Attribute.Component<'formulario.campo', false>;
    encabezado: Schema.Attribute.Component<'ui.encabezado', false>;
    encabezado_enviado: Schema.Attribute.Component<'ui.encabezado', false>;
    enlace_volver: Schema.Attribute.Component<'shared.link', false>;
    mensajes: Schema.Attribute.Component<'ui.mensajes-accion', false>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
  };
}

export interface AuthRegistro extends Struct.ComponentSchema {
  collectionName: 'components_auth_registros';
  info: {
    description: 'Pantalla /registro';
    displayName: 'registro';
  };
  attributes: {
    apellidos: Schema.Attribute.Component<'formulario.campo', false>;
    aviso_invitacion: Schema.Attribute.Component<'ui.aviso', false>;
    boton: Schema.Attribute.Component<'ui.boton', false>;
    contrasena: Schema.Attribute.Component<'formulario.campo', false>;
    email: Schema.Attribute.Component<'formulario.campo', false>;
    encabezado: Schema.Attribute.Component<'ui.encabezado', false>;
    mensajes: Schema.Attribute.Component<'ui.mensajes-accion', false>;
    nombre: Schema.Attribute.Component<'formulario.campo', false>;
    pie: Schema.Attribute.Component<'ui.texto-enlace', false>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    telefono: Schema.Attribute.Component<'formulario.campo-telefono', false>;
    terminos: Schema.Attribute.Component<'formulario.casilla', false>;
  };
}

export interface AuthVerificacion2Fa extends Struct.ComponentSchema {
  collectionName: 'components_auth_verificacion_2fas';
  info: {
    description: 'Pantalla /verificacion-2fa';
    displayName: 'verificacion-2fa';
  };
  attributes: {
    boton_usar_autenticador: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Usar c\u00F3digo del autenticador'>;
    boton_usar_respaldo: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Usar c\u00F3digo de respaldo'>;
    boton_verificar: Schema.Attribute.Component<'ui.boton', false>;
    boton_verificar_respaldo: Schema.Attribute.Component<'ui.boton', false>;
    boton_volver: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Volver al inicio de sesi\u00F3n'>;
    codigo: Schema.Attribute.Component<'formulario.campo', false>;
    codigo_respaldo: Schema.Attribute.Component<'formulario.campo', false>;
    encabezado: Schema.Attribute.Component<'ui.encabezado', false>;
    mensajes: Schema.Attribute.Component<'ui.mensajes-accion', false>;
    mensajes_respaldo: Schema.Attribute.Component<'ui.mensajes-accion', false>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    texto_cargando: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cargando verificaci\u00F3n...'>;
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

export interface FinanciacionAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_financiacion_advantages';
  info: {
    displayName: 'advantages';
  };
  attributes: {
    caracteristicas: Schema.Attribute.Component<'shared.icon-feature', true>;
    header: Schema.Attribute.Component<'shared.header', false>;
  };
}

export interface FinanciacionSteps extends Struct.ComponentSchema {
  collectionName: 'components_financiacion_steps';
  info: {
    displayName: 'steps';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    steps: Schema.Attribute.Component<'shared.icon-feature', true>;
  };
}

export interface FooterFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_sections';
  info: {
    displayName: 'footerSection';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FormularioCampo extends Struct.ComponentSchema {
  collectionName: 'components_formulario_campos';
  info: {
    description: 'Campo de formulario: textos y mensajes de validaci\u00F3n';
    displayName: 'campo';
  };
  attributes: {
    ayuda: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    mensaje_invalido: Schema.Attribute.String;
    mensaje_requerido: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface FormularioCampoTelefono extends Struct.ComponentSchema {
  collectionName: 'components_formulario_campo_telefonos';
  info: {
    description: 'Campo de tel\u00E9fono con prefijo de pa\u00EDs';
    displayName: 'campo-telefono';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Tel\u00E9fono'>;
    label_numero: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'N\u00FAmero de tel\u00E9fono'>;
    mensaje_invalido: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'El tel\u00E9fono solo puede contener d\u00EDgitos'>;
    mensaje_longitud: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'El tel\u00E9fono tiene demasiados d\u00EDgitos'>;
    mensaje_prefijo_requerido: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'El c\u00F3digo de tel\u00E9fono es requerido'>;
    mensaje_requerido: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'El tel\u00E9fono es requerido'>;
    placeholder_numero: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'N\u00FAmero de m\u00F3vil'>;
  };
}

export interface FormularioCasilla extends Struct.ComponentSchema {
  collectionName: 'components_formulario_casillas';
  info: {
    description: 'Checkbox con texto enriquecido (admite enlaces)';
    displayName: 'casilla';
  };
  attributes: {
    mensaje_requerido: Schema.Attribute.String;
    texto: Schema.Attribute.Blocks;
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
    heroImages: Schema.Attribute.Component<'shared.image', true>;
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
    boton_secundario: Schema.Attribute.Component<'shared.link', false>;
    colorFondo: Schema.Attribute.String;
    colorTexto: Schema.Attribute.String;
    descripcion: Schema.Attribute.Text;
    iconName: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedComment extends Struct.ComponentSchema {
  collectionName: 'components_shared_comments';
  info: {
    displayName: 'comment';
  };
  attributes: {
    comentario: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
    usuario: Schema.Attribute.Component<'shared.user', false> &
      Schema.Attribute.Required;
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

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    categoria: Schema.Attribute.String;
    iconName: Schema.Attribute.String;
    pregunta: Schema.Attribute.String;
    respuesta: Schema.Attribute.Blocks;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    busqueda: Schema.Attribute.Component<'shared.text-field', false>;
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
    caracteristicas: Schema.Attribute.Component<'shared.icon-feature', true>;
    card: Schema.Attribute.Component<'shared.carta-ventaja', false>;
    descripcion: Schema.Attribute.Text;
    footer: Schema.Attribute.Blocks;
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
    icon: Schema.Attribute.Media<'images' | 'files'>;
    iconName: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    active: Schema.Attribute.Boolean;
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    destacado: Schema.Attribute.Boolean;
    externo: Schema.Attribute.Boolean;
    funcion: Schema.Attribute.Boolean;
    iconName: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'/'>;
  };
}

export interface SharedMarcas extends Struct.ComponentSchema {
  collectionName: 'components_shared_marcas';
  info: {
    displayName: 'marcas';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    marcas: Schema.Attribute.Component<'shared.link', true>;
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
    externo: Schema.Attribute.Boolean;
    imagen: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedPregunta extends Struct.ComponentSchema {
  collectionName: 'components_shared_preguntas';
  info: {
    displayName: 'pregunta';
  };
  attributes: {
    pregunta: Schema.Attribute.String;
    respuesta: Schema.Attribute.Blocks;
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
    noFollow: Schema.Attribute.Boolean;
    noIndex: Schema.Attribute.Boolean;
    ogDescription: Schema.Attribute.Text;
    ogTitle: Schema.Attribute.String;
    ogType: Schema.Attribute.Enumeration<['website', 'article']> &
      Schema.Attribute.DefaultTo<'website'>;
    shareImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    structuredData: Schema.Attribute.JSON;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image']
    > &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
  };
}

export interface SharedTextField extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_fields';
  info: {
    displayName: 'text_field';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
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

export interface SimuladorComments extends Struct.ComponentSchema {
  collectionName: 'components_simulador_comments';
  info: {
    displayName: 'comments';
  };
  attributes: {
    comentario: Schema.Attribute.Component<'shared.comment', true>;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SimuladorReasons extends Struct.ComponentSchema {
  collectionName: 'components_simulador_reasons';
  info: {
    displayName: 'reasons';
  };
  attributes: {
    razones: Schema.Attribute.Component<'shared.icon-feature', true>;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SoporteChannels extends Struct.ComponentSchema {
  collectionName: 'components_soporte_channels';
  info: {
    displayName: 'channels';
  };
  attributes: {
    channel: Schema.Attribute.Component<'shared.carta-ventaja', true>;
    header: Schema.Attribute.Component<'shared.header', false>;
  };
}

export interface SoportePreguntas extends Struct.ComponentSchema {
  collectionName: 'components_soporte_preguntas';
  info: {
    displayName: 'preguntas';
  };
  attributes: {
    header: Schema.Attribute.Component<'shared.header', false>;
    preguntas: Schema.Attribute.Component<'shared.pregunta', true>;
  };
}

export interface TasadorFormulario extends Struct.ComponentSchema {
  collectionName: 'components_tasador_formularios';
  info: {
    description: 'Textos del formulario de tasaci\u00F3n: veh\u00EDculo y contacto';
    displayName: 'formulario';
  };
  attributes: {
    anio: Schema.Attribute.Component<'formulario.campo', false>;
    apellidos: Schema.Attribute.Component<'formulario.campo', false>;
    boton: Schema.Attribute.Component<'ui.boton', false>;
    combustible: Schema.Attribute.Component<'formulario.campo', false>;
    email: Schema.Attribute.Component<'formulario.campo', false>;
    encabezado_contacto: Schema.Attribute.Component<'ui.encabezado', false>;
    encabezado_vehiculo: Schema.Attribute.Component<'ui.encabezado', false>;
    kilometraje: Schema.Attribute.Component<'formulario.campo', false>;
    marca: Schema.Attribute.Component<'formulario.campo', false>;
    matricula: Schema.Attribute.Component<'formulario.campo', false>;
    mensajes: Schema.Attribute.Component<'ui.mensajes-accion', false>;
    modelo: Schema.Attribute.Component<'formulario.campo', false>;
    nombre: Schema.Attribute.Component<'formulario.campo', false>;
    potencia: Schema.Attribute.Component<'formulario.campo', false>;
    telefono: Schema.Attribute.Component<'formulario.campo-telefono', false>;
    transmision: Schema.Attribute.Component<'formulario.campo', false>;
    version: Schema.Attribute.Component<'formulario.campo', false>;
  };
}

export interface TasadorOfertas extends Struct.ComponentSchema {
  collectionName: 'components_tasador_ofertases';
  info: {
    description: 'Textos del flujo de ofertas de concesionarios';
    displayName: 'ofertas';
  };
  attributes: {
    boton_aceptar: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Aceptar oferta'>;
    boton_rechazar: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Rechazar'>;
    confirmar_aceptar: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Al aceptar, compartiremos tus datos de contacto con este concesionario y el resto de ofertas se cerrar\u00E1n.'>;
    encabezado_enviado: Schema.Attribute.Component<'ui.encabezado', false>;
    encabezado_ofertas: Schema.Attribute.Component<'ui.encabezado', false>;
    enlace_ver_ofertas: Schema.Attribute.Component<'shared.link', false>;
    mensajes: Schema.Attribute.Component<'ui.mensajes-accion', false>;
    sin_ofertas: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Todav\u00EDa no has recibido ofertas. Te avisaremos en cuanto un concesionario oferte.'>;
  };
}

export interface TasadorOpcion extends Struct.ComponentSchema {
  collectionName: 'components_tasador_opciones';
  info: {
    description: 'Card de una opci\u00F3n tras tasar (publicar o recibir ofertas)';
    displayName: 'opcion';
  };
  attributes: {
    badge: Schema.Attribute.String;
    boton: Schema.Attribute.Component<'shared.link', false>;
    descripcion: Schema.Attribute.Text;
    iconName: Schema.Attribute.String;
    puntos: Schema.Attribute.Component<'shared.icon-feature', true>;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TasadorOpciones extends Struct.ComponentSchema {
  collectionName: 'components_tasador_opcioneses';
  info: {
    description: 'Bloque \u00BFQu\u00E9 quieres hacer con tu coche?';
    displayName: 'opciones';
  };
  attributes: {
    encabezado: Schema.Attribute.Component<'ui.encabezado', false>;
    publicar: Schema.Attribute.Component<'tasador.opcion', false>;
    recibir_ofertas: Schema.Attribute.Component<'tasador.opcion', false>;
  };
}

export interface TasadorResultado extends Struct.ComponentSchema {
  collectionName: 'components_tasador_resultados';
  info: {
    description: 'Textos del resultado de la tasaci\u00F3n con IA';
    displayName: 'resultado';
  };
  attributes: {
    aviso_ia: Schema.Attribute.Component<'ui.aviso', false>;
    boton_modificar: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Modificar datos'>;
    confianza_alta: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Alta'>;
    confianza_baja: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Baja'>;
    confianza_media: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Media'>;
    encabezado: Schema.Attribute.Component<'ui.encabezado', false>;
    label_confianza: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Confianza'>;
    label_precio_alto: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Precio alto'>;
    label_precio_bajo: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Precio bajo'>;
    label_precio_mercado: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Precio de mercado'>;
    titulo_explicacion: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Recomendaci\u00F3n IA'>;
  };
}

export interface UiAviso extends Struct.ComponentSchema {
  collectionName: 'components_ui_avisos';
  info: {
    description: 'Mensaje destacado dentro de la p\u00E1gina';
    displayName: 'aviso';
  };
  attributes: {
    texto: Schema.Attribute.Text & Schema.Attribute.Required;
    tipo: Schema.Attribute.Enumeration<['info', 'exito', 'alerta', 'error']> &
      Schema.Attribute.DefaultTo<'info'>;
  };
}

export interface UiBoton extends Struct.ComponentSchema {
  collectionName: 'components_ui_botones';
  info: {
    description: 'Bot\u00F3n de acci\u00F3n con texto de estado cargando';
    displayName: 'boton';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    label_cargando: Schema.Attribute.String;
  };
}

export interface UiEncabezado extends Struct.ComponentSchema {
  collectionName: 'components_ui_encabezados';
  info: {
    description: 'T\u00EDtulo y descripci\u00F3n de una secci\u00F3n o pantalla';
    displayName: 'encabezado';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiMensajesAccion extends Struct.ComponentSchema {
  collectionName: 'components_ui_mensajes_acciones';
  info: {
    description: 'Toasts de resultado de una acci\u00F3n (enviar formulario, guardar...)';
    displayName: 'mensajes-accion';
  };
  attributes: {
    error_generico: Schema.Attribute.String;
    exito: Schema.Attribute.String;
  };
}

export interface UiTextoEnlace extends Struct.ComponentSchema {
  collectionName: 'components_ui_texto_enlaces';
  info: {
    description: 'Texto seguido de un enlace (ej: \u00BFYa tienes cuenta? Inicia sesi\u00F3n)';
    displayName: 'texto-enlace';
  };
  attributes: {
    enlace: Schema.Attribute.Component<'shared.link', false>;
    texto: Schema.Attribute.String;
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
  export namespace Public {
    export interface ComponentSchemas {
      'about.business-card': AboutBusinessCard;
      'about.team': AboutTeam;
      'auth.cambiar-contrasena': AuthCambiarContrasena;
      'auth.compartido': AuthCompartido;
      'auth.confirmar-correo': AuthConfirmarCorreo;
      'auth.login': AuthLogin;
      'auth.olvide-contrasena': AuthOlvideContrasena;
      'auth.registro': AuthRegistro;
      'auth.verificacion-2fa': AuthVerificacion2Fa;
      'billing.plan': BillingPlan;
      'billing.plan-item': BillingPlanItem;
      'billing.precios': BillingPrecios;
      'financiacion.advantages': FinanciacionAdvantages;
      'financiacion.steps': FinanciacionSteps;
      'footer.footer-section': FooterFooterSection;
      'formulario.campo': FormularioCampo;
      'formulario.campo-telefono': FormularioCampoTelefono;
      'formulario.casilla': FormularioCasilla;
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
      'shared.comment': SharedComment;
      'shared.desplegable': SharedDesplegable;
      'shared.estadistica': SharedEstadistica;
      'shared.faq': SharedFaq;
      'shared.header': SharedHeader;
      'shared.hero': SharedHero;
      'shared.icon-feature': SharedIconFeature;
      'shared.image': SharedImage;
      'shared.link': SharedLink;
      'shared.marcas': SharedMarcas;
      'shared.mobile-advertisment': SharedMobileAdvertisment;
      'shared.otro-link': SharedOtroLink;
      'shared.pregunta': SharedPregunta;
      'shared.seo': SharedSeo;
      'shared.text-field': SharedTextField;
      'shared.user': SharedUser;
      'simulador.comments': SimuladorComments;
      'simulador.reasons': SimuladorReasons;
      'soporte.channels': SoporteChannels;
      'soporte.preguntas': SoportePreguntas;
      'tasador.formulario': TasadorFormulario;
      'tasador.ofertas': TasadorOfertas;
      'tasador.opcion': TasadorOpcion;
      'tasador.opciones': TasadorOpciones;
      'tasador.resultado': TasadorResultado;
      'ui.aviso': UiAviso;
      'ui.boton': UiBoton;
      'ui.encabezado': UiEncabezado;
      'ui.mensajes-accion': UiMensajesAccion;
      'ui.texto-enlace': UiTextoEnlace;
      'vender-vehiculo.comparacion': VenderVehiculoComparacion;
      'vender-vehiculo.consejos': VenderVehiculoConsejos;
      'vender-vehiculo.faqs': VenderVehiculoFaqs;
      'vender-vehiculo.feature': VenderVehiculoFeature;
      'vender-vehiculo.plan': VenderVehiculoPlan;
      'vender-vehiculo.ventajas': VenderVehiculoVentajas;
    }
  }
}
