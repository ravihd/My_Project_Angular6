import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  myData: Array<any>;

  constructor(private formBuilder: FormBuilder, private service:MyserviceService, private router: Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          DOB  : ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.service.Updateuser(this.registerForm.value)
      alert("account has been created..")
      this.router.navigateByUrl('login')
  }

}
