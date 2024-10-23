export interface EmployeeFull {
    id: number,
    login: string,
    position: string,
    email:string,
    phone:string,
    fio:string
}
type WithNull<T extends Record<string, any>> = {
    [KEY in keyof T]: T[KEY] | null;
  }
  
export type EmployeeFullPartial = Partial<WithNull<Omit<EmployeeFull, 'id'>>>
  