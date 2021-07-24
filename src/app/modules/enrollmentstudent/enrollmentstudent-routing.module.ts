import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentstudentComponent } from './enrollmentstudent.component';

const routes: Routes = [
  {path:'',component:EnrollmentstudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentstudentRoutingModule { }
