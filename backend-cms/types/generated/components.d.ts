import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageCompanyLogo extends Struct.ComponentSchema {
  collectionName: 'components_homepage_company_logos';
  info: {
    displayName: 'Company Logo';
    icon: 'gate';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.company-logo': HomepageCompanyLogo;
    }
  }
}
