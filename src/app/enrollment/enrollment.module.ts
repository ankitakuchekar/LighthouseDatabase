import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentRoutingModule } from './enrollment-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MatListModule} from '@angular/material/list';
import { CoursesComponent } from '../modules/courses/courses.component';
import { CoursesModule } from '../courses/courses.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnrollmenteditComponent } from './enrollmentedit/enrollmentedit.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    AddComponent,
    EnrollmenteditComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    EnrollmentRoutingModule,
    MatToolbarModule,
    RouterModule,
    MatListModule,
    CoursesModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule
  ],
  exports: [DashboardComponent,AddComponent]
})
export class EnrollmentModule { }
