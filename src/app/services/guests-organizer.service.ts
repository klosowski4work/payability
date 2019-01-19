import { Injectable } from "@angular/core";

import { reduce, groupBy } from "lodash";

import { Guest } from "./../interfaces/guest.interface";

import * as MockGuests from "../../../test/fixtures/MockGuests.json";
import { createSorterByPropertys } from "../common/utils";

@Injectable({
  providedIn: "root"
})
export class GuestsOrganizerService {
  constructor() {}

  getGuests(): Guest[] {
    return ((MockGuests as unknown) as { guests: Guest[] }).guests;
  }

  groupByGender(guests: Guest[]) {
    return reduce(
      groupBy(guests, "gender"),
      (result, value) => [...result, value],
      []
    );
  }

  sortGuests(guests: Guest[], propertys) {
    guests.sort(createSorterByPropertys(propertys));
  }
}
