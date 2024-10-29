import { Component, signal } from '@angular/core';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { EmployeeFormComponent } from "../employee-form/employee.form.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [TuiAppearance, TuiCardLarge, TuiHeader, TuiTitle, EmployeeFormComponent, FormsModule],
  template: `
      <div
          tuiAppearance="floating"
          tuiCardLarge
      >
        <app-employee-form [disabled]="true" [(ngModel)]="employeeInput"></app-employee-form>
      </div>
  `,
  styles: ``
})
export class EmployeeDetailsComponent {
  public employeeInput = signal(
    {
      id:"1",
      fio: "Иванов Иван Иванович",
      email: "ivanov@mail.ru",
      phone:"+79809009090",
      position:"Менеджер",
      login:"ivanov"
    }
  );
  
}
