import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nx-paginator',
  templateUrl: './nx.paginator.component.html',
  styleUrls: ['./nx.paginator.component.sass']
})
export class NxPaginatorComponent implements OnInit {

  $rowSize: BehaviorSubject<number> = new BehaviorSubject<number>(20);
  $totalNews: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  @Input('rowSize') set rowSize(size: number) {
    this.$rowSize.next(size);
  }

  @Input('totalNews') set totalNews(total: number) {
    this.$totalNews.next(total);
  }

  @Output()
  pageChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

}
