import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddComponent } from './ladd/ladd.component';
import { LdashboardComponent } from './ldashboard/ldashboard.component';
import { LeditComponent } from './ledit/ledit.component';

const routes: Routes = [
  {path:'',component:LdashboardComponent},
  {path:'ladd',component:LaddComponent},
  {path:'ledit/:id',component:LeditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LighthouseRoutingModule { }
