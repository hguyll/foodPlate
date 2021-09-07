import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from './models/User';
import { UserService } from './services/user.service';
import { RequirementsService } from './services/requirements.service';
import { Requirement } from './models/requirement';
@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
  export class AppComponent implements OnInit {
    user: User;
    private requirements: Array<Requirement>;

    constructor(private userService: UserService, private titleService: Title, private reqsService: RequirementsService) {
      this.user = userService.getUser();
    }

  ngOnInit() {
    this.titleService.setTitle('Welcome to FoodPlate');
    this.userService.getUser();
    this.reqsService.getRequirements().subscribe(
      reqs => {
        this.requirements = reqs;
        console.table(this.requirements);
        console.log(this.requirements[1].ageGroup);
      });
  }
}
