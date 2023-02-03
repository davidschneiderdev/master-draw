import { TestBed } from '@angular/core/testing';

import { DailyDrawingServiceService } from './metApi.service';

describe('DailyDrawingServiceService', () => {
  let service: DailyDrawingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyDrawingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
