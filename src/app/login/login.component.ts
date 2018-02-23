import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription: Subscription;
  token: {};
  errorMessage: any;

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });
  }

  isErrorVisible(field: string, error: string) {
    return this.form.controls[field].touched && this.form.controls[field].errors && this.form.controls[field].errors[error];
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  login(form) {
    const credentials = {email: form.value.email, password: form.value.password};
    this.subscription = this.auth.login(credentials).subscribe((result => {
        this.token = result;
        if (this.token.token === 'QpwL5tke4Pnpja7X') {
          this.router.navigate(['/books']);
        }

        if (result.error === 'Missing email or username') {
          this.errorMessage = result.error;
        }
      }),
    );
  }
}

