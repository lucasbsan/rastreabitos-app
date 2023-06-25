import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Habit } from '../model/habit';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent {
  @Input() habit!: Habit;
  @Output() detailsPressed = new EventEmitter<void>();
  @Output() editPressed = new EventEmitter<void>();
  @Output() deletePressed = new EventEmitter<void>();

  details() : void {
    this.detailsPressed.emit();
  }

  edit() : void {
    this.editPressed.emit();
  }

  delete() : void {
    this.deletePressed.emit();
  }
}
