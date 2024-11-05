import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "./user.service";
import { UserActions } from "./user.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { Injectable, inject } from "@angular/core";

@Injectable()
export class UserEffects {
    private userService = inject(UserService)
    constructor(private actions$:Actions){}

    get$ = createEffect(() => 
        this.actions$.pipe(
            ofType(UserActions.get),
            switchMap(({userId}) => 
                this.userService.getUser(userId).pipe(
                    map((user) => UserActions.success({ user })),
                    catchError((error) => of(UserActions.error({ error })))
                )
            )
        )
    )
}