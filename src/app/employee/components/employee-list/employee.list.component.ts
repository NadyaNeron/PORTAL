import { Component } from '@angular/core';
import { EmployeeCardComponent } from "../employee-card/employee.card.component";
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import { Store } from '@ngrx/store';
import { employeesFeature } from 'src/app/state/employees/employees.reducer';
import { CommonModule } from '@angular/common';
import { usersFeature } from 'src/app/state/users/users.reducer';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [EmployeeCardComponent, TuiRepeatTimes, CommonModule],
  template: `
    <section class="container">
      @for(employee of employees(); track employee.id; let idx = $index) {
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
export class EmployeeListComponent{
  protected employees = this.store.selectSignal(usersFeature.selectUsers);

  constructor(private store: Store) {}

}
