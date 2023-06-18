import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Shared } from '../util/shared';
import { Habit } from '../model/habit';
import { HabitStorageService } from './habit-storage.service';
import { ActivatedRoute } from '@angular/router';

import * as M from 'materialize-css';

@Component({
  selector: 'app-habit-editor',
  templateUrl: './habit-editor.component.html',
  styleUrls: ['./habit-editor.component.css'],
  providers: [HabitStorageService]
})
export class HabitEditorComponent implements OnInit, AfterViewChecked {
  @ViewChild('form') form!: NgForm;

  habit!: Habit;

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private habitService: HabitStorageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();

    let idHabit: string = this.route.snapshot.paramMap.get('id')!;
    if(idHabit) {
      this.onEdit(this.habitService.getHabitById(idHabit));
      M.updateTextFields();
    } else {
      this.habit = new Habit('', '', '', false);
    }
  }

  ngAfterViewChecked(): void {
    M.updateTextFields();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.habitService.isExist(this.habit.description)) {
      this.habitService.save(this.habit);
    } else {
      this.habitService.update(this.habit);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Hábito cadastrado com sucesso!';

    this.form.reset();
    this.habit = new Habit('', '', '', false);
  }

  onEdit(habit: Habit) {
    let clone = Habit.clone(habit);
    this.habit = clone;
  }
}
