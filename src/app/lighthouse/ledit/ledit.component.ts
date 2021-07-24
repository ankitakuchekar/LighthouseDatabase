import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseserviceService } from 'src/app/shared/service/databaseservice.service';
import { GlobalserviceService } from 'src/app/shared/service/globalservice.service';

@Component({
  selector: 'app-ledit',
  templateUrl: './ledit.component.html',
  styleUrls: ['./ledit.component.css']
})
export class LeditComponent implements OnInit {

  id:Number = 1;
  lighthouseObj:any;
  constructor(private _globalser:GlobalserviceService,private _activateRoute:ActivatedRoute,private _databaseservice:DatabaseserviceService,private _router:Router) { }

  ngOnInit(): void {

    this._activateRoute.paramMap.subscribe((para:any)=>{
      this.id = Number(para.get('id'));
      console.log(para);
    })

    this._databaseservice.getSingleLighthouse(this.id).subscribe((res)=>{
      this.lighthouseObj = {...res};
      console.log(this.lighthouseObj);
    })
  }


  updateLighthouseData(val:any){
      const lighthouseObj = {
        id:this.id,
        lname:val.lname,
        lcontact:val.lcontact,
        laddress1:val.laddress1,
        laddress2:val.laddress2,
        laddresscity:val.laddresscity,
        laddressstate:val.laddressstate,
        laddresspin:val.laddresspin      }
      this._databaseservice.updateLighthouse(lighthouseObj).subscribe(()=>{
        alert("lighthouse data updated successfully");
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

