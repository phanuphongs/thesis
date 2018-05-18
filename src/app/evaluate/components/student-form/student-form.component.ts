import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {QuestionModel} from '../../models/question.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit, OnChanges {
  @Input() questions: QuestionModel[];
  @Input() index: number;
  @Output() dataChange: any;
  form: FormGroup;
  formErrors: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const answers = changes.questions.currentValue.map(
      (ele) => {
        return this.formBuilder.group({
          question: ele,
          answer: '',
          score: '',
        });
      },
    );
    this.initForm(answers);
  }

  private initForm(answers = []) {
    this.formErrors = {
      id   : {},
      answer: {},
      score: {},
    };
    this.form = this.formBuilder.group({
      id: [''],
      answers: this.formBuilder.array(answers),
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
