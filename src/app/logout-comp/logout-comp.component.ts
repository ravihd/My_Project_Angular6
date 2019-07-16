import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {Router} from '@angular/router'
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-logout-comp',
  templateUrl: './logout-comp.component.html',
  styleUrls: ['./logout-comp.component.scss']
})
export class LogoutCompComponent implements OnInit
 {
  selectedFile: File

value;
Apidata;
  constructor(private service: MyserviceService, private router: Router, private http:HttpClient) {
    
    this.value=this.service.getValue()
    console.log(this.value)
  }
  ngOnInit() {
    this.service.getApiDetails().subscribe( data=> {this.updatedata(data), console.log(data)});
  }

  updatedata(data){
    console.log("Here", data)
    this.Apidata=data
    console.log(this.Apidata[1].title)
  }
  myfunction(val1)
  {
    //alert(val1)
    this.service.setValue1(val1)
    this.router.navigateByUrl("details")
  }
  logoutbutton(){
    this.router.navigateByUrl("login")
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    // upload code goes 
    this.http.post('my-backend.com/file-upload', uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event); // handle event here
      });
  }
  

}
