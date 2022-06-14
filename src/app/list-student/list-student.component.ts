import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: any;

  constructor(private studentservice:StudentsService,
    private routes:Router
    ) { }

  ngOnInit(): void {
    this.loadStudent();
  }
  loadStudent(){
    this.studentservice.listStudent().subscribe((data:any)=>{
      // console.log(data);
      this.students = data;
    })
  }

  delStudent(datas:any){
    // console.log("new delete:",data);
    this.studentservice.deleteStudent(datas).subscribe(data=>{
      console.log(data);
      // this.students = this.students.filter((u:any)=>u!==datas)
      this.students = this.students.filter((item:any)=>item._id!==datas)
      console.log(datas);
      
      console.log(this.students);
      
      
    })
  }

}
