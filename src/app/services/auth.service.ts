import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  private token: string;

  constructor(private http: HttpClient) {
  }

  login(credentials): Observable<any> {
    return this.http.post('https://reqres.in/api/login', credentials)
      .map(response => {
        // response = JSON.stringify(response);
        this.token = response.token;
        localStorage.setItem('token', this.token);
        return response;
      }).catch(e => {
        return Observable.of(e.error);
      });
  }
}

