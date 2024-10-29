import { EmployeeShort } from "./employee.short"

export interface EmployeeFull extends EmployeeShort{
    login: string,
    email:string,
    phone:string,
}
type WithNull<T extends Record<string, any>> = {
    [KEY in keyof T]: T[KEY] | null;
  }
  
export type EmployeeFullPartial = Partial<WithNull<Omit<EmployeeFull, 'id'>>>
