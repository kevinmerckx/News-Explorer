import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {NxNewsApiService} from './services/nx.newsapi.service';
import {Article, ArticlesResponse} from './models/model.artical';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'nx-root',
  templateUrl: './nx.component.html',
  styleUrls: ['./nx.component.sass']
})
export class NxComponent implements OnInit {
  rowSize = 20;

  $totalArticles: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  $articles: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  $sorting: BehaviorSubject<{ field: string, order: number }> = new BehaviorSubject<{ field: string, order: number }>(null);

  constructor(private _service: NxNewsApiService) {
    this.$sorting.pipe(filter(value => !!value)).subscribe((value) => this.getArticles(1, value));

  }

  /**
   * this function can not be static
   * view can not call static functions
   * @param evt
   */
  paginationChanged(evt: any) {
    // get new news here data here
    console.log(`pagination event ${JSON.stringify(evt)}`);
    this.getArticles(++evt['page']);
  }

  ngOnInit(): void {
    this.getArticles(1);
  }

  reset() {
    this.$articles.next([]);
    this.$totalArticles.next(0);
  }

  getArticles(page: number, sorting?: { field: string, order: number }) {
    this._service.getEverything({pageSize: this.rowSize, page: page, sorting: sorting}).subscribe((response: ArticlesResponse) => {
      if (response.status !== 'ok') {
        this.reset();
        return;
      }

      this.$articles.next(response.articles);
      this.$totalArticles.next(response.totalResults);
    });
  }
}
