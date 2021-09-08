import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuardService {
  currentUser: User;

  constructor(private userService: UserService, public router: Router) {
  }

  canActivate(): Boolean {
    this.currentUser = this.userService.getUser();
    if(this.currentUser.registered === false) {
      this.router.navigate(['register']);
      alert('you have not registered yet! You will be redirected to the register page.');
      return false;
    } else {
      return true;
    }
  }
}
