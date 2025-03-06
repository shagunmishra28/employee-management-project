import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import other components if they are not standalone
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailDialogComponent } from './employee-detail-dialog/employee-detail-dialog.component';

@NgModule({
  declarations: [
    // Do not include AppComponent here since it's standalone
    // Other non-standalone components (if any) can remain here.
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [] // We will bootstrap AppComponent directly in main.ts
})
export class AppModule { }
