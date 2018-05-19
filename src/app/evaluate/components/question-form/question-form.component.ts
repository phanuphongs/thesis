import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Question} from '../../models/question.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit, OnChanges {
  @Input() question: Question;
  @Output() dataChange = new EventEmitter();
  form: FormGroup;
  formErrors: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.question) {
      this.initForm(changes.question.currentValue);
    }

  }

  ngOnInit() {
  }

  public formChange(): void {
    this.dataChange.emit(this.form.value);
  }

  private initForm(question: Question) {
    this.formErrors = {
      id   : {},
      key: {},
      question: {},
      score: {},
      variables: {},
    };
    this.form = this.formBuilder.group({
      id: [question.id],
      key: [question.key],
      question: [question.question, Validators.required],
      score: [question.score, Validators.required],
      variables: [question.variables, Validators.required],
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
