import { Route } from "@angular/router";
import { EmployeePageComponent } from "./pages/employee-page/employee.page.component";
import { EmployeesPageComponent } from "./pages/employees-page/employees.page.component";
import { EmployeesEffects } from "../state/employees/employees.effects";
import { EmployeeEffects } from "../state/employee/employee.effects";
import { provideState } from "@ngrx/store";
import { employeeFeature } from "../state/employee/employee.reducer";
import { provideEffects } from "@ngrx/effects";
import { usersFeature } from "../state/users/users.reducer";
import { UsersEffects } from "../state/users/user.effects";
import { userFeature } from "../state/user/user.reducer";
import { UserEffects } from "../state/user/user.effects";
import { EmployeeResolver } from "../core/providers/employee.resolver";

export const EmployeesRoutes:Route[] = [
    {
        path: '',
        component: EmployeesPageComponent,
        providers:[
            provideState(usersFeature),
            provideEffects([UsersEffects]), 
        ]
    },
    {
        path: ':id',
        component: EmployeePageComponent,
        providers: [
            provideState(userFeature),
            provideEffects([UserEffects])
        ],
        resolve: {
            employee: EmployeeResolver
        }
    }
]