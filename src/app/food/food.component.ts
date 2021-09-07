import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'fp-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(private foodService: FoodService) {
    this.foodService.loadFood()
      .subscribe();
   }

  ngOnInit(): void {
    this.foodService.loadFood().subscribe(data => console.log(data));
  }
}
