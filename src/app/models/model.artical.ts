export interface Article {
  source: { id?: number, name: string};
  author: string;
  description: string;
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}
export interface ArticlesResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}
