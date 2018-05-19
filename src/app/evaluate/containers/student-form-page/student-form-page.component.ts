import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as fromEvaluate from '../../reducers';
import * as StudentActions from '../../actions/student.actions';
import { Observable } from 'rxjs';
import { Student } from '../../models/student.model';
import {Question} from '../../models/question.model';

@Component({
  selector: 'app-student-form-page',
  templateUrl: './student-form-page.component.html',
  styleUrls: ['./student-form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentFormPageComponent implements OnInit {
  students: Observable<Student[]>;
  questions: Observable<Question[]>;
  selected: Observable<number>;

  constructor(private store: Store<fromEvaluate.State>) {
    this.students = store.pipe(select(fromEvaluate.selectAllStudents));
    this.questions = store.pipe(select(fromEvaluate.selectAllQuestions));
    this.selected = store.pipe(select(fromEvaluate.selectedStudent));
  }

  ngOnInit() {
    this.store.dispatch(
      new StudentActions.InitialStudent(),
    );
  }

  public add(): void {
    this.store.dispatch(
      new StudentActions.AddStudent(),
    );
  }

  public delete(id: number): void {
    this.store.dispatch(new StudentActions.DeleteStudent({ id }));
  }

  public formChange(data: Student): void {
    this.store.dispatch(
      new StudentActions.UpdateStudent(
        {
          student: {
            id: data.id,
            changes: data,
          },
        },
      ),
    );
  }

  public selectStudent(id: number): void {
    this.store.dispatch(new StudentActions.SelectStudent({ id }));
  }

}
