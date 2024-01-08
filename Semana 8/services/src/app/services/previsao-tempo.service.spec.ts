import { TestBed } from '@angular/core/testing';

import { PrevisaoTempoService } from './previsao-tempo.service';

describe('PrevisaoTempoService', () => {
  let service: PrevisaoTempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevisaoTempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
