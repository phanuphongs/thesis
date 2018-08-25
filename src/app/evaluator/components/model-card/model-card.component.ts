import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Evaluate} from '../../models/evaluate.model';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss'],
})
export class ModelCardComponent implements OnInit {
  @Input() selected: boolean;
  @Input() model: Evaluate;
  @Output() selectModel = new EventEmitter();


  constructor() { }


  ngOnInit() {
  }

  getBackGround(select, ready) {
    if (!ready) {
      return 'rgb(64, 63, 63)';
    }
    if (select) {
      return 'rgba(0,0,0,0.1)';
    }
    return 'white';
  }

  select(model) {
    if (model.ready) {
      this.selectModel.emit(model);
    }
  }

}
