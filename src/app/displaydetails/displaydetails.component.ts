import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.scss']
})
export class DisplaydetailsComponent implements OnInit {
  httpdata: any;
  constructor(private service: MyserviceService, private router: Router) { 
  
  
  }

  ngOnInit() {
    this.service.getdetails1().subscribe(data=> { this.updatedata(data), console.log(data)});
    console.log("Here>>>>>Ravi", this.httpdata[0])
    
  }
  
  updatedata(data){
    this.httpdata=data;
    console.log("Ravi", this.httpdata.address.street)
  }
   Logoutbutton(){
    this.router.navigateByUrl("login")

   }
   backbutton(){
     this.router.navigateByUrl("logout")
   }
}
