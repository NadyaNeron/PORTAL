import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ru_RU, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { AuthPageComponent } from './auth/auth-page/auth.page.component';
import { LayoutComponent } from "./layout/layout.component";
import { EmployeesPageComponent } from "./employee/pages/employees-page/employees.page.component";
import { EmployeePageComponent } from "./employee/pages/employee-page/employee.page.component";
import { ProjectsPageComponent } from "./projects/pages/projects-page/projects.page.component";

registerLocaleData(ru);

const routes: Routes = [
    { path: '',   redirectTo: 'auth', pathMatch: 'full' },
    { 
        path: 'auth', 
        component: AuthPageComponent
    },
    {
      path:'app',
      component:LayoutComponent,
      children: [
        {
          path:'employees',
          component: EmployeesPageComponent,
        },
        {
          path: "employees/:id",
          component: EmployeePageComponent
        },
        {
          path: "projects",
          component: ProjectsPageComponent
        }
      ]
    },
];

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideRouter(routes), provideProtractorTestingSupport(), provideStore(), provideEffects(), provideNzI18n(ru_RU), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient(), NG_EVENT_PLUGINS]
};