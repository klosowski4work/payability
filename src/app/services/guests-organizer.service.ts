import { alternateMerge } from './../common/utils';
import { Injectable } from '@angular/core';

import { reduce, groupBy, flatten } from 'lodash';

import { Guest } from './../interfaces/guest.interface';
import { createSorterByPropertys } from '../common/utils';
import * as MockGuests from '../../../test/fixtures/MockGuests.json';

@Injectable({
  providedIn: 'root'
})
export class GuestsOrganizerService {
  constructor() { }

  getGuests(): Guest[] {
    return ((MockGuests as unknown) as { guests: Guest[] }).guests;
  }

  saveGuests(guests: Guest[]) {
    localStorage.setItem('guests', JSON.stringify(guests));
  }

  alternateByGender(guests: Guest[]) {
    return alternateMerge(...this._groupByGender(guests));
  }

  sortGuests(guests: Guest[], propertys: string[]) {
    return guests.sort(createSorterByPropertys(propertys));
  }

  private _groupByGender(guests: Guest[]) {
    return reduce(
      groupBy(guests, 'gender'),
      (result: any, value: any) => [...result, value],
      []
    );
  }
}
