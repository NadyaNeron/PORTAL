import { Component } from '@angular/core';
import { EmployeeCardComponent } from "../employee-card/employee.card.component";
import {KeyValuePipe, NgForOf} from '@angular/common';
import {tuiAsPortal, TuiPortals, TuiRepeatTimes} from '@taiga-ui/cdk';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [EmployeeCardComponent, TuiRepeatTimes],
  template: `
    <section class="container">
      @for(employee of employeesList; track employee.id; let idx = $index) {
          <app-employee-card
            [employee]="employee"
          >
          </app-employee-card>
        }@empty {
          Тут пока пусто
        }
    </section>
  `,
  styles: ``
})
export class EmployeeListComponent {
  protected employeesList = [
      {
        fio: "Иванов Иван Иванович",
        email: "ivanov@mail.ru",
        phone:"+79809009090",
        position:"Менеджер",
        login:"ivanov",
        id:1
      },
      {
        fio: "Иванов Иван Иванович",
        email: "ivanov@mail.ru",
        phone:"+79809009090",
        position:"Менеджер",
        login:"ivanov",
        id:2
      },      {
        fio: "Иванов Иван Иванович",
        email: "ivanov@mail.ru",
        phone:"+79809009090",
        position:"Менеджер",
        login:"ivanov",
        id:3
      },      {
        fio: "Иванов Иван Иванович",
        email: "ivanov@mail.ru",
        phone:"+79809009090",
        position:"Менеджер",
        login:"ivanov",
        id:4
      },      {
        fio: "Иванов Иван Иванович",
        email: "ivanov@mail.ru",
        phone:"+79809009090",
        position:"Менеджер",
        login:"ivanov",
        id:5
      }
  ]
}
