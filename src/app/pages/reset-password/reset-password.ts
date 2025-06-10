import { Component, Input, Output } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';

@Component({
  selector: 'app-reset-password',
  imports: [DefaultLoginLayout, ReactiveFormsModule, PrimaryInput],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss'
})
export class ResetPassword {
  resetPasswordForm: FormGroup;

  constructor() {
    this.resetPasswordForm = new FormGroup({
      resetPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      resetPasswordCheck: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit(): void {
    console.log(this.resetPasswordForm.value);
  }

}
