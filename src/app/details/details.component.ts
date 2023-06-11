import { Component, OnInit } from '@angular/core';
import { Habit } from '../model/habit';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  habit!: Habit;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let habits = [
      new Habit(1, "Comer fruta", "Diário", "Alimentação", false),
      new Habit(2, "Comer salada", "Diário", "Alimentação", false),
      new Habit(3, "Ler um livro", "Mensal", "Leitura", false),
      new Habit(4, "Fazer uma viagem", "Anual", "Viagem", false),
    ];

    let idHabit: number = +this.route.snapshot.paramMap.get('id')!;

    habits = habits.filter((h) => {
      return h.id === idHabit;
    });

    if(habits.length == 0) {
      alert('Hábito não encontrado!');
      this.router.navigate(['']);
    } else {
      this.habit = habits[0];
    }
  }
}
