import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {NxNewsApiService} from '../../services/nx.newsapi.service';
import {Source, SourcesResponse} from '../../models/model.source';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {distinctUntilChanged} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';


@Component({
  selector: 'nx-navigation',
  templateUrl: './nx.navigation.component.html',
  styleUrls: ['./nx.navigation.component.sass']
})
export class NxNavigationComponent implements OnInit {

  $sourceItems: BehaviorSubject<SelectItem[]> = new BehaviorSubject<SelectItem[]>([]);
  $selectedSources: Subject<Source[]> = new Subject<Source[]>();
  $search: BehaviorSubject<string> = new BehaviorSubject<string>('');

  @Output()
  changeSources: EventEmitter<Source[]> = new EventEmitter<Source[]>();

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _service: NxNewsApiService) {

    // throwing events
    this.$selectedSources.subscribe((sources: Source[]) => {
      this.changeSources.emit(sources);
    });
    this.$search.pipe(distinctUntilChanged())
      .subscribe((search: string) => this.search.emit(search));
  }

  ngOnInit(): void {
    this._service.getSources().subscribe((response: SourcesResponse) => {
      if (response.status !== 'ok') {
        this.reset();
        return;
      }
      const sourceItems: SelectItem[] = [];
      for (const source of response.sources) {
        sourceItems.push({
          label: source.name,
          value: source
        });
      }
      this.$sourceItems.next(sourceItems);
    });
  }

  reset() {
    this.$sourceItems.next([]);
    this.$selectedSources.next([]);
  }
}
