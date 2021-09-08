import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Goal } from '../models/goal';
import { GoalsService } from '../services/goals.service';

@Component({
  selector: 'fp-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goalForm: FormGroup;
  goal: Goal;
  allGoals: Goal[];
  errorMessage: string;
  isLoading: boolean;
  activeGoal: Goal;
  newGoalForm = false;

  constructor(private fb: FormBuilder, private goalService: GoalsService) { }

  ngOnInit(): void {
    this.createForm();
    this.goalService.getGoals()
      .subscribe((res: any) => {
        this.allGoals = res;
        console.log(this.allGoals);
        this.isLoading = false;
      }, err => {
        this.errorMessage = err;
        console.log(this.errorMessage);
        this.isLoading = false;
      });
  }

  showEditGoalForm(goal: Goal): void {
    this.newGoalForm = true;
    this.getGoalById(goal.id);
    this.showAddEditForm(true);
  }

  insertGoal(goal: Goal): void {
    this.goalService.addGoal(goal)
    .subscribe(goal => {
      this.goalService.getGoals();
    }, error => {
      console.log(error);
    })
  }

  updateGoal(goal: Goal): void {
    this.goalService.updateGoal(goal)
    .subscribe(goal => {
      this.goalService.updateGoal(goal);
    }, error => {
      console.log(error);
    })
  }

  toggleAccomplished(): void {
    console.log(`Toggle Accomplished called`);
    this.goalForm.patchValue({
      didit: true
    });
  }

  submitGoal(goal): void {
    console.log(`SubmitGoal Called`);
    if(this.goalForm.invalid){
      console.log(`submitGoal(): this.goalForm.invalid = true`);
      return;
    }
    this.showGoalAddEditForm(false);
    if(goal.id === null  || goal.id < 1) {
      this.insertGoal(goal);
    } else {
      this.updateGoal(goal);
    }
  }

  showAddEditForm(showForm: boolean): void {
    this.newGoalForm = showForm;
  }

  getGoalById(id): void {
    this.goalService.getGoalById(id)
    .subscribe(goal => {
      this.goalRetrieved(goal);
    }, error => {
      console.log(error);
    });
  }

  deleteGoal(goal): void {
    this.goalService.deleteGoalById(goal.id)
    .subscribe(goal => {
      this.goalService.getGoals()
      console.log(goal);
    });
  }

  deleteCompleted(): void {
    const completedGoals = this.allGoals.filter(goals => goals.didit === true)
      .map(goals => this.deleteGoal(goals));
    console.log(completedGoals);
  }

  goalRetrieved(goal: Goal): void {
    this.goal = goal;
    this.goalForm.setValue({
      id: this.goal.id,
      deadline: this.goal.deadline,
      didit: this.goal.didit,
      goalTitle: this.goal.goalTitle
    })
  }

  showAddGoalForm(): void {
    this.showGoalAddEditForm(true);
    this.resetGoalForm();
  }

  resetGoalForm(): void {
    this.goalForm.reset();
  }

  showGoalAddEditForm(showForm: boolean): void {
    this.newGoalForm = showForm;
  }

  toggleGoalComplete(goal: Goal): void {
    goal.didit = !goal.didit;
  }

  createForm(): void {
    this.goalForm = this.fb.group({
      id: [''],
      goalTitle: ['', Validators.required],
      deadline: ['', Validators.required],
      didIt: ['']
    })
  }

}
