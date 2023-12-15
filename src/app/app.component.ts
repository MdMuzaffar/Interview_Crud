import { Component,OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StudentService } from './service/student.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'interview_crud';
  studentData:any = [];
  myValue:any = [];
  studentdata: FormGroup | any;
constructor(private studentService:StudentService){}

  
  
ngOnInit(){
  this.studentdata = new  FormGroup({
    name : new FormControl(''),
  });
}

  add(){
    console.log(this.studentdata)
    this.studentService.addStudent(this.studentData).subscribe(res => {
      this.studentData = res;
    } )
  }

  onDelete(data:any){
    this.studentService.deleteStudent(data).subscribe ( res => {})
  }

}
