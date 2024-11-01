import { createFeature, createReducer, on } from '@ngrx/store';

import { EmployeeFull } from '../../employee/types/employee.full.';
import { EmployeeShort } from '../../employee/types/employee.short';
import { EmployeesActions, EmployeesPageActions } from './employees.actions';


export interface EmployeesState {
    employees: any[];
    loading: boolean;
    isSuccess: boolean | null;
    error: string;
}

export const initialState: EmployeesState = {
  employees: [],
  loading: false,
  isSuccess: null,
  error: ""
}


export const employeesReducer = createReducer(
  initialState,
    on(EmployeesPageActions.load, state => ({...state, loading:true })),
    on(EmployeesActions.success, (state, { employees }) =>({ ...state, employees, loading: false })),
    on(EmployeesActions.error, (state, { error }) => ({ ...state, error, loading: false })),
);

export const employeesFeature = createFeature({
  name: 'Employees feature',
  reducer: employeesReducer,
})