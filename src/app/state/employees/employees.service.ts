import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { EmployeeShort } from "src/app/employee/types/employee.short";
import { AppState } from "../app/app.state";
import { apiUrSelector } from "../app/app.selector";

@Injectable({
  providedIn:"root"
})
export class EmployeesService {
  http = inject(HttpClient)
  store = inject(Store);

  private apiUrl = this.store.selectSignal(apiUrSelector)

  constructor(){
    this.getEmployees().subscribe((data: any) => {
      console.log(data)
    })
  }
  
  getEmployees(){
    return this.http.get<EmployeeShort[]>(`${this.apiUrl()}/employees`)
  }
  
}