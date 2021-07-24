import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollmenteditComponent } from './enrollmentedit/enrollmentedit.component';

const routes: Routes = [
{path:'',component:DashboardComponent},
{path:'dashboard',component:DashboardComponent},
{path:'add',component:AddComponent},
{path:'enrolledit/:id',component:EnrollmenteditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentRoutingModule { }
