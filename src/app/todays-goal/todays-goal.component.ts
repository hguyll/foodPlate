import { Component, OnInit } from '@angular/core';
import { TodaysGoalService } from '../services/todays-goal.service';

@Component({
  selector: 'fp-todays-goal',
  templateUrl: './todays-goal.component.html',
  styleUrls: ['./todays-goal.component.css']
})
export class TodaysGoalComponent implements OnInit {
  goals: Array<String> = [
    'Eat more fruit',
    'Master rxjs',
    'Eat more vegetables',
    'Eat more protein',
    'Eat more grains',
    'Exercise'
  ]

  constructor(private todaysGoalService: TodaysGoalService) { }
  ngOnInit(): void { }

  sendGoal(goal): void {
    this.todaysGoalService.sendGoal(goal);
  }

  clearGoal(): void {
    this.todaysGoalService.clearGoal();
  }
}
