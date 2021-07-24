import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  
  baseUrl = "http://localhost:3000/";
  private myheader = {headers:new HttpHeaders().set('Content-Type','application/json')};

  
  constructor(private _http:HttpClient) { }

  getData(path:string):Observable<any[]>{
    return this._http.get<any[]>(this.baseUrl + path);
  }

  deleteData(path:string,id:number):Observable<any>{
    const url = `${this.baseUrl}/${path}/${id}`;
    return this._http.delete<any>(url);
  }

  signin(user:any){
    sessionStorage.setItem('users',user);
  }
  signout(){
    sessionStorage.removeItem('users');
  }
  addStudent(path:string,body:{}):Observable<any>{
    const url = `${this.baseUrl}/${path}`
    return this._http.post<any>(url,body,this.myheader).pipe(catchError(this.formatError));
  }
  
  private formatError(error:HttpErrorResponse){
    return throwError(error.message || "Server facing some issues");
  }

  //get single data
  getSingleData(path:string,id:number):Observable<any>{
      const url = `${this.baseUrl}/${path}/${id}`
      return this._http.get(url).pipe(catchError(this.formatError));
  }

  //update data
  updateData(path:string,body:{},id:number):Observable<any>{
    const url = `${this.baseUrl}/${path}/${id}`
    return this._http.put(url,body,this.myheader).pipe(catchError(this.formatError));
}

}







/*addStudent(studentObj:any){
    this._http.post(this.baseUrl,studentObj);
  }
*/