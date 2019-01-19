import { TestBed } from '@angular/core/testing';

import { GuestsOrganizerService } from './guests-organizer.service';

describe('GuestsOrganizerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuestsOrganizerService = TestBed.get(GuestsOrganizerService);
    expect(service).toBeTruthy();
  });
});
