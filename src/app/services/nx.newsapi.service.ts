import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ArticlesResponse} from '../models/model.artical';
import {Source, SourcesResponse} from '../models/model.source';
import {RequestEverything} from '../models/model.everything.request';

@Injectable()
export class NxNewsApiService {

  private _apiKey = 'b4b63d6084ea48f8bad2cc8d3c2a3d03';
  private _baseURL = 'http://newsapi.org/v2/';

  constructor(private http: HttpClient) {
  }


  getEverything(options: RequestEverything): Observable<ArticlesResponse> {
    let url = `${this._baseURL}everything?q=${options.query || ''}` +
      `&page=${options.page}&pageSize=${options.pageSize}&apiKey=${this._apiKey}`;

    if (options.sources && options.sources.length > 0) {
      url += `&sources=${options.sources.map(function (elem: Source) {
        return elem.id;
      }).join(',')}`;
    }
    if (options.sorting) {
      url += `&sortBy=${options.sorting.field}`;
    }
    return this.http.request<ArticlesResponse>('get', url);
  }

  getSources(): Observable<SourcesResponse> {
    return this.http.request<SourcesResponse>('get', `${this._baseURL}sources?apiKey=${this._apiKey}`);
  }
}


