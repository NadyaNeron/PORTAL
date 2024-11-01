import { Component, OnInit } from '@angular/core';
import { EmployeeListComponent } from "../../components/employee-list/employee.list.component";
import { Store } from '@ngrx/store';
import { EmployeesPageActions } from 'src/app/state/employees/employees.actions';

@Component({
  selector: 'app-employees-page',
  standalone: true,
  imports: [
    EmployeeListComponent
],
  template: `
  <div class="page">
    <section
      class="header-container"
    >
      <h1 class="pagename">Сотрудники</h1>
    </section>
    <app-employee-list></app-employee-list>
  </div>
  `,
  styleUrl: `./employees.page.component.scss`
})
export class EmployeesPageComponent implements OnInit{

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.store.dispatch(EmployeesPageActions.load());
  }
}
