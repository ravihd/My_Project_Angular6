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

  constructor(private router: Router, private service: MyserviceService) { }

  ngOnInit() {

    this.service.getlogindetails().subscribe(data => this.Updateuserdetails(data))

  }

  gotoHome(data) {
    ``
    console.log("User name :  ", data.emailid, "password : ", data.password);
    console.log("Here>", this.Userdetails)

    this.Userdetails.forEach(value => {

      if (data.emailid == value.email) {

        if (data.password == value.Password) {

          this.service.setValue(value.FullName)

          this.router.navigateByUrl("logout")
        }else{
          alert("Invalid password")
          
        }
      } 
    })
  }

  Updateuserdetails(data: any) {
    this.Userdetails = data
  }


}
