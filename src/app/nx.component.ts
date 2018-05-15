import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nx-root',
  templateUrl: './nx.component.html',
  styleUrls: ['./nx.component.sass']
})
export class NxComponent {
  rowSize = 20;
  $totalNews: BehaviorSubject<number> = new BehaviorSubject<number>(200);

  /**
   * this function can not be static
   * view can not call static functions
   * @param evt
   */
   paginationChanged(evt: any) {
    // get new news here data here
    console.log(`pagination event ${JSON.stringify(evt)}`);
  }
}
