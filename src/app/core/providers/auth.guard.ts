import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { currentUserSelector } from "src/app/state/app/app.selector";
import { AuthService } from "../services/auth.service";
import { Observable, catchError, first, firstValueFrom, map, of } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{
    private store = inject(Store)
    private authService = inject(AuthService)
    constructor(private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const user = this.store.selectSignal(currentUserSelector)
        if(!user()){
            return this.authService.refresh().pipe(
                    map((res) =>  true),
                    catchError((error) => {
                        this.router.navigate(['/auth'])
                        return of(false)
                    })
            )
        }
        return of(true);
    }

}