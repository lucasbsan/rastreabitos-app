import { BehaviorSubject,  Observable} from 'rxjs';

import { Constants } from '../util/constants';
import { Injectable } from '@angular/core';
import { Habit } from '../model/habit';
import { WebStorageUtil } from '../util/web-storage-util';

@Injectable()
export class HabitStorageService {
  habits!: Habit[];
  constructor() {
    this.habits = WebStorageUtil.get(Constants.HABITS_KEY);
  }

  save(habit: Habit) {
    this.habits = WebStorageUtil.get(Constants.HABITS_KEY);
    this.habits.push(habit);
    WebStorageUtil.set(Constants.HABITS_KEY, this.habits);
  }

  update(habit: Habit) {
    this.habits = WebStorageUtil.get(Constants.HABITS_KEY);
    this.delete(habit.description);
    this.save(habit);
  }

  delete(description: string): boolean {
    this.habits = WebStorageUtil.get(Constants.HABITS_KEY);
    this.habits = this.habits.filter((h) => {
      return h.description?.valueOf() != description?.valueOf();
    });

    WebStorageUtil.set(Constants.HABITS_KEY, this.habits);
    return true;
  }

  isExist(value: String): boolean {
    this.habits = WebStorageUtil.get(Constants.HABITS_KEY);
    for (let h of this.habits) {
      if (h.description?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getHabits(): Habit[] {
    this.habits = WebStorageUtil.get(Constants.HABITS_KEY);
    return this.habits;
  }

  getHabitById(value: String): Habit {
    this.habits = WebStorageUtil.get(Constants.HABITS_KEY);
    for (let h of this.habits) {
      if (h.id?.valueOf() == value?.valueOf()) {
        return h;
      }
    }
    return new Habit('', '', '', false);
  }
}
