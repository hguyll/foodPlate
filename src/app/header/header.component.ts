import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [Title]
})
export class HeaderComponent implements OnInit {
  @Input()
  user: User;
  
  constructor(private titleService: Title) {
    this.titleService.setTitle("Welcome to FoodPlate!");
   }

  ngOnInit(): void {
  }

}
