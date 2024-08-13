import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface LinkAnchor extends Schema.Component {
  collectionName: 'components_link_anchors';
  info: {
    displayName: 'anchor';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<true>;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    fb_event: Attribute.String;
    snapchat_event: Attribute.String;
    tiktok_event: Attribute.String;
  };
}

export interface ComponentMonthSummary extends Schema.Component {
  collectionName: 'components_component_month_summaries';
  info: {
    displayName: 'month_summary';
  };
  attributes: {
    monthSummaryLabel: Attribute.String;
    month: Attribute.String;
    visitsLabel: Attribute.String;
    visitsCount: Attribute.String;
    salesLabel: Attribute.String;
    salesCount: Attribute.String;
    ordersLabel: Attribute.String;
    ordersCount: Attribute.String;
    monthGoalCount: Attribute.String;
    monthGoalLabel: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'link.anchor': LinkAnchor;
      'component.month-summary': ComponentMonthSummary;
    }
  }
}
