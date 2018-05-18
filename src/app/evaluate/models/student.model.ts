import {QuestionModel} from './question.model';

export interface StudentModel {
  id?: string;
  score?: number;
  answers: {
    question: number | QuestionModel,
    answer: string,
  }[];
}
