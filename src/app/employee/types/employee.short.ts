import { EmployeeFull } from "./employee.full."
  
export type EmployeeShort = Omit<EmployeeFull, 'email'| 'phone' | 'login'>