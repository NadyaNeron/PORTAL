import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { EmployeeFullPartial } from "src/app/employee/types/employee.full.";

export const EmployeeActions = createActionGroup({
    source: "Employee",
    events: {
        Success: props<{employee : EmployeeFullPartial}>(),
        Error: props<{error: string}>()
    }
})

export const EmployeePageActions = createActionGroup({
    source: "EmployeePage",
    events: {
        "Load": props<{employeeId : number}>()
    }
})