import { TestBed } from '@angular/core/testing';

import { GymnastsService } from './gymnasts.service';

describe('GymnastsService', () => {
  let service: GymnastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymnastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
