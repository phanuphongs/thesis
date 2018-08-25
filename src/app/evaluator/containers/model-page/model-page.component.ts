import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as fromEvaluate from '../../reducers';
import { select, Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { Evaluate } from '../../models/evaluate.model';
import { LoadModel } from '../../actions/evaluate.action';

@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.component.html',
  styleUrls: ['./model-page.component.scss'],
})
export class ModelPageComponent implements OnInit {
  @Output() select = new EventEmitter();
  models: Observable<Evaluate[]>;
  selected: number;

  constructor(private store: Store<fromEvaluate.State>) {
    this.models = store.pipe(select(fromEvaluate.selectAllModels));
  }

  ngOnInit() {
    this.selected = 0;
    this.store.dispatch(new LoadModel());
  }

  public selectModel(model) {
    this.selected = model.id;
    this.select.emit(model.id);
  }

}
