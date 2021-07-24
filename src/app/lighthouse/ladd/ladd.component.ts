import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DatabaseserviceService } from 'src/app/shared/service/databaseservice.service';
import { GlobalserviceService } from 'src/app/shared/service/globalservice.service';

@Component({
  selector: 'app-ladd',
  templateUrl: './ladd.component.html',
  styleUrls: ['./ladd.component.css']
})
export class LaddComponent implements OnInit {

 constructor(private _databaseservice:DatabaseserviceService,private _router:Router,private _globalser:GlobalserviceService){}
  ngOnInit(): void {
  }
  sendLighthouseData(val:any){
    const lighthouseObj={
        lname:val.lname,
        lcontact:val.lcontact,
        laddress1:val.laddress1,
        laddress2:val.laddress2,
        laddresscity:val.laddresscity,
        laddressstate:val.laddressstate,
        laddresspin:val.laddresspin
    }
    this._databaseservice.addLighthouse(lighthouseObj).subscribe(()=>{
      alert("Lighthouse Data Added Successfully");
      this._router.navigate(['/lighthouse']);
    })
  }
  logout(){
    if(confirm("Are you sure want to logout")){
      this._globalser.signout();
      this._router.navigate(['/login']);
    }
  }

}
