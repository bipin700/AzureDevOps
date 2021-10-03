import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:5000/api";
  readonly PhotoUrl="http://localhost:5000/Photo";

  constructor(private http:HttpClient) { }

  getDeptList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/',val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/employee/',val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/employee/savefile',val);
  }



}
