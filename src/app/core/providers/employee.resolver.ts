import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { catchError, filter, first, of, take } from "rxjs";
import { User } from "src/app/shared/types/user";
import { UserActions, UserPageActions } from "src/app/state/user/user.actions";
import { userFeature } from "src/app/state/user/user.reducer";

@Injectable({
    providedIn: 'root',
})
export class EmployeeResolver implements Resolve<any>{
    constructor(private store: Store){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){  
        const currUser = this.store.selectSignal<User>(userFeature.selectUser)
        const userId = route.params['id']
        if(userId === currUser().id){
            return currUser()
        }
        else{
            this.store.dispatch(UserPageActions.load({ userId }))
            return this.store.select<User>(userFeature.selectUser).pipe(
                filter(user => !!user && user.id === userId), 
                first(), 
                catchError(error => {
                    console.error(error);
                    return of(null); 
                })
            );
    
        }
    }   
}