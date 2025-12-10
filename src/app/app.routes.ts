import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { flush } from '@angular/core/testing';

export const routes: Routes = [
    {path:'',component:EmployeeListComponent},
    {path:'create',component:EmployeeFormComponent},
    {path:'edit/:id',component:EmployeeFormComponent},
    {path:'employees',redirectTo:'',pathMatch:'full'}
];
