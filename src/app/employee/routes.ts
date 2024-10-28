import { EmployeePageComponent } from "./pages/employee-page/employee.page.component";
import { EmployeesPageComponent } from "./pages/employees-page/employees.page.component";

export const EmployeesRoutes = [
    {
        path: '',
        component: EmployeesPageComponent
    },
    {
        path: ':id',
        component: EmployeePageComponent
    }
]