import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:any;

  constructor(private formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      user:['',Validators.required],
      password:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  /*Getters */

  get user () {
    return this.loginForm.get('user');
  }

  get password () {
    return this.loginForm.get('password');
  }


  onSubmit(){
    console.log(this.loginForm.value);
    
  }


}
