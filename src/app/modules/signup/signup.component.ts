import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registerForm:any;
  public submitted:boolean;
  public namePattern:string = "^[A-Za-z]\s[A-Za-z]";

  constructor(private formBuilder:FormBuilder ) { 
    this.registerForm = this.formBuilder.group({
      name:['',[Validators.pattern(this.namePattern),Validators.required]],
      user:['',[Validators.pattern('[A-Za-z0-9]'),Validators.minLength(6),Validators.maxLength(10),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(6),Validators.required]],
      avatar:['',]
    });

    this.submitted= false;
  }

  ngOnInit(): void {
  }

  /*Getters */

  get name(){
    return this.registerForm.get('name');
  }
  get user(){
    return this.registerForm.get('user');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get avatar(){
    return this.registerForm.get('avatar');
  }
  


  getForm(){
    this.submitted= true;
   console.log( this.registerForm.value);
   
  }
}
