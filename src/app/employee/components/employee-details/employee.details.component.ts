import { Component, computed, signal } from '@angular/core';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { EmployeeFormComponent } from "../employee-form/employee.form.component";
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { employeeFeature } from 'src/app/state/employee/employee.reducer';
import { EmployeeFullPartial } from '../../types/employee.full.';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [TuiAppearance, TuiCardLarge, TuiHeader, TuiTitle, EmployeeFormComponent, FormsModule],
  template: `
      <div
          tuiAppearance="floating"
          tuiCardLarge
      >
        <app-employee-form [disabled]="true" [ngModel]="employeeInput()" ></app-employee-form>
      </div>
  `,
  styles: ``
})
export class EmployeeDetailsComponent {
  // public employeeInput = signal(
  //   {
  //     id:"1",
  //     fio: "Иванов Иван Иванович",
  //     email: "ivanov@mail.ru",
  //     phone:"+79809009090",
  //     position:"Менеджер",
  //     login:"ivanov"
  //   }
  // );

  public employee = this.store.selectSignal<EmployeeFullPartial>(employeeFeature.selectEmployee)

  public employeeInput = computed(() =>{
    const employee = this.employee();
    return {
      fio: employee.fio || "",
      position: employee.position || "",
      phone: employee.phone || "",
      login: employee.login || "",
      email: employee.email || ""
    }
  });

  constructor(private store:Store){}

  // onChange(e: EmployeeFullPartial){
  //   this.employee.update((employee) => ({
  //     ...task,
  //     description: e.description ?? '',
  //     name: e.name ?? '',
  //   }))
  // }
  
}
