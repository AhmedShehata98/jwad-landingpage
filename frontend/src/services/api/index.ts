import { IAppMeta, IStructuredData } from "@/types/app-meta";
import { StrapiResponse } from "@/types/common";
import { IPortfolioFilter } from "@/types/portfolio-filters";
import {
  IStrapiResponse,
  IStrapiBaseAttributes,
  IStrapiData,
  IStrapiImage,
} from "@/types/strapi";
import qs from "qs";

const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL_PROTOCOL}://${process.env.NEXT_PUBLIC_BASE_URL}`;
const devBASE_URL = `${apiURL}:${process.env.NEXT_PUBLIC_BASE_URL_PORT}`;
const productionBASE_URL = `${apiURL}`;
const environment = process.env.NODE_ENV;

export const BASE_URL =
  environment === "development" ? devBASE_URL : productionBASE_URL;

type HeaderType = IStrapiBaseAttributes & {
  logo: {
    data: {
      id: number;
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
  contact_us: {
    id: number;
    __component: string;
    label: string;
    href: string;
    snapchat_event: string;
    fb_event: string;
    tiktok_event: string;
    isExternal: boolean;
    icon: {
      data: {
        id: number;
        attributes: {
          url: string;
          alternativeText: string;
        };
      }[];
    };
  }[];
};

type HeroSectionType = IStrapiBaseAttributes & {
  subheading: string;
  heading: string;
  description: string;
  secondDescription: string;
  video: {
    data: {
      id: number;
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
  free_consultant: {
    id: number;
    __component: string;
    label: string;
    href: string;
    fb_event: string;
    snapchat_event: string;
    tiktok_event: string;
    isExternal: boolean;
  }[];
};

type SalesType = IStrapiBaseAttributes & {
  heading: string;
};

export type SalesCardType = {
  id: number;
  __component: string;
  monthSummaryLabel: string;
  month: string;
  visitsLabel: string;
  visitsCount: string;
  salesLabel: string;
  salesCount: string;
  ordersLabel: string;
  ordersCount: string;
  monthGoalCount: string;
  monthGoalLabel: string;
};
export type SalesCardResponseType = IStrapiBaseAttributes & {
  sales_card: SalesCardType[];
};

export type WhyCardType = {
  title: string;
  description: string;
  color: string | null;
  isActive: boolean;
  icon: {
    data: {
      id: number;
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
};

type WhySectionResponseType = {
  heading: string;
  actionBtn: {
    id: number;
    __component: string;
    label: string;
    href: string;
    fb_event: string;
    snapchat_event: string;
    tiktok_event: string;
    isExternal: boolean;
  }[];
};

type WhyCardResponseType = WhyCardType & {};
type PartnerResponseType = IStrapiBaseAttributes & {
  heading: string;
};
type PartnerCardType = IStrapiBaseAttributes & {
  icon: {
    data: {
      id: number;
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
};
type ServicesType = IStrapiBaseAttributes & {
  heading: string;
};
export type ServiceCard = {
  title: string;
  icon: {
    data: {
      id: number;
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
  video: {
    data: {
      id: number;
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
};
type ServiceCardResponseType = IStrapiBaseAttributes & ServiceCard & {};
type PortfolioType = IStrapiBaseAttributes & {
  heading: string;
  subheading: string;
};
type PortfolioFiltersType = IStrapiBaseAttributes & {
  label: string;
  filter: string;
};

export type PortfolioCardType = {
  tile: string;
  description: string;
  media_item: {
    data: IStrapiImage[] | null;
  };
  video: {
    data: IStrapiImage | null;
  };
  our_work_fiiter: {
    data: IPortfolioFilter;
  };
};
type PortfolioListType = IStrapiBaseAttributes & PortfolioCardType & {};
type ConsultationSectionType = IStrapiBaseAttributes & {
  subheading: string;
  heading: string;
  image: {
    data: {
      id: number;
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };

  link: {
    id: number;
    __component: string;
    label: string;
    href: string;
    fb_event: string;
    snapchat_event: string;
    tiktok_event: string;
    isExternal: boolean;
  }[];
};
type FooterType = IStrapiBaseAttributes & {
  description: string;
  logo: {
    data: {
      id: number;
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
};
type FooterSocialLinksType = IStrapiBaseAttributes & {
  social_media: {
    id: number;
    __component: string;
    label: string;
    href: string;
    isExternal: boolean;
    icon: {
      data: {
        id: number;
        attributes: {
          url: string;
          alternativeText: string;
        };
      }[];
    };
  }[];
};

type LogoType = IStrapiBaseAttributes & {
  logo: {
    data: {
      id: number;
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
};

type PixelConfigType = IStrapiBaseAttributes & {
  pixel_id: string;
};
type SnapchatPixelType = PixelConfigType & {
  user_email: string;
};
// Start fetch methods
//
//

export async function getFacebookPixelConfig(): Promise<
  IStrapiResponse<IStrapiData<PixelConfigType>>
> {
  try {
    const url = new URL("/api/facebook-pixel-config", BASE_URL);
    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getSnapchatPixelConfig(): Promise<
  IStrapiResponse<IStrapiData<SnapchatPixelType>>
> {
  try {
    const url = new URL("/api/snapchat-pixel-config", BASE_URL);
    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getTikTokPixelConfig(): Promise<
  IStrapiResponse<IStrapiData<PixelConfigType>>
> {
  try {
    const url = new URL(
      "/api/tiktok-pixel-config",
      process.env.NEXT_PUBLIC_BASE_URL
    );
    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getHeader(): Promise<
  IStrapiResponse<IStrapiData<HeaderType>>
> {
  try {
    const qBuilder = qs.stringify({
      populate: {
        logo: {
          fields: ["url", "alternativeText"],
        },
        contact_us: {
          populate: {
            icon: {
              fields: ["url", "alternativeText"],
            },
          },
        },
      },
    });
    const url = new URL("/api/header", BASE_URL);
    url.search = qBuilder;
    const res = await fetch(url.href, {
      next: { revalidate: 1800 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getHeroSection(): Promise<
  IStrapiResponse<IStrapiData<HeroSectionType>>
> {
  try {
    const qBuilder = qs.stringify({
      populate: {
        video: {
          fields: ["url", "alternativeText"],
        },
        free_consultant: {
          populate: true,
        },
      },
    });

    const url = new URL("/api/hero", BASE_URL);
    url.search = qBuilder;

    const res = await fetch(url.href);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSales(): Promise<
  IStrapiResponse<IStrapiData<SalesType>>
> {
  try {
    const url = new URL("/api/sales-section", BASE_URL);
    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getAllSalesList(): Promise<
  IStrapiResponse<IStrapiData<SalesCardResponseType>[]>
> {
  try {
    const qBuilder = qs.stringify({
      populate: {
        sales_card: {
          populate: true,
        },
      },
    });
    const url = new URL("/api/sales-lists", BASE_URL);
    url.search = qBuilder;

    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getWhySection(): Promise<
  IStrapiResponse<IStrapiData<WhySectionResponseType>>
> {
  try {
    const qBuilder = qs.stringify({
      populate: {
        actionBtn: {
          populate: true,
        },
      },
    });
    const url = new URL("/api/why-section", BASE_URL);
    url.search = qBuilder;

    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getWhyList(): Promise<
  IStrapiResponse<IStrapiData<WhyCardResponseType>[]>
> {
  try {
    const qBuilder = qs.stringify({
      populate: {
        icon: {
          fields: ["url", "alternativeText"],
        },
      },
    });
    const url = new URL("/api/why-lists", BASE_URL);
    url.search = qBuilder;

    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getPartnersSection(): Promise<
  IStrapiResponse<IStrapiData<PartnerResponseType>>
> {
  try {
    const url = new URL("/api/partner", BASE_URL);

    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getAllPartnersList(): Promise<
  IStrapiResponse<IStrapiData<PartnerCardType>[]>
> {
  try {
    const qBuilder = qs.stringify({
      populate: {
        icon: {
          fields: ["url", "alternativeText"],
        },
      },
    });
    const url = new URL("/api/partners-lists", BASE_URL);
    url.search = qBuilder;

    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getServicesSection(): Promise<
  IStrapiResponse<IStrapiData<ServicesType>>
> {
  try {
    const url = new URL("/api/services-section", BASE_URL);

    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getServicesList(): Promise<
  IStrapiResponse<IStrapiData<ServiceCardResponseType>[]>
> {
  try {
    const qBuilder = qs.stringify({
      populate: {
        icon: {
          fields: ["url", "alternativeText"],
        },
        video: {
          fields: ["url", "alternativeText"],
        },
      },
    });
    const url = new URL("/api/services-lists", BASE_URL);
    url.search = qBuilder;

    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getPortfolio(): Promise<
  IStrapiResponse<IStrapiData<PortfolioType>>
> {
  try {
    const url = new URL("/api/our-work-section", BASE_URL);
    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getPortfolioFilters(): Promise<
  IStrapiResponse<IStrapiData<PortfolioFiltersType>[]>
> {
  try {
    const url = new URL("/api/our-work-fiiters", BASE_URL);
    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getPortfolioList({
  limit = 4,
  offset = 1,
  query = "all",
}: {
  query: string;
  offset: number;
  limit: number;
}): Promise<IStrapiResponse<IStrapiData<PortfolioListType>[]>> {
  try {
    const pagination = { page: offset, pageSize: limit };
    let queriesWithFilters = {
      populate: {
        media_item: {
          fields: ["url", "alternativeText"],
        },
        video: {
          fields: ["url", "alternativeText"],
        },
        our_work_fiiter: "our_work_list",
      },
      filters: {
        our_work_fiiter: {
          filter: {
            $eq: query,
          },
        },
      },
      pagination,
    };

    const queries = {
      populate: {
        media_item: {
          fields: ["url", "alternativeText"],
        },
        video: {
          fields: ["url", "alternativeText"],
        },
        our_work_fiiter: "our_work_list",
      },
      pagination,
    };
    const qBuilder = qs.stringify(
      query === "all" ? queries : queriesWithFilters
    );

    const url = new URL("/api/our-work-lists", BASE_URL);
    url.search = qBuilder;

    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getConsultation(): Promise<
  IStrapiResponse<IStrapiData<ConsultationSectionType>>
> {
  try {
    const qBuilder = qs.stringify({
      populate: {
        image: {
          fields: ["url", "alternativeText"],
        },
        link: {
          populate: true,
        },
      },
    });

    const url = new URL("/api/consultation-section", BASE_URL);
    url.search = qBuilder;

    const res = await fetch(url.href);
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getFooter(): Promise<
  IStrapiResponse<IStrapiData<FooterType>>
> {
  try {
    const qBuilder = qs.stringify({
      populate: {
        logo: {
          fields: ["url", "alternativeText"],
        },
      },
    });

    const url = new URL("/api/footer", BASE_URL);
    url.search = qBuilder;

    const res = await fetch(url.href, { next: { revalidate: 1800 } });
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getFooterSocialLinks(): Promise<
  IStrapiResponse<IStrapiData<FooterSocialLinksType>[]>
> {
  try {
    const qBuilder = qs.stringify({
      populate: {
        social_media: {
          populate: {
            icon: {
              fields: ["url", "alternativeText"],
            },
          },
        },
      },
    });

    const url = new URL("/api/footer-social-links", BASE_URL);
    url.search = qBuilder;

    const res = await fetch(url.href, { next: { revalidate: 1800 } });
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getLogo(): Promise<
  IStrapiResponse<IStrapiData<LogoType>>
> {
  try {
    const qBuilder = qs.stringify({
      populate: {
        logo: {
          fields: ["url", "alternativeText"],
        },
      },
    });
    const url = new URL("/api/logo", BASE_URL);
    url.search = qBuilder;

    const res = await fetch(url.href, { next: { revalidate: 1800 } });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMetadata(): Promise<StrapiResponse<IAppMeta>> {
  const queryBuilder = qs.stringify({
    populate: {
      seo: {
        populate: {
          metaImage: { fields: ["url", "alternativeText", "mime"] },
        },
      },
      social_media_meta: {
        populate: {
          image: {
            fields: ["url", "alternativeText", "mime", "width", "height"],
          },
        },
      },
    },
  });
  try {
    const url = new URL("/api/app-meta", BASE_URL);
    url.search = queryBuilder;
    const res = await fetch(url.href);

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMetaStructuredData(): Promise<
  StrapiResponse<IStructuredData>
> {
  try {
    const queryBuilder = qs.stringify({
      populate: {
        seo: {
          fields: ["structuredData"],
        },
      },
    });
    const url = new URL("/api/app-meta", BASE_URL);
    url.search = queryBuilder;

    const res = await fetch(url.href, { next: { revalidate: 1800 } });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
