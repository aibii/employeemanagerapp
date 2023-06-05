import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root' //
})
export class EmployeeService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getEmployees(): Observable<Employee[]> { // code is using the Angular HttpClient module to make HTTP requests
        //by default, the HttpClient methods return Observable objects.
        return this.http.get<Employee[]>(`${this.apiServerUrl}/employees/all`);
    }

    public addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiServerUrl}/employees/add`, employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiServerUrl}/employees/update`, employee);
    }

    public deleteEmployee(employeeId: number): Observable<void> { //метод возвращает объект Observable, который будет излучать (эмиттировать) значения типа void.
        return this.http.delete<void>(`${this.apiServerUrl}/employees/delete/${employeeId}`);
    }
}
