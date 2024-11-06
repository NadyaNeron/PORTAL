import { Component } from '@angular/core';
import { EmployeeCardComponent } from "../employee-card/employee.card.component";
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { usersFeature } from 'src/app/state/users/users.reducer';
import { AsyncForDirective } from 'src/app/shared/components/async-for.directive';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [EmployeeCardComponent, CommonModule, AsyncForDirective],
  template: `
    <section class="container">
        <app-employee-card
        *appAsyncFor="let employee of employees(); let i = index"
          [employee]="employee"
        >
        </app-employee-card>
        <!-- }@empty {
          Тут пока пусто
        } -->
    </section>
  `,
  styles: ``
})
export class EmployeeListComponent{
  protected employees = this.store.selectSignal(usersFeature.selectUsers);

  constructor(private store: Store) {}

}
