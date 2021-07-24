import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalserviceService } from '../shared/service/globalservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['../../assets/Lighthouse.png','../../assets/Light-House-1.jpg','../../assets/Light-House-4.jpg','../../assets/lighthouse5.png','../../assets/lighthouse6.jpg'];

  userArray: any;
  userpassword:any;
  userId:any;
  constructor(private _router:Router, private _globalservice:GlobalserviceService) { }

  ngOnInit(): void {
  }

  checkdata(){
    this._globalservice.getData('users').subscribe((res)=>{
      this.userArray = res;
      console.log(this.userArray);
      const data = this.userArray.filter((item:any)=> {
        return (item.username === this.userId) && (item.password === this.userpassword)
      })
      if(data.length>0){
        this._globalservice.signin(this.userId);
        this._router.navigate(['/enrollment']);
        console.log(this.userArray);

      }
      else{
        alert("invalid credential");
        this.userId = '';
        this.userpassword = '';
      }
    })
  }


}
