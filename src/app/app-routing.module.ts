import { NgModule } from "@angular/core";
import { RouterModule, Routes, Route, CanActivate} from "@angular/router";
import { DefaultComponent } from "./components/default/default.component";
import { ExercisesComponent } from "./components/exercises/exercises.component";
import { FarmersmarketsComponent } from "./components/farmersmarkets/farmersmarkets.component";
import { foodGroupsRoutes } from "./food-groups/food-groups-routing";
import { FoodComponent } from "./food/food.component";
import { GoalsComponent } from "./goals/goals.component";
import { PlateComponent } from "./plate/plate.component";
import { RegisterComponent } from "./register/register.component";
import { RegisterGuardService } from "./services/register-guard.service";

class AllowFullAccessGuard implements CanActivate {
    canActivate() {
        console.log('FullAccessGuard has been activated.');
        return true;
    }
}

const fallbackRoute : Route = {
    path: '**',
    component: DefaultComponent
}
const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DefaultComponent
            },
            {
                path: 'myPlate',
                component: PlateComponent,
                canActivate: [AllowFullAccessGuard, RegisterGuardService]
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'farmersMarkets',
                component: FarmersmarketsComponent
            },
            {
                path: 'exercises',
                component: ExercisesComponent
            },
            {
                path: 'nutritionInfo',
                component: FoodComponent
            },
            {
                path: 'goals',
                component: GoalsComponent
            },
            ...foodGroupsRoutes,
            fallbackRoute
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AllowFullAccessGuard, RegisterGuardService]
})
export class AppRoutingModule {}