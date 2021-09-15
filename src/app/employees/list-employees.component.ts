import { Component, OnInit, SimpleChange } from '@angular/core';
import { Employee } from '../models/employee.model';
 // Import EmployeeService
 import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees!: Employee[];
  dataFromChild!: Employee; 
  employeeToDisplay!: Employee;
  private arrayIndex = 1;
 
  

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.employeeToDisplay = this.employees[0];
  }
  // This life cycle hook receives SimpleChanges as an Input parameter
// We can use it to retrieve previous and current values as shown below

save(employee: Employee) {
  
}
handleNotify(eventData: Employee) {
  this.dataFromChild = eventData;
  console.log('Eventdata...' + eventData);
}
nextEmployee(): void {
  if (this.employeeToDisplay.id = 1) {
    this.employeeToDisplay = this.employees[this.arrayIndex];
    this.arrayIndex++;
  } else {
    this.employeeToDisplay = this.employees[0];
    this.arrayIndex = 1;
  }}
}


