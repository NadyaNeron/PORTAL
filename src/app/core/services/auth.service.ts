import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subject, defer, filter, first, interval, mergeMap, of, takeUntil, tap } from "rxjs";
import { EmployeeFull } from "src/app/employee/types/employee.full.";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "src/app/shared/consts/localstorage";
import { User } from "src/app/shared/types/user";
import { apiUrSelector, refreshTokenIntervalSelector } from "src/app/state/app/app.selector";
import { AppActions } from "src/app/state/app/app.state";
export type AuthResponse = {
    access_token:string,
    refresh_token:string,
    expires_in: number,
    token_type: string,
    user_id:string
}

@Injectable({
    providedIn:"root"
})
export class AuthService {
    private http = inject(HttpClient)
    private store = inject(Store)
    private apiUrl = this.store.selectSignal(apiUrSelector)
    public stopRefreshCycle = new Subject<void>()


    auth(body:any){
        const request = {
            ...body, 
            grant_type:"password"
        }
        return this.http.post<AuthResponse>(`${this.apiUrl()}/token`, request).pipe(
            tap((res) => {
                localStorage.setItem(ACCESS_TOKEN, res.access_token)
                localStorage.setItem(REFRESH_TOKEN, res.refresh_token)
                this.refreshCycle()
            }),
            mergeMap((res) => this.getCurrentUser(res.user_id))
        )
    }

    getCurrentUser(userId: string): Observable<User> {
        // TODO по итогу должны в appStore положить модель текущего пользователя (через action)
        return this.http.get<User>(`${this.apiUrl()}/users/${userId}`).pipe(
            tap(currentUser => {
                console.log(currentUser)
                this.store.dispatch(AppActions.setCurrentUser({ currentUser }))
            })
        )
    }

    logout(): void {
        // TODO пофантазировать
        this.store.dispatch(AppActions.resetCurrentUser())
        this.stopRefreshCycle.next();
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
    }


    refreshCycle(){
        this.store.select(refreshTokenIntervalSelector).pipe(
            tap((res) => {
                console.log(localStorage.getItem(REFRESH_TOKEN))
            }),
            filter(res => !!res),
            first(),
            mergeMap(res => interval(res)),
            mergeMap(() => this.refresh()),
            takeUntil(this.stopRefreshCycle),
        ).subscribe()
    }

    refresh(){
        return defer(() => {
            const refreshToken = localStorage.getItem(REFRESH_TOKEN);
            if (!refreshToken) {
                throw new Error('Refresh token doesn`t exist');
            }
            return this.http.post<AuthResponse>(`${this.apiUrl()}/token`, {
                grant_type: "refresh_token",
                refresh_token: refreshToken,
            });
        }).pipe(
            tap((res) => {
                localStorage.setItem(ACCESS_TOKEN, res.access_token)
                localStorage.setItem(REFRESH_TOKEN, res.refresh_token)
            })
        );
    }
}