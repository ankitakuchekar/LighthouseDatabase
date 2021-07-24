import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CaddComponent } from './cadd/cadd.component';
import { CdashboardComponent } from './cdashboard/cdashboard.component';
import { CeditComponent } from './cedit/cedit.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    CaddComponent,
    CdashboardComponent,
    CeditComponent
    ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule
  ],
})
export class CoursesModule { }
