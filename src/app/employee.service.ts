import { Employee } from './../models/employee';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl=`${environment.apiUrl}/employee`;

  constructor(private http:HttpClient) 
  {

  }

  getEmployees():Observable<Employee[]>{
    console.log(this.apiUrl);
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  createEmployee(emp:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl,emp);
  }

  deleteEmployee(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateEmployee(emp:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.apiUrl}/${emp.id}`,emp);
  }

  

  

}
