import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {NxNewsApiService} from './services/nx.newsapi.service';
import {Article, ArticlesResponse} from './models/model.artical';
import {combineLatest, debounceTime} from 'rxjs/operators';
import {Source} from './models/model.source';
import {RequestEverything} from './models/model.everything.request';
import {Message} from 'primeng/api';

@Component({
  selector: 'nx-root',
  templateUrl: './nx.component.html',
  styleUrls: ['./nx.component.sass']
})
export class NxComponent implements OnInit {
  rowSize = 20;
  currentRequest: RequestEverything = {page: 1, pageSize: this.rowSize};
  $totalArticles: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  $articles: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  $sorting: BehaviorSubject<{ field: string, order: number }> = new BehaviorSubject<{ field: string, order: number }>(null);

  $sourcesSelected: BehaviorSubject<Source[]> = new BehaviorSubject<Source[]>([]);
  $search: BehaviorSubject<string> = new BehaviorSubject<string>('');

  // error messages
  msgs: Message[] = [];

  constructor(private _service: NxNewsApiService) {
    this.$search.pipe(combineLatest(this.$sourcesSelected, this.$sorting), debounceTime(800)).subscribe(([search, sources, sorting]) => {
      this.currentRequest = {...this.currentRequest, page: 1, query: search, sources: sources, sorting: sorting};
      this.getArticles();
    });

  }

  /**
   * this function can not be static
   * view can not call static functions
   * @param evt
   */
  paginationChanged(evt: any) {
    // get new news here data here
    this.currentRequest = {...this.currentRequest, page: ++evt['page']};

    this.getArticles();
  }

  ngOnInit(): void {
  }

  resetArticles() {
    this.$articles.next([]);
    this.$totalArticles.next(0);
  }

  getArticles() {
    this._service.getEverything(this.currentRequest).subscribe((response: ArticlesResponse) => {
      if (response.status !== 'ok') {
        this.resetArticles();
        return;
      }

      this.$articles.next(response.articles);
      this.$totalArticles.next(response.totalResults);
    }, (error) => {
      console.log(error);
      this.msgs.push({severity: 'error', summary: 'Error-Request', detail: error.error.message});
      this.resetArticles();
    });
  }

}
