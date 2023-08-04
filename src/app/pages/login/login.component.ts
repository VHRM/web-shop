import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppFacade } from 'src/app/app.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  visible: Boolean;

  constructor(private readonly facade: AppFacade, private readonly router: Router) {
    this.visible = false;
    this.loginForm = new FormGroup({
      user: new FormControl(null, [Validators.required]),
      pass: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('user') !== null) {
      this.router.navigate(['home']);
    }
  }

  getErrorMessage(formControlName: string): string {
    let errorString = ''
    const errors = {
      user: {
        required: 'Você deve adicionar nome de usuário',
      },
      pass: {
        required: 'Você deve adicionar a sua senha',
      }
    }
    const currentErrorsObj = this.loginForm.get(formControlName)?.errors;
    if (currentErrorsObj) {
      const formControlError = errors[formControlName as keyof typeof errors];
      const currentErrorStr = Object.getOwnPropertyNames(currentErrorsObj)[0];
      errorString = formControlError[currentErrorStr as keyof typeof formControlError];
    }
    return errorString;
  }

  submitForm(): void {
    let validForm = true;
    if (this.loginForm.invalid) {
      validForm = false;
      this.loginForm.markAllAsTouched();
    }

    if (validForm) {
      this.facade.login(this.loginForm.get('user')!.value);
      this.router.navigate(['home']);
    }
  }
}
