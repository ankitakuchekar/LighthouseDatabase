import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './enrollment/dashboard/dashboard.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/Guard/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'firstpage',component:FirstpageComponent},
    {path:'enrollment',loadChildren: () => import('./enrollment/enrollment.module').then((m)=> m.EnrollmentModule),canActivate:[AuthGuard]},
    {path:'courses',loadChildren: () => import('./courses/courses.module').then((m) => m.CoursesModule),canActivate:[AuthGuard]},
    {path:'lighthouse',loadChildren:() => import('./lighthouse/lighthouse.module').then((m)=> m.LighthouseModule),canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
