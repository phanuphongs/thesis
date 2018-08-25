import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StudentEffects } from './evaluate.effects';

describe('StudentService', () => {
  let actions$: Observable<any>;
  let effects: StudentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StudentEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(StudentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
