import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourses } from '../model/courseclass';
import { ILighthouse } from '../model/lighthouseclass';
import { IProduct } from '../model/productclass';

@Injectable({
  providedIn: 'root'
})
export class DatabaseserviceService {

  url : string = "http://localhost:3000/student";
  urlc : string = "http://localhost:3000/courses";
  urll: string = "http://localhost:3000/lighthouse"
  constructor(private _http:HttpClient) { }


  //add data to server

  addProduct(studentObj:any){
   return this._http.post(this.url, studentObj);
  }
  //add courses Data
  addCourses(coursesObj:any){
    return this._http.post(this.urlc, coursesObj);
  }
  //add lighthouse Data
  addLighthouse(lighthouseObj:any){
    return this._http.post(this.urll,lighthouseObj);
  }

  //get data from 8database or server on html file

  getRecord():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.url);
  }

  //delete enrollment record from database or server

  deleteRecord(id:any):Observable<IProduct>{
    let baseURL = `${this.url}/${id}`;
    return this._http.delete<IProduct>(baseURL);
  }

  //delete course record  from database

  deleteCRecord(id:any):Observable<ICourses>{
    let baseURLc = `${this.urlc}/${id}`;
    return this._http.delete<ICourses>(baseURLc);
  }

  //delete lighthouse record from database
  deleteLRecord(id:any):Observable<ILighthouse>{
    let baseURLl = `${this.urll}/${id}`;
    return this._http.delete<ILighthouse>(baseURLl);
  }

  //get single record from user
  getSingleProduct(id:any):Observable<IProduct>{
    let baseUrl = `${this.url}/${id}`;
    return this._http.get<IProduct>(baseUrl);
  }

  //get single record of course table
  getSingleCourse(id:any):Observable<ICourses>{
    let baseURLc = `${this.urlc}/${id}`;
    return this._http.get<ICourses>(baseURLc);
  }

  //get single record of lighthouse
  getSingleLighthouse(id:any):Observable<ILighthouse>{
    let baseURLl = `${this.urll}/${id}`;
    return this._http.get<ILighthouse>(baseURLl);
  }

  //put or edit product code 
  updateProduct(studentObj:any){
    let baseUrl = `${this.url}/${studentObj.id}`;
    return this._http.put(baseUrl,studentObj);
  }

  //put or edit courses data
  updateCourses(coursesObj:any){
    let baseURLc  = `${this.urlc}/${coursesObj.id}`;
    return this._http.put(baseURLc,coursesObj);
  }

  //put or edit lighthouse database data
  updateLighthouse(lighthouseObj:any){
    let baseURLl = `${this.urll}/${lighthouseObj.id}`;
    return this._http.put(baseURLl,lighthouseObj);
  }
}
