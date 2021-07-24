import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentstudentRoutingModule } from './enrollmentstudent-routing.module';
import { EnrollmentstudentComponent } from './enrollmentstudent.component';


@NgModule({
  declarations: [
    EnrollmentstudentComponent
  ],
  imports: [
    CommonModule,
    EnrollmentstudentRoutingModule
  ]
})
export class EnrollmentstudentModule { }
