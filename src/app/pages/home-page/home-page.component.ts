import { Component, OnInit } from '@angular/core';

import { Guest } from './../../interfaces/guest.interface';
import { GuestsOrganizerService } from './../../services/guests-organizer.service';
import { SpotsOption } from 'src/app/components/setting-guest-spot-options/interfaces/spots-option.interface';
import { SettingGuestSpotsOption } from 'src/app/enums/setting-guest-spots-option.enum';

@Component({
  selector: 'pk-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  guests: Guest[];
  options: SpotsOption[] = [
    {
      label: 'Alternate by gender',
      value: SettingGuestSpotsOption.AlternateByGender,
      enabled: true
    },
    {
      label: 'Sort by age',
      value: SettingGuestSpotsOption.SortByAge,
      enabled: false
    },
    {
      label: 'Sort by language',
      value: SettingGuestSpotsOption.SortByLanguage,
      enabled: false
    }
  ];

  constructor(private _guestOrganizer: GuestsOrganizerService) {}

  ngOnInit() {
    this.guests = this._guestOrganizer.getGuests();
  }

  onChangeOptions(option: SettingGuestSpotsOption) {
    const selectedOption = this.options.find(el => el.value === option);
    selectedOption.enabled = !selectedOption.enabled;
    this.applyOptions();
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
}
