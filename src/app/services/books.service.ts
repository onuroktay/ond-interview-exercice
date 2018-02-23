import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Book} from '../model/book';

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('https://reqres.in/api/books')
      .map(response => {
        return response;

      });
      // .do(data => console.log('All : ' + JSON.stringify(response)))
      // .catch(this.handleError);
  }
}
