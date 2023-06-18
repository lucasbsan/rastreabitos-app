import { Component, OnInit } from '@angular/core';
import { Habit } from '../model/habit';
import { Constants } from '../util/constants';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  isListEmpty = true;
  habits!: Array<Habit>

  ngOnInit(): void {
    this.habits = WebStorageUtil.get(Constants.HABITS_KEY);
    if(this.habits.length > 0) this.isListEmpty = false;
  }
}
