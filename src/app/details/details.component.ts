import { Component, OnInit } from '@angular/core';
import { Habit } from '../model/habit';
import { ActivatedRoute, Router } from '@angular/router';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';

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
    let habits: Habit[] = WebStorageUtil.get(Constants.HABITS_KEY);

    let idHabit: string = this.route.snapshot.paramMap.get('id')!;

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
