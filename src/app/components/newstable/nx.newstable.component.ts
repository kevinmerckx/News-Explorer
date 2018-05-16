import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Article} from '../../models/model.artical';
import {NewsTable} from '../../models/model.newstable';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nx-newstable',
  templateUrl: './nx.newstable.component.html',
  styleUrls: ['./nx.newstable.component.sass']
})
export class NxNewsTableComponent implements OnInit {

  $news: BehaviorSubject<NewsTable[]> = new BehaviorSubject<NewsTable[]>([]);

  @Input('articles') set articles(articles: Article[]) {
    const news: NewsTable[] = [];
    for (const article of articles) {
      news.push({
        news: `${article.title} -- ${article.author} -- ${article.description}`,
        popularity: article.source.name,
        publishedAt: article.publishedAt
      });
    }
    this.$news.next(news);
  }

  @Output()
  sortChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }


}
