import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormPageComponent } from './student-form-page.component';

describe('StudentFormPageComponent', () => {
  let component: StudentFormPageComponent;
  let fixture: ComponentFixture<StudentFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
