import { Component, DestroyRef, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { tuiTakeUntilDestroyed } from '@taiga-ui/cdk';
import {TuiInputModule} from '@taiga-ui/legacy';
@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [TuiInputModule, ReactiveFormsModule],
  template: `
    <form class="container" [formGroup]="authForm">
        <tui-input class="auth-input" formControlName="username">
            Логин
            <input
                tuiTextfieldLegacy
                placeholder="Введите свой логин"
                
            />
        </tui-input> 
        <tui-input  class="auth-input" formControlName="password">
            Пароль
            <input
                tuiTextfieldLegacy
                type="password"
                placeholder="Введите свой пароль"
                
            />
        </tui-input> 
      </form>
  `,
  styleUrl: `./auth.form.component.scss`,
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AuthFormComponent),
        multi: true,
    }
  ]
})
export class AuthFormComponent implements ControlValueAccessor {
    authForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    })
    private onChanges!: (value:any) => void;
  
    private destroyRef = inject(DestroyRef)
  
    constructor(){
      this.authForm.valueChanges
      .pipe(
        tuiTakeUntilDestroyed(this.destroyRef)
      )
      .subscribe((val)=> {
        this.onChanges(val);
      })
    }
    
    writeValue(outsideValue: any): void {
        if (!outsideValue){
          this.authForm.setValue({username: '', password:''}, { emitEvent: false })
        }
        else this.authForm.setValue(outsideValue, { emitEvent: false })
    }
    registerOnChange(fn: (value: any) => void): void {
        this.onChanges = (value: any) => {
          fn(structuredClone(value));
        }
    }
    registerOnTouched(fn: any): void {
        console.log('register on touched')
    }
    setDisabledState?(isDisabled: boolean): void {
        console.log('set disabled state');
    }

}
