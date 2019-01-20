import { Component, Input } from '@angular/core';

import { Guest } from './../../interfaces/guest.interface';
import { Gender } from 'src/app/enums/gender.enum';

@Component({
  selector: 'pk-guest-card',
  templateUrl: './guest-card.component.html',
  styleUrls: ['./guest-card.component.scss']
})
export class GuestCardComponent {
  @Input() guest: Guest;

  constructor() { }

  get variation() {
    return this.guest ? `card--${this.guest.gender === Gender.Male ? 'blue' : 'pink'}` : '';
  }
}
