import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.scss']
})
export class ResultDetailComponent implements OnInit {
  @Input() answer:any = {
    question: {
      id: 1,
      score: 5,
      question: "ab+b'",
    },
    score: 4,
    answer: [
      "ab+b'",
      "b",
    ],
  };
  constructor() { }

  ngOnInit() {
  }

  getAnswer(answer) {
    let temp = '';
    if (!answer) {
      return '';
    }
    answer.forEach(
      (ele) => {
        temp += `${ele}\n`;
      },
    );
    return temp.substring(0, temp.length - 1);
  }

  getScore(score) {
    if (!score) {
      return 0;
    }
  }

}
