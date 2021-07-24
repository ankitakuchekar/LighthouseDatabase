import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaddComponent } from './cadd/cadd.component';
import { CdashboardComponent } from './cdashboard/cdashboard.component';
import { CeditComponent } from './cedit/cedit.component';

const routes: Routes = [
  {path:'',component:CdashboardComponent},
  {path:'cadd',component:CaddComponent},
  {path:'cedit/:id',component:CeditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
