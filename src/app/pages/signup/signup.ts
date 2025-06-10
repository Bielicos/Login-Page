import { Component, forwardRef, input } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, Navigation } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [DefaultLoginLayout, PrimaryInput, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  signupForm: FormGroup;

  constructor(
    private router: Router
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordRepeat: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit(): void {
    console.log(this.signupForm.value);
  }

  navigate(): void {
    this.router.navigate(['login']);
  }
}
