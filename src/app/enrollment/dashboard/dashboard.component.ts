import { Component, OnInit, TemplateRef } from '@angular/core';
import { DatabaseserviceService } from 'src/app/shared/service/databaseservice.service';
import { GlobalserviceService } from 'src/app/shared/service/globalservice.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  modalRef: any;
  p:number = 1;
  order: string = 'fullname';
  reverse:boolean = false;
  TemplateRef :any;
  modelRef: any;

  searches:string = '';

  studentArray: any;
  databaseservererror: any;
  constructor(private _router:Router,private _databaseser:DatabaseserviceService,private _globalser:GlobalserviceService,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  changeOrder(){
    this.reverse = !this.reverse;
  }

  
// to generate model popup
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}


  fetchData(){
    //this._databaseser.getRecord().subscribe((res:any)=>{
      //  this.studentArray = res;
       // console.log(this.studentArray);
    //})

    this._globalser.getData('student').subscribe((res)=>{
      this.studentArray = res;
    },
    (err:any)=>{
      this.databaseservererror = err;
    })
  }

  deletedata(id:any){
    if(confirm(`Are you sure want to delete data ${id}`)){
      this._databaseser.deleteRecord(id).subscribe(()=>{
        this.fetchData();
        alert("data deleted");
      })
    }
  }

  logout(){
    if(confirm("Are You sure want to logout")){
      this._globalser.signout();
      this._router.navigate(['/login']);
    }
  }

}
