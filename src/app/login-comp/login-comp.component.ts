import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.scss']
})
export class LoginCompComponent implements OnInit {

  Userdetails: any;
  status;

  constructor(private router: Router, private service: MyserviceService) { }

  ngOnInit() {
    this.service.getlogindetails().subscribe(data => this.Updateuserdetails(data))
  }

  gotoHome(data:any) {
   this.Check_Credentials(data) 
   console.log("in go home", this.status) 
   if (this.status==true) {
    console.log("in side if ",this.status)
     this.router.navigateByUrl("logout")
     
   } else {
     alert("Invalid Credestials")
   }
  }

  Updateuserdetails(data: any) {
    this.Userdetails = data
  }

  Check_Credentials(data: any){
    this.Userdetails.forEach(value => {

      if (data.emailid == value.email && data.password == value.Password) {
          this.service.setValue(value.FullName)
          this.status=true;
          console.log(this.status)
          return ;
             
      } 
    })
  }

}
