import { alternateMerge } from './../common/utils';
import { Injectable } from '@angular/core';

import { reduce, groupBy, flatten } from 'lodash';

import { Guest } from './../interfaces/guest.interface';
import { createSorterByPropertys } from '../common/utils';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { CONFIG } from "src/config";

@Injectable({
  providedIn: 'root'
})
export class GuestsOrganizerService {
  constructor(private _http: HttpClient) { }

  loadGuests(): Guest[] {
    return JSON.parse(localStorage.getItem('guests'));
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

  getGender(guest: Guest): Observable<any> {
    const searchParams = new URLSearchParams();
    Object.keys(guest).forEach(key => {
      if (guest[key]) {
        searchParams.set(key, guest[key])
      }
    });
    return this._http.get(`${CONFIG.API_URL}?${searchParams.toString()}`);
  }

  addGuest(guest: Guest) {

  }

  private _groupByGender(guests: Guest[]) {
    return reduce(
      groupBy(guests, 'gender'),
      (result: any, value: any) => [...result, value],
      []
    );
  }

}
