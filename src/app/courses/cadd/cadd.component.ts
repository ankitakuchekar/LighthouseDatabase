import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DatabaseserviceService } from 'src/app/shared/service/databaseservice.service';
import { GlobalserviceService } from 'src/app/shared/service/globalservice.service';

@Component({
  selector: 'app-cadd',
  templateUrl: './cadd.component.html',
  styleUrls: ['./cadd.component.css']
})
export class CaddComponent implements OnInit {

  coursesObj:any;
  constructor(private _globalser:GlobalserviceService,private modalService: BsModalService,private _databaservice: DatabaseserviceService,private _router:Router) { }

  ngOnInit(): void {
  }
  sendCourseData(val:any){
    const coursesObj = {
      cname : val.cname,
      duration : val.duration,
      cfees : val.cfees,
      trainerName : val.trainerName,
      monyer : val.monyer
    }
     this._databaservice.addCourses(coursesObj).subscribe(()=>{
       alert("Courses Data Added Successfully");
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
