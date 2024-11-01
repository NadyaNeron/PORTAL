import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { apiUrSelector } from "../app/app.selector";
import { HttpClient } from "@angular/common/http";
import { Project } from "src/app/projects/types/project";

@Injectable({
    providedIn:"root"
})
export class ProjectService {
    private store = inject(Store)
    private apiUrl = this.store.selectSignal(apiUrSelector)
    private http = inject(HttpClient)

    getProjects(){
        return this.http.get<Project[]>(`${this.apiUrl()}/projects`)
    }
}