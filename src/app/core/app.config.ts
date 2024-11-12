import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ru_RU, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthPageComponent } from '../auth/auth-page/auth.page.component';
import { LayoutComponent } from "../layout/layout.component";
import { EmployeesEffects } from "../state/employees/employees.effects";
import { employeesFeature } from "../state/employees/employees.reducer";
import { AppInitializerProvider } from "./providers/app-initializer";
import { appReducer } from "../state/app/app.state";
import { ProjectsEffects } from "../state/projects/projects.effects";
import { projectsFeature } from "../state/projects/projects.reducer";
import { UserEffects } from "../state/user/user.effects";
import { authInterceptor } from "./providers/auth.interceptor";
import { AuthGuard } from "./providers/auth.guard";
import { usersFeature } from "../state/users/users.reducer";
import { UsersEffects } from "../state/users/user.effects";
import {DragDropModule} from '@angular/cdk/drag-drop';

registerLocaleData(ru);

const routes: Routes = [
    { 
        path: 'auth', 
        component: AuthPageComponent,
        providers: [
          provideEffects(UserEffects)
        ]
    },
    { path: '',   redirectTo: 'app', pathMatch: 'full' },
    {
      path:'app',
      component: LayoutComponent,
      canActivate: [AuthGuard],
      children: [
        { path: '',   redirectTo: 'employees', pathMatch: 'full' },
        { 
          path: 'employees',
          loadChildren: () => import('../employee/routes').then((m) => m.EmployeesRoutes),
          providers: [
            provideState(usersFeature),
            provideEffects(UsersEffects)
          ]
        },
        {
          path: "projects",
          loadComponent: () => import('../projects/pages/projects-page/projects.page.component').then((m => m.ProjectsPageComponent)),
          providers: [
            provideState(projectsFeature),
            provideEffects(ProjectsEffects)
          ]
        }
      ]
    },
    { path: '**', redirectTo: "app", pathMatch: "full" }
];

export const appConfig: ApplicationConfig = {
  providers: [
    AuthGuard,
    DragDropModule,
    provideAnimations(),
    provideRouter(routes),
    provideProtractorTestingSupport(),
    provideStore({app:appReducer}),
    // provideStoreDevnp({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: !isDevMode(), // Restrict extension to log-only mode
    //   autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    //   trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
    //   traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    //   connectInZone: true // If set to true, the connection is established within the Angular zone
    // }),
    AppInitializerProvider,
    provideNzI18n(ru_RU),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    NG_EVENT_PLUGINS,
  ]
};