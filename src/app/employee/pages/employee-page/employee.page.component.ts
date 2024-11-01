import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { EmployeeDetailsComponent } from "../../components/employee-details/employee.details.component";
import { TuiAppBarBack } from '@taiga-ui/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EmployeeActions, EmployeePageActions } from 'src/app/state/employee/employee.actions';
import { tuiTakeUntilDestroyed } from '@taiga-ui/cdk';

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
export class EmployeePageComponent implements OnInit{
  private destroyRef = inject (DestroyRef)

  constructor(private router:Router, private route:ActivatedRoute, private store: Store){
  }
  public goBack(){
    this.router.navigate(['/app/employees'])
  }

  ngOnInit(): void {

    this.route.params
    .pipe(
      tuiTakeUntilDestroyed(this.destroyRef)
    )
    .subscribe((params)=> {
      const employeeId = Number(params['id'])
      this.store.dispatch(EmployeePageActions.load({ employeeId }))
    })
  }
}
