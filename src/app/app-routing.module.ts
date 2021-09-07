import { NgModule } from "@angular/core";
import { RouterModule, Routes, Route} from "@angular/router";
import { DefaultComponent } from "./components/default/default.component";
import { ExercisesComponent } from "./components/exercises/exercises.component";
import { FarmersmarketsComponent } from "./components/farmersmarkets/farmersmarkets.component";
import { foodGroupsRoutes } from "./food-groups/food-groups.routing";
import { FoodComponent } from "./food/food.component";
import { PlateComponent } from "./plate/plate.component";
import { RegisterComponent } from "./register/register.component";

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
                component: PlateComponent
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
            ...foodGroupsRoutes,
            fallbackRoute
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}