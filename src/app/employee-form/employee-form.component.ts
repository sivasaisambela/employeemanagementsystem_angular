import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {

  employee:Employee = {
    id:0,
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    position:''
  }

  errorMessage:string="";
  isEditing:boolean = false;

   constructor(private empService:EmployeeService,private router:Router,
    private activatedRoute:ActivatedRoute
   ) {
    
   }

  ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe((result)=>
    {
      const id= result.get('id');
      if(id){
        this.isEditing=true;
      }
      else{
        
      }
    });
  }

  onSubmit(): void {
   // console.log(this.employee);
    //logic to create new employee
    this.empService.createEmployee(this.employee)
        //.subscribe((result)=>console.log(result));
        .subscribe({
          next:()=>{
            this.router.navigate(['/'])
          },
          error: (err)=>{
            this.errorMessage=`Error:${err.status}`;
            console.log(err);
          }
        });
  }

}
