import { Route } from "@angular/router";
import { EmployeePageComponent } from "./pages/employee-page/employee.page.component";
import { EmployeesPageComponent } from "./pages/employees-page/employees.page.component";
import { EmployeesEffects } from "../state/employees/employees.effects";
import { EmployeeEffects } from "../state/employee/employee.effects";
import { provideState } from "@ngrx/store";
import { employeeFeature } from "../state/employee/employee.reducer";
import { provideEffects } from "@ngrx/effects";

export const EmployeesRoutes:Route[] = [
    {
        path: '',
        component: EmployeesPageComponent,
        providers:[
            provideState(employeeFeature),
            provideEffects([EmployeeEffects, EmployeesEffects]), 
        ]
    },
    {
        path: ':id',
        component: EmployeePageComponent
    }
]