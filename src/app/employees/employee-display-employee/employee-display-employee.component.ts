import { Component, OnInit, Input , Output, SimpleChanges , OnChanges , EventEmitter} from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display-employee.component.html',
  styleUrls: ['./employee-display-employee.component.css']
})
export class EmployeeDisplayEmployeeComponent implements OnInit , OnChanges{

  @Input() EmployeeId!: number

  @Input()
  employeeO!: Employee;
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();  
  
  private _employee!: Employee;

  @Input() 
  set employee(val: Employee) {
    console.log('Previous : ' + (this._employee ? this._employee.name : 'NULL'));
    console.log('Current : ' + val.name);
    this._employee = val;
  }

   // This getter is called when reading and displaying data
get employee(): Employee {
  return this._employee;
}

ngOnChanges(changes: SimpleChanges) {
  for (const propName of Object.keys(changes)) {

    const change = changes[propName];
    const from = JSON.stringify(change.previousValue);
    const to = JSON.stringify(change.currentValue);

    console.log(propName + ' changed from ' + from + ' to ' + to);
  }
}
  
  constructor() { }

  ngOnInit(): void {
    
  }
  handleClick() {
    this.notify.emit(this.employeeO);
  }
}
