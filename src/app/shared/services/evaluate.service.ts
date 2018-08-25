import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {from, Observable, Observer} from 'rxjs';
import {Evaluate} from '../../evaluator/models/evaluate.model';

@Injectable()
export class EvaluateService {

  constructor(private apiService: ApiService) {}

  uploadDatasetFile(title, questions, students, questionFile, studentFile) {
    const formData: FormData = new FormData();
    if (questionFile) {
      formData.append('questionFile', questionFile, questionFile.name);
    } else {
      formData.append('questionFile', '');
    }
    if (studentFile) {
      formData.append('studentFile', studentFile, studentFile.name);
    } else {
      formData.append('studentFile', '');
    }

    formData.append('title', title);
    formData.append('question', JSON.stringify(questions));
    formData.append('student', JSON.stringify(students));
    return this.apiService.postFile(
      'dataset/',
      formData,
    );
  }

  uploadTestFile(model, questions, students, questionFile, studentFile) {
    const formData: FormData = new FormData();
    if (questionFile) {
      formData.append('questionFile', questionFile, questionFile.name);
    } else {
      formData.append('questionFile', '');
    }
    if (studentFile) {
      formData.append('studentFile', studentFile, studentFile.name);
    } else {
      formData.append('studentFile', '');
    }
    formData.append('question', JSON.stringify(questions));
    formData.append('student', JSON.stringify(students));
    return this.apiService.postFile(
      `predict/${model}/`,
      formData,
    );
  }

  loadModel(): Observable<Evaluate[]> {
    return this.apiService.get(
      'predict/',
    );
  }

  selectModel(id) {
    return this.apiService.post(
      `predict/${id}/`,
    );
  }

}
