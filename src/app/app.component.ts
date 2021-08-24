import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
  export class AppComponent implements OnInit {
    @Output()
    user: User;
    constructor(userService: UserService) {
      this.user = userService.getUser();
    }

  ngOnInit() {  }
}
