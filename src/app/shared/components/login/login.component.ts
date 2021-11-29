import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  formBuilder: any;
  userForm: any;

  constructor(private authService : AuthService,
    private router : Router) { 
      localStorage.clear()
    }

  //VALIDATION 
  isEmailValid  : boolean = true
  isPasswordValid : boolean =  true

  validateEmail(event : boolean)
  {
    this.isEmailValid = event
  }

  validatePassword(event : boolean)
  {
    this.isPasswordValid = event
  }

  //FORM
  isInValid !: boolean

  ngOnInit() : void{
    this.userForm = new FormGroup({
      emailId : new FormControl(''),
      password : new FormControl('')
    })
  }

  submitted = false;

  login() : void {
    
    var isChecked = true
    if(!this.userForm.valid){
      for(var a in this.userForm.controls){
        this.userForm.controls[a].markAsDirty();
        this.userForm.controls[a].updateValueAndValidity();
        isChecked = false;
      }
    }

    if(this.userForm.valid){
      alert('Logged in Successfully')
      console.log(this.userForm.value)

      if(this.userForm.value.emailId == 'admin@gmail.com')
      {
                localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiYWRtaW5AZ21haWwuY29tIiwicGFzc3dvcmQiOiJwYXNzd29yZCJ9.ggG74hfxh5i5Ei_ldI8vy1zJQ0a7U3h4vvpBqSPW9R0") 
                localStorage.setItem('userType','admin')
      } 
      else
      {
                localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoidXNlckBnbWFpbC5jb20iLCJwYXNzd29yZCI6InBhc3N3b3JkIn0.BVa3VUgDeU_4d3lkmLR1H_7ANlKvQ65sL-T_6umeQig")
                localStorage.setItem('userType','user')
      }

      this.userForm.reset();
      this.router.navigate(['/products'])
    }


  }

}
