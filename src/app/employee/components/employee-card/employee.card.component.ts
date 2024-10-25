import { Component, input } from '@angular/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import { TuiAppearance } from '@taiga-ui/core';
import { Router } from '@angular/router';
import { EmployeeShort } from '../../types/employee.short';
@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [TuiCardLarge, TuiHeader, TuiAppearance],
  template: `
      <div
          tuiAppearance="floating"
          tuiCardLarge
          tuiHeader
          class="card"
          (click)="goToTaskPage()"
      >
        <h2 tuiTitle>
            {{employee()?.fio}}
            <span tuiSubtitle>{{employee()?.position}}</span>
        </h2>
      </div>
  `,
  styleUrl: `./employee.card.component.scss`
})
export class EmployeeCardComponent {
  public employee = input<EmployeeShort>()
  constructor(private router: Router){}
  public goToTaskPage(){
    console.log("hi")
    this.router.navigate(["/app","employees", "1"])
  }
}
