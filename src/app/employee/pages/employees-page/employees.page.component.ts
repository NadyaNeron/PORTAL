import { Component } from '@angular/core';
import {KeyValuePipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {tuiAsPortal, TuiPortals, TuiRepeatTimes} from '@taiga-ui/cdk';
import {
  TuiAppearance,
  TuiButton,
  TuiDataList,
  TuiDropdown,
  TuiDropdownService,
  TuiIcon,
  TuiTitle,
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiBadgeNotification,
  TuiChevron,
  TuiDataListDropdownManager,
  TuiFade,
  TuiSwitch,
  TuiTabs,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';
import { EmployeeListComponent } from "../../components/employee-list/employee.list.component";

@Component({
  selector: 'app-employees-page',
  standalone: true,
  imports: [
    FormsModule,
    KeyValuePipe,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    TuiAppearance,
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiButton,
    TuiCardLarge,
    TuiChevron,
    TuiDataList,
    TuiDataListDropdownManager,
    TuiDropdown,
    TuiFade,
    TuiHeader,
    TuiIcon,
    TuiNavigation,
    TuiRepeatTimes,
    TuiSwitch,
    TuiTabs,
    TuiTitle,
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
export class EmployeesPageComponent {

}
