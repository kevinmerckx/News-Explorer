import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxNavigationComponent } from './nx.navigation.component';

describe('NxNavigationComponent', () => {
  let component: NxNavigationComponent;
  let fixture: ComponentFixture<NxNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
