import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateEmployee } from '../models/CreateEmployee';
import {Department} from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { SelectRequiredValidatorDirective } from '../Shared/select-required-validator.directive';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router'; 




@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  
  datePickerConfig: Partial<BsDatepickerConfig>;

   public departments: any[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
];

employee: Employee = {
  id: 0,
  name: 'null',
  gender: 'null',
  contactPreference: 'null',
  phoneNumber: 0,
  email: 'null',
  dateOfBirth: new Date(1900, 0, 1),
  department: '-1',
  isActive: true,
  photoPath: 'null',
  confirmPassword: '',
  password: ''
  
  
};

  fullName?: string;
  email?: string;
  gender?: string;
  contactPreference?: string;
  phoneNumber?: string;
  isActive?: boolean;
  previewPhoto = false;
  dateOfBirth: Date | undefined;
  photoPath?: string;
  
  department?: string ='Seleziona il dipartimento';

  

  

  

  constructor(private _employeeService: EmployeeService,
                private _router: Router) {

    
    
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true,
        minDate: new Date(1900, 0, 1),
        maxDate: new Date(2000, 11, 31),
        dateInputFormat: 'DD-MM-YYYY HH:mm:ss'
      });
    
    
    
   }

  ngOnInit(): void {

    this.isActive = true;
    
   
    
    
   
    
  }

  
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  saveEmployee(employee: Employee): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
}
