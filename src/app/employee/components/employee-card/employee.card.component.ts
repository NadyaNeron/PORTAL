import { Component, input } from '@angular/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import { TuiAppearance } from '@taiga-ui/core';
import { Router } from '@angular/router';
import { EmployeeShort } from '../../types/employee.short';
import { CardComponent } from "../../../shared/components/card/card.component";
@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [TuiCardLarge, TuiHeader, TuiAppearance, CardComponent],
  template: `
      <app-card (click)="goToEmployeePage()" [title]="employee().fio" [subTitle]="employee().position"/>
  `
})
export class EmployeeCardComponent {
  public employee = input.required<EmployeeShort>()

  constructor(private router: Router){}

  public goToEmployeePage(){
    this.router.navigate(["/app","employees", this.employee().id])
  }
}
