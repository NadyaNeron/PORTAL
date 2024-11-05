import { Component, input } from '@angular/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import { TuiAppearance } from '@taiga-ui/core';
import { Router } from '@angular/router';
import { EmployeeShort } from '../../types/employee.short';
import { CardComponent } from "../../../shared/components/card/card.component";
import { UserShort } from 'src/app/shared/types/user.short';
@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [TuiCardLarge, TuiHeader, TuiAppearance, CardComponent],
  template: `
      <app-card (click)="goToEmployeePage()" [title]="employee().name" [subTitle]="employee().role" [imageUrl]="employee().photoUrl"/>
  `
})
export class EmployeeCardComponent {
  public employee = input.required<UserShort>()

  constructor(private router: Router){}

  public goToEmployeePage(){
    this.router.navigate(["/app","employees", this.employee().id])
  }
}
