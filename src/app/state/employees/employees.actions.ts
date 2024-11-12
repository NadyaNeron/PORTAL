import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { EmployeeShort } from '../../employee/types/employee.short';

export const EmployeesActions = createActionGroup({
  source: 'Employees',
  events: {
    Success: props<{ employees: EmployeeShort[]}>(),
    Error: props<{ error: string }>(),
    "Move Item": props<{previousIndex:number, currentIndex:number}>()
  },
});

export const EmployeesPageActions = createActionGroup({
    source: 'EmployeesPage',
    events: {
      'Load' : emptyProps(),
    },
  });