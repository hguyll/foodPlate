import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/User';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class FoodGroupsGuardService implements CanActivateChild {
  currentUser: User;
  currentRoute;
  group;

  constructor(private userService: UserService) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route);
    console.log(route.queryParams);
    console.log(state.url);
    this.group = route.queryParams.group;
    this.currentUser = this.userService.getUser();
    const valueMet = this.group + 'Met';
    console.log(valueMet);
    return true;
  }
}
