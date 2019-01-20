import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundTableViewComponent } from './round-table-view.component';

describe('RoundTableViewComponent', () => {
  let component: RoundTableViewComponent;
  let fixture: ComponentFixture<RoundTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
