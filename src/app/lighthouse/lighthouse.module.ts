import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LighthouseRoutingModule } from './lighthouse-routing.module';
import { LdashboardComponent } from './ldashboard/ldashboard.component';
import { LaddComponent } from './ladd/ladd.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { LeditComponent } from './ledit/ledit.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    LdashboardComponent,
    LaddComponent,
    LeditComponent
  ],
  imports: [
    CommonModule,
    LighthouseRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule
  ]
})
export class LighthouseModule { }
