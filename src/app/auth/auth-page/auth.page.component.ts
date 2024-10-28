import { Component } from '@angular/core';
import { AuthFormComponent } from '../components/auth.form.component';
import { TuiButton } from '@taiga-ui/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [AuthFormComponent, TuiButton],
  template: `
    <div style="display:flex; width:100%; height:100%; align-items:center; flex-direction:column; padding-top: 10%">
      <p style="color:var(--primary-color);font-size:50px;font-weight:bolder;margin-bottom:60px">АВТОРИЗАЦИЯ</p>
      <app-auth-form></app-auth-form>
      <button
        style="margin-top:40px; width:10%; font-size:x-large"
        tuiButton
        (click)="Auth()"
      >
        Войти
      </button>
    </div>
  `,
  styles: ``
})
export class AuthPageComponent {

  constructor(private router: Router, private route: ActivatedRoute){}
  public Auth = () => {
    this.router.navigate(["../app/employees"], {relativeTo: this.route})
  }
}
