import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {
  @Input() student:any = {
    studentId: '57090021',
    answers: [
      {
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
      },
    ],
  };

  constructor() { }

  ngOnInit() {}

  calculatePoint(student) {
    let total = 0;
    if (!student.answers) {
      return total;
    }
    student.answers.forEach(
      (ele) => {
        total += ele.score;
      },
    );
    return total;
  }

  calculateTotalPoint(student) {
    let total = 0;
    if (student.answers) {
      return total;
    }
    student.answers.forEach(
      (ele) => {
        total += ele.question.score;
      },
    );
    return total;
  }

}
