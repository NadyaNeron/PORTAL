import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { apiUrSelector } from "../app/app.selector";
import { EmployeeFull, EmployeeFullPartial } from "src/app/employee/types/employee.full.";

@Injectable({
    providedIn:"root"
})
export class EmployeeService{
    private store = inject(Store)
    private apiUrl = this.store.selectSignal(apiUrSelector)
    http = inject(HttpClient)

    getEmployee(id:number){
        return this.http.get<EmployeeFullPartial>(`${this.apiUrl()}/employees/${id}`)
    }
}