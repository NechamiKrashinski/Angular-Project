import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersDataService } from '../data/users-data.service';
import { Router } from '@angular/router';
import { InputNotValidDirective } from '../directive/input-not-valid.directive';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputNotValidDirective],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, public UsersData: UsersDataService,public router: Router) {
    
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(9)]],
    });
  }

  sendLoginForm(){
    if(!this.loginForm.valid){

      alert("Form is not valid");
    }
    else{
      const role = this.UsersData.get(this.loginForm.value.name, this.loginForm.value.password);
      
      if (!role) {
        alert("name or password is incorrect");
      } else {
       if (role === 'teacher') {
          this.router.navigate(['./gymCourses']);
        } else if (role === 'secretary') {
          this.router.navigate(['./user']);
        } else {
          alert("User role is not recognized");
        }
      }
    }

  }



}
