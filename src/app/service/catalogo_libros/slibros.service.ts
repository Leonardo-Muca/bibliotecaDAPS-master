import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SlibrosService {
  url = environment.url + '/libro';

  constructor(private http: HttpClient) { }

  recuperarlibros() {
    return this.http.get(this.url).toPromise();
  }

  altalib(libro) {
    return this.http.post(this.url, libro).toPromise();
  }

  modificarlib(libro) {
    return this.http.put(this.url, libro).toPromise();
  }
}

