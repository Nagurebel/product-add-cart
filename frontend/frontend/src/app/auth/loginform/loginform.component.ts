import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  loginForm: any;
  compareRole: any;
  constructor(
    private authServices: AuthService,
    private fb: FormBuilder,
    private route: Router // private regiter: RegiterformComponent
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.loginForm.value);
    this.authServices.loginPost(this.loginForm.value).subscribe((data) => {
      console.log(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('login', 'login');

      for (let roleData of data.data) {
        this.compareRole = roleData.role;
      }
      if (this.compareRole === 'admin') {
        this.route.navigate(['dashboard/adminDashboard']);
      } else {
        this.route.navigate(['dashboard/userDashboard']);
      }
    });
  }
}
