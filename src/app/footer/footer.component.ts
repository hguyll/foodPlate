import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodaysGoalService } from '../services/todays-goal.service';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  goal: any;
  icon: string = 'assets/assets/images/icons/icons-29.png';
  isCurrent: Boolean = false;
  logoAlt = "FoodPlate Logo";
  subscription: Subscription;
  versionString: string = '1.0.0';

  constructor(private todaysGoalService: TodaysGoalService) { 
    this.subscription = this.todaysGoalService.getGoal()
      .subscribe(goal => {
        this.goal = goal;
      });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clearGoal(): void {
    this.todaysGoalService.clearGoal();
  }

  moreInfo() {
    alert('For more info see choosemyplate.gov');
  }
}
