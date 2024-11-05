import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { apiUrSelector } from "../app/app.selector";
import { UserShort } from "src/app/shared/types/user.short";

@Injectable({
    providedIn:"root"
})
export class UsersService{
    private http = inject(HttpClient)
    private store = inject(Store)
    private apiUrl = this.store.selectSignal(apiUrSelector)

    getUsers(){
        return this.http.get<{items: UserShort[], totalCount:number}>(`${this.apiUrl()}/users?count=500&division=PRODUCTION&offset=0`)
    }
}