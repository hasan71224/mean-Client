import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

  addStudent(student:any){
    return this.http.post('http://localhost:8080/endpoint/add-student', student)
  }

  listStudent(){
    return this.http.get('http://localhost:8080/endpoint/')
  }

  deleteStudent(id:any){
    // console.log("student id:", id);
    return this.http.delete(`http://localhost:8080/endpoint/del-student/${id}`);
  }

  //get data in update student page
  singleStudent(id:any){
    return this.http.get(`http://localhost:8080/endpoint/student/${id}`);
  }

  // update student
  updateStudent(id:any, student:any){
    return this.http.put(`http://localhost:8080/endpoint/update-student/${id}`, student);
  }
}
