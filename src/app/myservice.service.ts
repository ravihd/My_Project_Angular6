import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Observable, of } from 'rxjs';
const url = "https://my-cool-project1.herokuapp.com/post";
const user_url="https://my-cool-project1.herokuapp.com/users";
@Injectable({
  providedIn: 'root'
})


export class MyserviceService {

  value: any;
  value1: any;
  userdetails:any;
  newuer: any;
  date : any;
 // dob: any;


  constructor(private http: HttpClient) {
   // this.date = new Date();

  }

  getValue() {
    //this.http.get()
    //console.log("data", this.value1)
    return this.value
    
  }

  getApiDetails() {
    //console.log(this.suffix)
    return this.http.get(url);

  }

  getdetails1() {
    
    return this.http.get(url + "/" + this.value1)
  }


  getlogindetails() {
    return this.http.get(user_url)
  }
   
  //Updtae new user

  Updateuser(data)
  {
  //this.dob=data.DOB
    this.value1=data.firstName;
    console.log(data.email, data.password)
      this.http.post(user_url,
        {
         "email":data.email,
          "Password":data.password,
          "FullName" : data.firstName +" "+ data.lastName,
           "DOB" : data.DOB
        }).subscribe( error  => {
          
          console.log("Error", error);
          
          });
   // console.log(this.dob.substring(1,10))
  }

  

  setValue1(updtae_value: any) {
    console.log("Here>>>>>>>>>>>>>>>>>>>12121212.", this.value1)
    this.value1 = updtae_value;

  }
  setValue(updtae_value: any) {
    this.value = updtae_value
    console.log("form service ", this.value)
  }
  setUserDetails(data){
    this.userdetails=data;
  }

}
