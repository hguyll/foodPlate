import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';
import { PlateComponent } from './plate/plate.component';
import { MessageComponent } from './message/message.component';
import { FoodGroupsModule } from './food-groups/food-groups.module';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { AppRoutingModule } from './app-routing.module';
import { FarmersmarketsComponent } from './components/farmersmarkets/farmersmarkets.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodaysGoalComponent } from './todays-goal/todays-goal.component';
import { FoodComponent } from './food/food.component';
import { GoalsComponent } from './goals/goals.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeBtnComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeBtnComponent,
    PlateComponent,
    MessageComponent,
    NavComponent,
    RegisterComponent,
    DefaultComponent,
    FarmersmarketsComponent,
    ExercisesComponent,
    TodaysGoalComponent,
    FoodComponent,
    GoalsComponent
  ],
  imports: [
    BrowserModule,
    FoodGroupsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
