import { Component, OnInit } from "@angular/core";

import { Guest } from "./../../interfaces/guest.interface";
import { GuestsOrganizerService } from "./../../services/guests-organizer.service";

@Component({
  selector: "pk-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.sass"]
})
export class HomePageComponent implements OnInit {
  guests: Guest[];

  constructor(private _guestOrganizer: GuestsOrganizerService) {}

  ngOnInit() {
    this.guests = this._guestOrganizer.getGuests();
  }
}
