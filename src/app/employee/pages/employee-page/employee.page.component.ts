import { Component } from '@angular/core';
import { EmployeeDetailsComponent } from "../../components/employee-details/employee.details.component";
import { TuiAppBarBack } from '@taiga-ui/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-page',
  standalone: true,
  imports: [EmployeeDetailsComponent, TuiAppBarBack],
  template: `
  <div class="page">
    <section
      class="header-container"
    >
      <button
          tuiAppBarBack
          type="button"
          (click)="goBack()"
      >
        Назад
      </button>
      <h1 class="pagename">Информация о сотруднике</h1>
    </section>
    <app-employee-details></app-employee-details>
  </div>
  `,
  styleUrl: `./employee.page.component.scss`
})
export class EmployeePageComponent {
  constructor(private router:Router){}
  public goBack(){
    this.router.navigate(['/app/employees'])
  }
}
