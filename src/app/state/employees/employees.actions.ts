import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { EmployeeShort } from '../../employee/types/employee.short';

export const EmployeesActions = createActionGroup({
  source: 'Employees',
  events: {
    Success: props<{ employees: EmployeeShort[]}>(),
    Error: props<{ error: string }>(),
  },
});

export const EmployeesPageActions = createActionGroup({
    source: 'EmployeesPage',
    events: {
      'Load' : emptyProps(),
    },
  });