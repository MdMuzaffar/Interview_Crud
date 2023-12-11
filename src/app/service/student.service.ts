import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor( private http:HttpClient) { }

  url = 'htt';
  addStudent(data:any){
    return this.http.post<any>(this.url,data)
  }

  deleteStudent(id:any){
    return this.http.delete<any>(this.url, id)
  }

}
