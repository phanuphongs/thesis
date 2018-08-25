import {
  AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild,
  ViewChildren
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from '../../../evaluator/models/question.model';
import { Student } from '../../../evaluator/models/student.model';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit, OnChanges {
  @Input() questions: Question[];
  @Input() student: Student;
  @Input() showStudentScore: boolean;
  @Output() dataChange = new EventEmitter();
  form: FormGroup;
  formErrors: any;
  answers: any = {};

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.student) {
      this.initForm(changes.student.currentValue);
      this.answers = {
        ...changes.student.currentValue.answers,
      };
    }
    if (changes.questions) {
      const keys = Object.keys(this.answers);
      changes.questions.currentValue.forEach(
        (ele) => {
          if (keys.indexOf(`${ele.id}`) < 0) {
            this.answers[ele.id] = {
              question: ele,
              answer: '',
              score: '',
              expand: false,
            };
          }
        },
      );
    }
  }

  ngOnInit() {}

  public open(id): void {
    this.answers[id] = {
      ...this.answers[id],
      expand: true,
    };
  }

  public close(id): void {
    this.answers[id] = {
      ...this.answers[id],
      expand: false,
    };
  }

  public formChange(): void {
    const student = {
      ...this.form.value,
      answers: this.answers,
    };
    this.dataChange.emit(student);
  }

  private initForm(student: Student): void {
    this.formErrors = {
      id   : {},
      studentId: {},
    };
    this.form = this.formBuilder.group({
      id: [student.id],
      studentId: [student.studentId],
    });
    this.form.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }

  private onFormValuesChanged(): void {
    for (const field in this.formErrors) {
      if (!this.formErrors.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.formErrors[field] = {};

      // Get the control
      const control = this.form.get(field);

      if (control && control.dirty && !control.valid) {
        this.formErrors[field] = control.errors;
      }
    }
  }

}
