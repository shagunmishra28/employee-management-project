import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card'; // Import this
import { EmployeeService, Employee } from '../employee.service';
import { EmployeeDetailDialogComponent } from '../employee-detail-dialog/employee-detail-dialog.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatIconModule,
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule  // Add MatCardModule here
  ],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'employeeNumber', 'division'];

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        console.log('Loaded employees:', data);
        this.employees = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error fetching employees:', err)
    });
  }

  openEmployeeDetail(employee: Employee): void {
    const dialogRef = this.dialog.open(EmployeeDetailDialogComponent, {
      width: '400px',
      data: { ...employee }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog returned result:', result);
        this.employeeService.updateEmployee(result).subscribe({
          next: (updatedEmployee) => {
            console.log('PUT request response:', updatedEmployee);
            this.loadEmployees();
          },
          error: (err) => console.error('Error updating employee:', err)
        });
      } else {
        console.log('Dialog was closed without saving changes.');
      }
    });
  }
}
