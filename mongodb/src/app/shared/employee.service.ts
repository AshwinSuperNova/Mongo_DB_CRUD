import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee = new Employee;
  employees: Employee[] = [];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee): Observable<any> {
    return this.http.post<any>(this.baseURL, emp);
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseURL);
  }

  putEmployee(emp: Employee): Observable<any> {
    return this.http.put<any>(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string): Observable<any> {
    return this.http.delete<any>(this.baseURL + `/${_id}`);
  }

}
