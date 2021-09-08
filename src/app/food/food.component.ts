import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../models/food';
@Component({
  selector: 'fp-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [FoodService]
})
export class FoodComponent implements OnInit {
  isLoading: boolean = true;
  errorMessage: string;
  foodList: Food[];
  foodGroups: Set<string> = new Set();

  constructor(private foodService: FoodService) {
    this.foodService.loadFood()
      .subscribe();
  }

  ngOnInit(): void {
    this.getFood();
  }

  getFood(): void {
    this.foodService.getAllFoods<Food[]>()
      .subscribe(
        (food) => {
          this.foodList = food;
        },
        (error) => {
          this.errorMessage = error.message;
          this.handleError(this.errorMessage);
        },
        () => this.isLoading = false
      );
  }

  getFoodGroups(food): void {
    food.forEach(food => {
      const group = food.group;
      this.foodGroups.add(group);
    });
    console.log(this.foodGroups);
  }

  handleError(err): void {
    console.log(err);
  }

}
