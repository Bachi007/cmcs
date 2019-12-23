import { TestBed } from '@angular/core/testing';

import { AddpeopleService } from './addpeople.service';

describe('AddpeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddpeopleService = TestBed.get(AddpeopleService);
    expect(service).toBeTruthy();
  });
});
