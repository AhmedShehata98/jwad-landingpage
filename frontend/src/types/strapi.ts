export interface IStrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      total: number;
      page: number;
      pageCount: number;
      pageSize: number;
    };
  };
}
export interface IStrapiBaseAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface IStrapiData<T> {
  id: number;
  attributes: T;
}

export interface IStrapiImage {
  id: number;
  attributes: {
    url: string;
    alternativeText: string;
  };
}

export interface IStrapiLink {
  id: number;
  __component: string;
  label: string;
  href: string;
  isExternal: boolean;
}
