import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { regContact, regEmail, regName, regPassword } from 'src/app/shared/constant/constant';
import { DatabaseserviceService } from 'src/app/shared/service/databaseservice.service';
import { GlobalserviceService } from 'src/app/shared/service/globalservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  qualification: string[] = ["SSC","HSC","BSc","MSc","BCA","BCS","BE","BCom","BA","other"];
  yearpassing : string[] = ["2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996"];
  workexperience: string[] = ["0","1","2","3","4","5+"];
  lighthousebrnch: string[] = ["Aundh-LH","Yerwada-LH","Hadapsar-LH","Bhavanipeth-LH","Bibwewadi-LH","Warje-LH"];
  courses: string[] = ["Java","Angular"];
  wheredidcomeu: string[] = ["Friend","SMS","Advertisement"];
  
  selectedValue: string = '';
  status: string = '';
  lightorg: string = '';
  hinstitute:string = '';
  
  namePattern = regName;
  passwordPattern = regPassword;
  emailPattern = regEmail;
  contactPattern = regContact;

  constructor(private _databaseser:DatabaseserviceService,private _router:Router,private _golbalser:GlobalserviceService) { }

  ngOnInit(): void {
  }

  sendStudentData(val:any){

    const studentObj = {
      fullname:val.fullname,
      contactno:val.contactno,
      email:val.email,
      qualification:val.qualification,
      specific:val.specific,
      statusedu:val.statusedu,
      yearpass:val.yearpass,
      clgname:val.clgname,
      city:val.city,
      workexp:val.workexp,
      org:val.org,
      lhbranch:val.lhbranch,
      course:val.course,
      batch:val.batch,
      wheredid:val.wheredid
    }
    
    this._databaseser.addProduct(studentObj).subscribe(()=>{
      alert("added");
      this._router.navigate(['/enrollment']);
    })
      
  }

  logout(){
    if(confirm("Are you sure want to logout")){
      this._golbalser.signout();
      this._router.navigate(['/login']);
    }
  }

}
