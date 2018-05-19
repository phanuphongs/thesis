import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.component.html',
  styleUrls: ['./model-page.component.scss'],
})
export class ModelPageComponent implements OnInit {
  @Output() select = new EventEmitter();
  selected: number;

  constructor() { }

  ngOnInit() {
    this.selected = 0;
  }

  public selectModel(id: number) {
    this.selected = id;
    this.select.emit(id);
  }

}
