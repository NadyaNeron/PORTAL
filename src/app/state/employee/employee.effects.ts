import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmployeeService } from "./employee.service";
import { EmployeeActions, EmployeePageActions } from "./employee.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class EmployeeEffects {
    constructor(private actions$: Actions, private employeeService:EmployeeService){}

    load$ = createEffect(() => 
        this.actions$.pipe(
            ofType(EmployeePageActions.load),
            switchMap(({employeeId}) => 
                this.employeeService.getEmployee(employeeId).pipe(
                    map((employee) => EmployeeActions.success({ employee })),
                    catchError((error) => of(EmployeeActions.error({ error:error.message })))
                )
            )
        )
    )
}