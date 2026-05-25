import type { Schema, Struct } from '@strapi/strapi';

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
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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

export interface SharedIconFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_features';
  info: {
    displayName: 'icon_feature';
  };
  attributes: {
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
    label: Schema.Attribute.String;
    url: Schema.Attribute.Text;
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
    imagen: Schema.Attribute.Media<'images' | 'files'>;
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.app-advertisment': HomeAppAdvertisment;
      'home.features-section': HomeFeaturesSection;
      'home.hero': HomeHero;
      'home.newsletter': HomeNewsletter;
      'shared.icon-feature': SharedIconFeature;
      'shared.link': SharedLink;
      'shared.seo': SharedSeo;
      'shared.user': SharedUser;
    }
  }
}
