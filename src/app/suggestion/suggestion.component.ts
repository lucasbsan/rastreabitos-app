import { SuggestionPromiseService } from './../services/suggestion-promise.service';
import { SuggestionService } from './suggestion.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Suggestion } from '../model/suggestion';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  suggestion!: Suggestion;
  suggestions?: Suggestion[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private suggestionService: SuggestionService,
    private suggestionPromiseService: SuggestionPromiseService
  ) {}

  ngOnInit(): void {
    this.suggestion = new Suggestion('','');
    this.suggestionPromiseService
      .getAll()
      .then((s: Suggestion[]) => {
        this.suggestions = s;
      })
      .catch((e) => {
        alert('Ops, não temos sugestões a mostrar!')
      });
  }

  onSubmit() {
    this.suggestionService
      .do(this.suggestion)
      .then((result) => {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = `Obrigado ${result.name} pela sugestão`;
      })
      .catch((e) => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = 'Ops! Houve alguma problema com a sugestão';
      })
      .finally(() => {
        this.form.reset();
        this.suggestion = new Suggestion ('','');
        this.suggestionPromiseService
          .getAll()
          .then((s: Suggestion[]) => {
            this.suggestions = s;
          })
          .catch((e) => {
            alert('Ops, não temos sugestões a mostrar!')
          });
      });
  }
}
