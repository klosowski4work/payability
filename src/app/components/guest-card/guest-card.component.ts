import { Component, OnInit, Input } from '@angular/core';

import { Guest } from './../../interfaces/guest.interface';
import { Gender } from 'src/app/enums/gender.enum';

@Component({
  selector: 'pk-guest-card',
  templateUrl: './guest-card.component.html',
  styleUrls: ['./guest-card.component.scss']
})
export class GuestCardComponent implements OnInit {
  @Input() guest: Guest;
  @Input() color: string;

  constructor() { }

  ngOnInit() {

  }

  get variation() {
    return `card--${this.guest.gender === Gender.Male ? 'blue' : 'pink'}`;
  }
}
