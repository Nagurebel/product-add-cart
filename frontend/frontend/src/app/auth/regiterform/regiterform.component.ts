import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-regiterform',
  templateUrl: './regiterform.component.html',
  styleUrls: ['./regiterform.component.css'],
})
export class RegiterformComponent implements OnInit {
  registerForm: any;
  constructor(
    private authServise: AuthService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.registerForm = this.fb.group({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  submit() {
    this.authServise.registerPost(this.registerForm.value).subscribe((data) => {
      console.log(data);
      alert('Registration is Successfull');
      this.route.navigate(['/login']);
    });
  }
}
