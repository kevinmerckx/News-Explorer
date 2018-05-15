import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxPaginatorComponent } from './nx.paginator.component';

describe('PaginatorComponent', () => {
  let component: NxPaginatorComponent;
  let fixture: ComponentFixture<NxPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
