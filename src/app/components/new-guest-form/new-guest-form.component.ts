import { GuestsOrganizerService } from "./../../services/guests-organizer.service";
import { GuestModel } from "./../../models/GuestModel";
import { Guest } from "./../../interfaces/guest.interface";
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'pk-new-guest-form',
  templateUrl: './new-guest-form.component.html',
  styleUrls: ['./new-guest-form.component.scss']
})
export class NewGuestFormComponent implements OnInit {
  private _model: GuestModel;
  submit: EventEmitter<Guest>;

  constructor(private _guestOrganizerService: GuestsOrganizerService) { }

  ngOnInit() {
    this._model = new GuestModel({});
  }

  onSubmit() {
    const guest = this._model;
    this._guestOrganizerService.getGender(guest)
      .subscribe(res => {
        guest.gender = res.gender;
        this.submit.emit(guest);
        this._model = new GuestModel({});
      })
  }
}
