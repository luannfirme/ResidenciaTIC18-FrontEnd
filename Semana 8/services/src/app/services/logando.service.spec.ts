import { TestBed } from '@angular/core/testing';

import { LogandoService } from './logando.service';

describe('LogandoService', () => {
  let service: LogandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
