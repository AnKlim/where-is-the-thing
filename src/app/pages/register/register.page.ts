import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPageForm } from './register.page.form';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/store/AppState';
import { Subscription } from 'rxjs';
import * as LoginActions from 'src/store/login/login.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;
  loginStateSubscription: Subscription;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<IAppState>) { }

  ngOnInit() {
    this.form = new RegisterPageForm(this.formBuilder).createForm();
  }

  register() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(LoginActions.login({ email: this.form.get('email').value, password: this.form.get('password').value}));
    }
  }

  natigateToLogin() {
    this.router.navigateByUrl('login');
  }

}
