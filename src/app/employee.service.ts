import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  employeeNumber: string;
  division: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // JSON Server URL - ensure JSON Server is running and db.json is configured correctly.
  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  // GET: Retrieve the list of employees from the JSON Server.
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  // PUT: Update a specific employee's data based on their unique id.
  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.put<Employee>(url, employee);
  }

  // Optionally, add methods for creating or deleting employees if required.
}
