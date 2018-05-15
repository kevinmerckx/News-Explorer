import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxNewsTableComponent } from './nx.newstable.component';

describe('NewstableComponent', () => {
  let component: NxNewsTableComponent;
  let fixture: ComponentFixture<NxNewsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxNewsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxNewsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
