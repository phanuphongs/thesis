import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class ApiService {
  constructor(protected http: HttpClient) {
  }

  public setHeaders(contentType = 'application/json'): HttpHeaders {
    let header = new HttpHeaders({
      'Content-Type': contentType,
    });
    return header;
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  get(path: string, params?: HttpParams): Observable<any> {
    return this.http.get(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders() });
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() },
    );
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() },
    );
  }

  postFile(path: string, body: any): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      body,
    );
  }


  postAuthen(path: string, body: Object = {}, headType?: string): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      body,
      { headers: this.setHeaders(headType) },
    );
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders() },
    );
  }
}
