import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/legacy';
@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [TuiInputModule],
  template: `
    <form class="container">
        <tui-input class="auth-input">
            Логин
            <input
                tuiTextfieldLegacy
                type="email"
                placeholder="Введите свой логин"
            />
        </tui-input> 
        <tui-input class="auth-input">
            Пароль
            <input
                tuiTextfieldLegacy
                type="password"
                placeholder="Введите свой пароль"
            />
        </tui-input> 
      </form>
  `,
  styleUrl: `./auth.form.component.scss`
})
export class AuthFormComponent implements ControlValueAccessor {
    writeValue(obj: any): void {
        throw new Error('Method not implemented.');
    }
    registerOnChange(fn: any): void {
        throw new Error('Method not implemented.');
    }
    registerOnTouched(fn: any): void {
        throw new Error('Method not implemented.');
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error('Method not implemented.');
    }

}
