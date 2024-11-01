import { Component, OnInit, Signal, inject, input } from '@angular/core';
import { EmployeeCardComponent } from "../employee-card/employee.card.component";
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import { EmployeesService } from 'src/app/state/employees/employees.service';
import { EmployeeShort } from '../../types/employee.short';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EmployeesState, employeesFeature } from 'src/app/state/employees/employees.reducer';
import { EmployeesPageActions } from 'src/app/state/employees/employees.actions';
import { CommonModule } from '@angular/common';

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
  protected employees = this.store.selectSignal(employeesFeature.selectEmployees);

  constructor(private store: Store) {}

}
