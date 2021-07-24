import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DatabaseserviceService } from 'src/app/shared/service/databaseservice.service';
import { GlobalserviceService } from 'src/app/shared/service/globalservice.service';

@Component({
  selector: 'app-ldashboard',
  templateUrl: './ldashboard.component.html',
  styleUrls: ['./ldashboard.component.css']
})
export class LdashboardComponent implements OnInit {
 
  searches:string = '';
  order:string = 'lname';
  reverse:boolean = false;
  p:number = 1;
  lighthouseArray:any;
  databaseservererror:any;
  modalRef: any;  
  constructor(private _globalser:GlobalserviceService,private _router:Router,private _globalservice:GlobalserviceService,private modalService:BsModalService,private _databaseservice:DatabaseserviceService){}
  ngOnInit() {
    this.fetchData();
  }

  changeOrder() {
    this.reverse=!this.reverse
  }
  fetchData(){
    this._globalservice.getData('lighthouse').subscribe((res)=>{
      this.lighthouseArray = res;
    },
    (err:any)=>{
      this.databaseservererror = err;
    })
  }

  
// to generate model popup
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

deletedata(id:any){
  if(confirm(`Are you sure want to delete data ${id}`)){
    this._databaseservice.deleteLRecord(id).subscribe(()=>{
      this.fetchData();
      alert("data deleted");
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