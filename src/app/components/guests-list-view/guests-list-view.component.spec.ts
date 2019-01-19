import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsListViewComponent } from './guests-list-view.component';

describe('GuestsListViewComponent', () => {
  let component: GuestsListViewComponent;
  let fixture: ComponentFixture<GuestsListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
