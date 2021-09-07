import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {
  registered: boolean;
  user: User;

  constructor() { }

  getRegisteredStatus(currentUser) {
    if(currentUser.registered){
      console.log(`User Registered is${currentUser.registered}`)
    }
  }

  getUserStatus(currentUser) {
    console.table(currentUser);
  }
}
