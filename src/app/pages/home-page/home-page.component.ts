import { Component, OnInit } from '@angular/core';

import { Guest } from './../../interfaces/guest.interface';
import { GuestsOrganizerService } from './../../services/guests-organizer.service';
import { SpotsOption } from 'src/app/components/setting-guest-spot-options/interfaces/spots-option.interface';
import { SettingGuestSpotsOption } from 'src/app/enums/setting-guest-spots-option.enum';
import { SPOTS_OPTIONS } from './constants/spots-options.constant';

@Component({
  selector: 'pk-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  guests: Guest[];
  options: SpotsOption[] = SPOTS_OPTIONS;

  constructor(private _guestOrganizer: GuestsOrganizerService) { }

  ngOnInit() {
    this.guests = this._guestOrganizer.loadGuests();
  }

  onChangeOptions(option: SettingGuestSpotsOption) {
    const selectedOption = this.options.find(el => el.value === option);
    selectedOption.enabled = !selectedOption.enabled;
  }

  applyOptions() {
    const options = this.options
      .filter(option => option.enabled)
      .map(option => option.value);
    if (options[0] === SettingGuestSpotsOption.AlternateByGender) {
      this.guests = this._guestOrganizer.sortGuests(this.guests, options);
      this.guests = this._guestOrganizer.alternateByGender(this.guests);
    } else {
      this._guestOrganizer.sortGuests(this.guests, options);
    }
  }

  swapGuests(guestsToSwap: Guest[]) {
    const {
      0: firstGuest,
      1: secondGuest,
    } = guestsToSwap
    const firstGuestIndex = this.guests.findIndex((guest) => firstGuest === guest)
    const secondGuestIndex = this.guests.findIndex((guest) => secondGuest === guest)
    this.guests[firstGuestIndex] = secondGuest;
    this.guests[secondGuestIndex] = firstGuest;
  }

  saveState() {
    this._guestOrganizer.saveGuests(this.guests);
  }

  loadState() {
    this.guests = this._guestOrganizer.loadGuests();
  }

  addGuest(guest: Guest) {
    this.guests.push(guest);
  }

}
