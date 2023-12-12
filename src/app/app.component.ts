import { Component,OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StudentService } from './service/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'interview_crud';
  studentData:any = [];

  myValue:any = [];
  // myForm : FormGroup;
  constructor(private studentService:StudentService){}

ngOnInit(){}

  add(data:any){
    this.studentService.addStudent(data).subscribe(res => {
      this.studentData = res;
    } )
  }

  onDelete(data:any){
    this.studentService.deleteStudent(data).subscribe ( res => {})
  }

}
