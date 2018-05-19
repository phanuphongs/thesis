import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {from, Observable} from 'rxjs';
import {Question} from '../../models/question.model';

import * as QuestionActions from '../../actions/question.actions';
import * as fromEvaluate from '../../reducers';
import * as StudentActions from '../../actions/student.actions';
import {Update} from '@ngrx/entity';


@Component({
  selector: 'app-question-form-page',
  templateUrl: './question-form-page.component.html',
  styleUrls: ['./question-form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionFormPageComponent implements OnInit {
  questions: Observable<Question[]>;
  selected: Observable<number>;


  constructor(private store: Store<fromEvaluate.State>) {
    this.questions = store.pipe(select(fromEvaluate.selectAllQuestions));
    this.selected = store.pipe(select(fromEvaluate.selectedQuestion));
  }

  ngOnInit() {
    this.store.dispatch(
      new QuestionActions.InitialQuestion(),
    );
  }

  public add(): void {
    this.store.dispatch(
      new QuestionActions.AddQuestion(),
    );
  }

  public delete(id: number): void {
    this.store.dispatch(
      new QuestionActions.DeleteQuestion({ id }),
    );
  }

  public formChange(question: Question): void {
    this.store.dispatch(
      new QuestionActions.UpdateQuestion(
        {
          question: { id: question.id, changes: question },
        },
      ),
    );
  }

  public selectQuestion(id: number): void {
    this.store.dispatch(new QuestionActions.SelectQuestion({ id }));
  }

}
