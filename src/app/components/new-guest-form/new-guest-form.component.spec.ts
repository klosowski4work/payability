import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGuestFormComponent } from './new-guest-form.component';

describe('NewGuestFormComponent', () => {
  let component: NewGuestFormComponent;
  let fixture: ComponentFixture<NewGuestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGuestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGuestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
