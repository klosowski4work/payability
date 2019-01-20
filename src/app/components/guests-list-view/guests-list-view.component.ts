import { Component, OnInit, Input } from '@angular/core';

import { Guest } from './../../interfaces/guest.interface';

@Component({
  selector: 'pk-guests-list-view',
  templateUrl: './guests-list-view.component.html',
  styleUrls: ['./guests-list-view.component.scss']
})
export class GuestsListViewComponent implements OnInit {
  @Input() guests: Guest[] = [];;
  constructor() { }

  ngOnInit() {
  }

}
