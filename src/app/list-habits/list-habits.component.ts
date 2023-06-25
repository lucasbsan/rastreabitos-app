import { Component, Input } from '@angular/core';
import { Habit } from '../model/habit';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitStorageService } from '../habit-editor/habit-storage.service';

@Component({
  selector: 'app-list-habits',
  templateUrl: './list-habits.component.html',
  styleUrls: ['./list-habits.component.css'],
  providers: [HabitStorageService]
})
export class ListHabitsComponent {
  @Input() habits!: Array<Habit>;

  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private router: Router, private habitService: HabitStorageService) {}

  editHabit(habit: Habit): void {
    this.router.navigate(['/habit', habit?.id]);
  }

  detailsHabit(habit: Habit): void {
    this.router.navigate(['/details', habit?.id]);
  }

  deleteHabit(description: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + description
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.habitService.delete(description);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Opps! O item não pode ser removido!';
    }
    this.habits = this.habitService.getHabits();
  }
}
