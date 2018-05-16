export interface RequestEverything {
  query?: string;
  page: number;
  pageSize: number;
  sorting:
    {
      field: string;
      order: number;
    };
}
