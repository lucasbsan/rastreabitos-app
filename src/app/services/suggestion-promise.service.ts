import { HttpClient, HttpHeaders }  from '@angular/common/http'

import { Injectable } from '@angular/core'
import { Suggestion } from '../model/suggestion'
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuggestionPromiseService {
  URL = 'http://localhost:3000/sugestoes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  async getAll(): Promise<Suggestion[]> {
    const get$ = this.httpClient.get<Suggestion[]>(this.URL);
    return await lastValueFrom(get$);
  }

  async save(suggestion: Suggestion): Promise<Suggestion> {
    const post$ = this.httpClient
                    .post<Suggestion>(
                      this.URL,
                      JSON.stringify(suggestion),
                      this.httpOptions
                    );
    return await lastValueFrom(post$);
  }

}
