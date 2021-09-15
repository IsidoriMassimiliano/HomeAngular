import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mark@pragimtech.com',
            dateOfBirth: new Date('10/25/1988'),
            department: 'IT',
            isActive: true,
            photoPath: 'assets/images/mark.png'
        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: 2345978640,
            email: 'm.isidori@tecninf.it',
            dateOfBirth: new Date('11/20/1979'),
            department: 'HR',
            isActive: true,
            photoPath: 'assets/images/mary.png'
        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 5432978640,
            email: 'm.isidori@tecninf.it',
            dateOfBirth: new Date('3/25/1976'),
            department: 'IT',
            isActive: false,
            photoPath: 'assets/images/john.png'
        },
    ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    save(employee: Employee) {
        this.listEmployees.push(employee);
    }
}