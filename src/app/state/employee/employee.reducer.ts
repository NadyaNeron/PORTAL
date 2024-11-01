import { createFeature, createReducer, on } from "@ngrx/store";
import { EmployeeFull, EmployeeFullPartial } from "src/app/employee/types/employee.full.";
import { EmployeeActions, EmployeePageActions } from "./employee.actions";

export interface EmployeeState {
    employee: EmployeeFullPartial,
    loading: boolean,
    isSuccess: boolean | null,
    error: string
}

export const initialState:EmployeeState = {
    employee: {},
    loading: false,
    isSuccess: null,
    error:""
}

export const employeeReducer = createReducer(
    initialState,
    on(EmployeePageActions.load, state => ({...state, loading: true})),
    on(EmployeeActions.success, (state, {employee}) => ({...state, loading:false, employee})),
    on(EmployeeActions.error, (state, {error}) => ({...state, error, loading:false}))
)


export const employeeFeature = createFeature({
    name: 'Employee feature',
    reducer: employeeReducer,
  })