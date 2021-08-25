import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "./components/default/default.component";
import { ExercisesComponent } from "./components/exercises/exercises.component";
import { FarmersmarketsComponent } from "./components/farmersmarkets/farmersmarkets.component";
import { PlateComponent } from "./plate/plate.component";
import { RegisterComponent } from "./register/register.component";

'register'
'confirmation'

const routes: Routes = [
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
        path: '**',
        component: PlateComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}