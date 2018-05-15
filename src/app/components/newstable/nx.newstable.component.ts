import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {mockedNews, News} from '../../models/model.news';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nx-newstable',
  templateUrl: './nx.newstable.component.html',
  styleUrls: ['./nx.newstable.component.sass']
})
export class NxNewsTableComponent implements OnInit {

  $news: BehaviorSubject<News[]> = new BehaviorSubject<News[]>([]);
  @Input('news') set news(news: News[]) {
    this.$news.next(news);
  }
  constructor() {
  }

  ngOnInit() {
    this.$news.next(mockedNews);
  }
}
