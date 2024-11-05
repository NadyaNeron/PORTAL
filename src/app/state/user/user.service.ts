import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { apiUrSelector } from "../app/app.selector";
import { User } from "src/app/shared/types/user";
import { ACCESS_TOKEN } from "src/app/shared/consts/localstorage";


@Injectable({
    providedIn:"root"
})
export class UserService {
    private http = inject(HttpClient)
    private store = inject(Store)
    private apiUrl = this.store.selectSignal(apiUrSelector)

    constructor(){}

    getUser(id:string){
        return this.http.get<User>(`${this.apiUrl()}/users/${id}`)
    }
}