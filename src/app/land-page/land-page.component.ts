import { Component, OnInit } from '@angular/core';
import { Habit } from '../model/habit';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  isListEmpty = true;
  habits!: Array<Habit>

  ngOnInit(): void {
    this.habits = [
      new Habit(1, "Comer fruta", "Diário", "Alimentação", false),
      new Habit(2, "Comer salada", "Diário", "Alimentação", false),
      new Habit(3, "Ler um livro", "Mensal", "Leitura", false),
      new Habit(4, "Fazer uma viagem", "Anual", "Viagem", false),
    ];
    if(this.habits.length > 0) this.isListEmpty = false;
  }
}
