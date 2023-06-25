
import { Injectable } from '@angular/core'

import { SuggestionPromiseService } from './../services/suggestion-promise.service';
import { Suggestion } from '../model/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor( private suggestionPromiseService: SuggestionPromiseService) {}

  do(suggestion: Suggestion): Promise<Suggestion> {
    return this.suggestionPromiseService.save(suggestion);
  }
}
