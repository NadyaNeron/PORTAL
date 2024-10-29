import { Component, DestroyRef, forwardRef, inject, input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { tuiTakeUntilDestroyed } from '@taiga-ui/cdk';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiInputPhoneInternational } from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';
import {TuiInputPhoneModule} from '@taiga-ui/legacy';
import { EmployeeFull, EmployeeFullPartial } from '../../types/employee.full.';

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
              formControlName="fio"
          />
        </tui-textfield>
        <tui-textfield class="user-input">
        <label tuiLabel>Логин</label>
          <input
              tuiTextfield
              formControlName="login"
          />
        </tui-textfield> 
        <tui-textfield class="user-input">
          <label tuiLabel>Должность</label>
          <input
              tuiTextfield
              formControlName="position"
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
          <label tuiLabel>Почта</label>
          <input
              tuiTextfield
              formControlName="email"
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
    fio: new FormControl(''),
    login: new FormControl(''),
    position: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
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
      this.employeeForm.setValue({fio: '', phone:'', email:'', login:'', position:''}, { emitEvent: false })
    }
    else this.employeeForm.setValue(outsideValue, { emitEvent: false })
  }
  registerOnChange(fn: (value: EmployeeFullPartial) => void): void {
    this.onChanges = (value: EmployeeFullPartial) => {
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
