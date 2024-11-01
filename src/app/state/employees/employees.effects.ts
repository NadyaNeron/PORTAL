import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmployeesActions, EmployeesPageActions } from "./employees.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { EmployeesService } from "./employees.service";

@Injectable()
export class EmployeesEffects {
  constructor(private actions$: Actions, private employeesService: EmployeesService) {}


  load$ = createEffect(() =>
     this.actions$.pipe(
      ofType(EmployeesPageActions.load),
      switchMap(() =>
        this.employeesService.getEmployees().pipe(
          map((employees) => EmployeesActions.success({ employees })),
          catchError((error) =>
            of(EmployeesActions.error({ error: error.message }))
          )
        )
      ) 
    ))
}