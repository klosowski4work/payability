import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Guest } from './../../interfaces/guest.interface';

@Component({
  selector: 'pk-round-table-view',
  templateUrl: './round-table-view.component.html',
  styleUrls: ['./round-table-view.component.scss']
})
export class RoundTableViewComponent implements OnInit {
  @Input() guests: Guest[] = [];
  @Input() radius: number;
  @Output() swap = new EventEmitter<Guest[]>();
  constructor() { }
  private selectedGuest: Guest;
  ngOnInit() { }

  calcPosition(index: number, count: number) {
    const { radius } = this;
    const { PI, cos, sin } = Math;
    const offset = +radius;
    let x = offset + radius * cos(2 * PI * (index / count))
    let y = offset + radius * sin(2 * PI * (index / count))
    return { 'left.px': Math.round(x), 'top.px': Math.round(y) };
  }

  get cssStyle() {
    const { radius } = this;
    return {
      width: `${2 * radius}px`,
      height: `${2 * radius}px`
    };
  }

  onDrag(event: Event, guest: Guest) {
    this.selectedGuest = guest;
  }

  onDrop(event: Event, guest: Guest) {
    this.swap.emit([this.selectedGuest, guest]);
  }

  allowDrop(event: Event) {
    event.preventDefault();
  }
}
