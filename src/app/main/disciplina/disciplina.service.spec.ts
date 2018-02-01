import { TestBed, inject } from '@angular/core/testing';
import { DisciplinaService } from '../services/disciplina.service';

describe('disciplinaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisciplinaService]
    });
  });

  it('should be created', inject([DisciplinaService], (service: DisciplinaService) => {
    expect(service).toBeTruthy();
  }));
});
