import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed, fakeAsync, tick, async } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { async as _async } from "rxjs/internal/scheduler/async";
import { of } from "rxjs";


import { GuestsOrganizerService } from "./../../services/guests-organizer.service";
import { Guest } from "./../../interfaces/guest.interface";

import { NewGuestFormComponent } from './new-guest-form.component';

class GuestsOrganizerServiceStub {
  getGender() {
    return of({ gender: 'male' }, _async)
  }
}

describe('NewGuestFormComponent', () => {
  let component: NewGuestFormComponent;
  let fixture: ComponentFixture<NewGuestFormComponent>;

  let submitEl: DebugElement;
  let nameEl: DebugElement;
  let originCountryEl: DebugElement;
  let languageEl: DebugElement;
  let ageEl: DebugElement;




  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: GuestsOrganizerService,
        useClass: GuestsOrganizerServiceStub
      }],
      declarations: [NewGuestFormComponent],
      imports: [
        HttpClientModule,
        FormsModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGuestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    submitEl = fixture.debugElement.query(By.css('button[type=submit]'));
    nameEl = fixture.debugElement.query(By.css('[id=name]'));
    originCountryEl = fixture.debugElement.query(By.css('[id=originCountry]'));
    languageEl = fixture.debugElement.query(By.css('[id=language]'));
    ageEl = fixture.debugElement.query(By.css('[id=age]'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Entering data and emit addGuest event', () => {
    let guest: Guest;
    nameEl.nativeElement.value = "John";
    originCountryEl.nativeElement.value = "USA";
    languageEl.nativeElement.value = "EN";
    ageEl.nativeElement.value = "25";

    component.addGuest.subscribe((value) => guest = value);

    component.onAddGuest();
    submitEl.triggerEventHandler('click', null);

  });

});