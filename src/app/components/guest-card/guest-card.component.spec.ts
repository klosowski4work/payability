import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestModel } from "./../../models/GuestModel";
import { GuestCardComponent } from './guest-card.component';
import { Gender } from "src/app/enums/gender.enum";

describe('GuestCardComponent', () => {
  let component: GuestCardComponent;
  let fixture: ComponentFixture<GuestCardComponent>;
  const MockMaleGuest = {
    name: "Joh",
    gender: Gender.Male,
    language: "PL",
    age: 20,
  }
  const MockFemaleGuest = {
    name: "Mary",
    gender: Gender.Female,
    language: "PL",
    age: 22,
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GuestCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestCardComponent);
    component = fixture.componentInstance;
    component.guest = MockMaleGuest;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should variation return "card--blue"', () => {
    expect(component.variation).toBe('card--blue');
  });

  it('should variation return "card--pink"', () => {
    component.guest = MockFemaleGuest;
    fixture.detectChanges();
    expect(component.variation).toBe('card--pink');
  });

});


