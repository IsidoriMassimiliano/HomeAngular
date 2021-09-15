import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDisplayEmployeeComponent } from './employee-display-employee.component';

describe('EmployeeDisplayEmployeeComponent', () => {
  let component: EmployeeDisplayEmployeeComponent;
  let fixture: ComponentFixture<EmployeeDisplayEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDisplayEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDisplayEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
