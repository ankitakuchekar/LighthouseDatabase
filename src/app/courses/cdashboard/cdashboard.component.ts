import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DatabaseserviceService } from 'src/app/shared/service/databaseservice.service';
import { GlobalserviceService } from 'src/app/shared/service/globalservice.service';

@Component({
  selector: 'app-cdashboard',
  templateUrl: './cdashboard.component.html',
  styleUrls: ['./cdashboard.component.css']
})
export class CdashboardComponent implements OnInit {
  modalRef: any;
  searches:string = '';
  p:number = 1;
  order:string = 'cname';
  reverse:boolean = false;
  databaseservererror:any;
  coursesArray:any;
  constructor(private _globalser:GlobalserviceService,private _router:Router,private _globalservice:GlobalserviceService,private _databaseservice:DatabaseserviceService,private modalService:BsModalService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  changeOrder(){
    this.reverse=!this.reverse
  }

  // to generate model popup
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}


  fetchData(){
    this._globalservice.getData('courses').subscribe((res)=>{
      this.coursesArray = res;
    },
    (err:any)=>{
      this.databaseservererror = err;
    }
    )
  }

  deletecCData(id:any){
    if(confirm(`Are you want to delete data ${id}`)){
      this._databaseservice.deleteCRecord(id).subscribe(()=>{
        this.fetchData();
        alert("Data Deleted Successfully");
      })
    }
  }

  logout(){
    if(confirm("Are you sure want to logout")){
      this._globalser.signout();
      this._router.navigate(['/login']);
    }
  }

}
