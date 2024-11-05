import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { UsersService } from "./users.service";
import { UsersActions, UsersPageActions } from "./users.actions";

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}


  load$ = createEffect(() =>
     this.actions$.pipe(
      ofType(UsersPageActions.load),
      switchMap(() =>
        this.usersService.getUsers().pipe(
          map((response) => UsersActions.success({ users: response.items })),
          catchError((error) =>
            of(UsersActions.error({ error: error.message }))
          )
        )
      ) 
    ))
}