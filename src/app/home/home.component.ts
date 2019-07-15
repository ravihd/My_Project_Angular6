


import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
 {
value;
Apidata;
  constructor(private service: MyserviceService, private router: Router) {
    
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
  

}
