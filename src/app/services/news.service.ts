import { HttpClient }  from '@angular/common/http'

import { Injectable } from '@angular/core'
import { Observable, catchError } from 'rxjs';
import { News } from '../model/news';
import { ErrorUtil } from '../util/error-util';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  URL = 'http://localhost:3000/novidades';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<News[]> {
    return this.httpClient.get<News[]>(this.URL)
      .pipe(
        catchError(ErrorUtil.handleError)
      );
  }
}
