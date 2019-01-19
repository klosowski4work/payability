import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestsOrganizerService {

  constructor() { }

  getGuests() {
    return [{
      name: 'John',
      age: 30,
      language: 'PL',
      originCountry: 'PL'
    }];
  };

}
