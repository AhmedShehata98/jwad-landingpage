export interface IPortfolioFilter {
  id: number;
  attributes: {
    filter: string;
    label: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
}
