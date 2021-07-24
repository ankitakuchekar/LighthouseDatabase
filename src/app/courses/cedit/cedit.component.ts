import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseserviceService } from 'src/app/shared/service/databaseservice.service';
import { GlobalserviceService } from 'src/app/shared/service/globalservice.service';

@Component({
  selector: 'app-cedit',
  templateUrl: './cedit.component.html',
  styleUrls: ['./cedit.component.css']
})
export class CeditComponent implements OnInit {

  cObj:any;
  id:number = 0;
  constructor(private _databaseser:DatabaseserviceService, private _activateRoute:ActivatedRoute,private _router:Router,private _globalser:GlobalserviceService) { }

  ngOnInit(): void {
    
    this._activateRoute.paramMap.subscribe((para:any)=>{
      this.id = Number(para.get('id'));
      console.log(para);
    })
    this._databaseser.getSingleCourse(this.id).subscribe((res)=>{
      this.cObj = {...res};
      console.log(this.cObj);
    })
  }

  sendCourseData(val:any){
    const coursesObj = {
      id:this.id,
      cname:val.cname,
      duration : val.duration,
      cfees : val.cfees,
      trainerName : val.trainerName,
      monyer : val.monyer
    }
    this._databaseser.updateCourses(coursesObj).subscribe(()=>{
      alert("Courses Data added Successfully");
      this._router.navigate(['/courses']);
    })
  }

  

  logout(){
    if(confirm("Are you sure want to logout")){
      this._globalser.signout();
      this._router.navigate(['/login']);
    }
  }
}
