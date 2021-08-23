import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logoAlt = "FoodPlate Logo";
  versionString: string = '1.0.0';
  icon: string = 'assets/assets/images/icons/icons-29.png';
  isCurrent: Boolean = false;

  constructor() { }

  ngOnInit(): void { }
}
