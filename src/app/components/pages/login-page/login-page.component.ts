import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm!:FormGroup;
  isSubmitted = false;
  
  constructor(private formBuilder: FormBuilder,    
     private activatedRoute:ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['', Validators.required]
    });
    
  }

  get fc(){
    return this.loginForm.controls;  
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;  
    alert(`email: ${this.fc.email.value}, password: ${this.fc.password.value}`)  
  }

}
