import { Component, DestroyRef, forwardRef, inject, input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { tuiTakeUntilDestroyed } from '@taiga-ui/cdk';
import { TuiTextfield } from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';
import {TuiInputPhoneModule} from '@taiga-ui/legacy';
import { EmployeeFullPartial } from '../../types/employee.full.';
import { UserPartial } from 'src/app/shared/types/user';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [TuiInputModule, TuiInputPhoneModule, TuiTextfield, ReactiveFormsModule],
  template: `
    <fieldset class="container" [disabled]="disabled()">
      <form  [formGroup]="employeeForm">
        <tui-textfield class="user-input">
          <label tuiLabel>ФИО</label>
          <input
              tuiTextfield
              formControlName="name"
          />
        </tui-textfield>
        <tui-textfield class="user-input">
        <label tuiLabel>Email</label>
          <input
              tuiTextfield
              formControlName="email"
          />
        </tui-textfield>
        <tui-textfield class="user-input">

        <label tuiLabel>Telegram</label>
          <input
              tuiTextfield
              formControlName="telegram"
          />
          </tui-textfield>
        <tui-textfield class="user-input">
        <label tuiLabel>День рождения</label>
          <input
              tuiTextfield
              formControlName="birthday"
          />
          </tui-textfield>
        <tui-textfield class="user-input">
        <label tuiLabel>Департамент</label>
          <input
              tuiTextfield
              formControlName="department"
          />
          </tui-textfield>
        <tui-textfield class="user-input">
          <label tuiLabel>Отделение</label>
          <input
              tuiTextfield
              formControlName="division"
          />
        </tui-textfield>
        <tui-textfield class="user-input">
          <label tuiLabel>Хобби</label>
          <input
              tuiTextfield
              formControlName="hobby"
          />
        </tui-textfield>
        <tui-textfield class="user-input">
          <label tuiLabel>Телефон</label>
          <input
              tuiTextfield
              formControlName="phone"
          />
        </tui-textfield>
        <tui-textfield class="user-input">
          <label tuiLabel>Локация</label>
          <input
              tuiTextfield
              formControlName="location"
          />
        </tui-textfield> 
      </form>
    </fieldset>
  `,
  styleUrl: `./employee.form.component.scss`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmployeeFormComponent),
      multi: true,
    },
  ]
})
export class EmployeeFormComponent implements ControlValueAccessor{
  employeeForm = new FormGroup({
    name: new FormControl(''),
    role: new FormControl(''),
    location: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    telegram: new FormControl(''),
    hobby: new FormControl(''),
    department: new FormControl(''),
    division: new FormControl(''),
    birthday: new FormControl('')
  })
  public disabled = input<boolean>(false)
  private destroyRef = inject(DestroyRef)
  private onChanges!: (value: EmployeeFullPartial) => void;
  private onTouches!: () => void

  constructor(){
    this.employeeForm.valueChanges
    .pipe(
      tuiTakeUntilDestroyed(this.destroyRef)
    )
    .subscribe((val)=> {
      this.onChanges(val);
    })
  }
  
  writeValue(outsideValue: any): void {
    console.log(outsideValue)
    if (!outsideValue){
      this.employeeForm.setValue({name: '', location:'', email:'', phone:'', birthday:"", hobby:"", department:"", telegram:"", division:"", role:''}, { emitEvent: false })
    }
    else this.employeeForm.setValue(outsideValue, { emitEvent: false })
  }
  registerOnChange(fn: (value: UserPartial) => void): void {
    this.onChanges = (value: UserPartial) => {
      fn(structuredClone(value));
    }
  }
  registerOnTouched(fn: () => void): void {
    this.onTouches = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // isDisabled? this.employeeForm.disable({ emitEvent: false }) : this.employeeForm.enable({ emitEvent: false });
    this.employeeForm[isDisabled ? 'disable' : 'enable']({ emitEvent: false });
  }
}
