import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { take } from 'rxjs/operators';

import { GuestsOrganizerService } from "./../../services/guests-organizer.service";
import { GuestModel } from "./../../models/GuestModel";
import { Gender } from "src/app/enums/gender.enum";
import { Guest } from "./../../interfaces/guest.interface";

@Component({
  selector: 'pk-new-guest-form',
  templateUrl: './new-guest-form.component.html',
  styleUrls: ['./new-guest-form.component.scss']
})
export class NewGuestFormComponent implements OnInit {
  private _model: GuestModel;

  @Output()
  addGuest = new EventEmitter<Guest>();

  constructor(private _guestOrganizerService: GuestsOrganizerService) { }

  ngOnInit() {
    this._model = new GuestModel({});
  }

  onAddGuest() {
    const guest = this._model;
    this._guestOrganizerService
      .getGender(guest)
      .pipe(
        take(1)
      )
      .subscribe(res => {
        guest.gender = res.gender as Gender;
        this.addGuest.emit(guest);
        this._model = new GuestModel({});
      })
  }
}

