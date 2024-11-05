import { Component, inject, signal } from '@angular/core';
import { AuthFormComponent } from '../components/auth.form.component';
import { TuiButton } from '@taiga-ui/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { apiUrSelector } from 'src/app/state/app/app.selector';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthResponse, AuthService } from 'src/app/core/services/auth.service';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'src/app/shared/consts/localstorage';
import { UserActions } from 'src/app/state/user/user.actions';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [AuthFormComponent, TuiButton, FormsModule, CommonModule],
  template: `
    <div style="display:flex; width:100%; height:100%; align-items:center; flex-direction:column; padding-top: 10%">
      <p style="color:var(--primary-color);font-size:50px;font-weight:bolder;margin-bottom:60px">АВТОРИЗАЦИЯ</p>
      <app-auth-form [(ngModel)]="authInput"></app-auth-form>
      <button
        style="margin-top:40px; width:10%; font-size:x-large"
        tuiButton
        (click)="auth()"
      >
        Войти
      </button>
    </div>
  `,
  styles: ``
})
export class AuthPageComponent {
  private store = inject(Store)
  private authService = inject(AuthService)
  public authInput = signal({
    username:"",
    password:""
  })

  constructor(private router: Router, private route: ActivatedRoute){}

  public auth = () => {
    console.log(this.authInput())
    this.authService.auth(this.authInput()).subscribe((res) => this.router.navigate(["../app/employees"], {relativeTo: this.route}))
  }
}
