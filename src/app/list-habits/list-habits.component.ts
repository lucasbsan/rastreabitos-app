import { Component, Input } from '@angular/core';
import { Habit } from '../model/habit';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-habits',
  templateUrl: './list-habits.component.html',
  styleUrls: ['./list-habits.component.css']
})
export class ListHabitsComponent {
  @Input() habits!: Array<Habit>;

  constructor(private router: Router) {}

  editHabit(habit: Habit): void {
    alert("O hábito "+ habit.description + " será editado");
  }

  detailsHabit(habit: Habit): void {
    this.router.navigate(['/details', habit?.id]);
  }
}
