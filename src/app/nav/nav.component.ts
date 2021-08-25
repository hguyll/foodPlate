import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isActive: Boolean = true;

  constructor() { }

  ngOnInit(): void { }

}
