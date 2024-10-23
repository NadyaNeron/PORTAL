import { Component } from '@angular/core';
import { EmployeeDetailsComponent } from "../../components/employee-details/employee.details.component";

@Component({
  selector: 'app-employee-page',
  standalone: true,
  imports: [EmployeeDetailsComponent],
  template: `
  <div class="page">
    <section
      class="header-container"
    >
      <h1 class="pagename">Информация о сотруднике</h1>
    </section>
    <app-employee-details></app-employee-details>
  </div>
  `,
  styleUrl: `./employee.page.component.scss`
})
export class EmployeePageComponent {

}
