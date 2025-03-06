import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailDialogComponent } from './employee-detail-dialog.component';

describe('EmployeeDetailDialogComponent', () => {
  let component: EmployeeDetailDialogComponent;
  let fixture: ComponentFixture<EmployeeDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDetailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
