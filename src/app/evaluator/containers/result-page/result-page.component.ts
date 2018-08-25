import { Component, OnInit } from '@angular/core';
import * as fromEvaluate from '../../reducers';
import {select, Store} from '@ngrx/store';
import * as ResultAction from '../../actions/result.action';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  results: any;
  constructor(private store: Store<fromEvaluate.State>) {
    this.results = store.pipe(select(fromEvaluate.selectAllResults));
  }

  ngOnInit() {
  }


}
