import {Source} from './model.source';

export interface RequestEverything {
  query?: string;
  sources?: Source[];
  page: number;
  pageSize: number;
  sorting?:
    {
      field: string;
      order: number;
    };
}
