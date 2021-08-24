import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'fp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Output()
  @Input()
  user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
