import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/store/AppState';
import * as LoadingActions from 'src/store/loading/loading.actions';
import * as LoginActions from 'src/store/login/login.actions';
import { Subscription } from 'rxjs';
import { ILoginState } from 'src/store/login/ILoginState';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  form: FormGroup;
  loginStateSubscription: Subscription;

  constructor(private router: Router, private formBuilder: FormBuilder,
    private store: Store<IAppState>, private navController: NavController) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();

    this.loginStateSubscription = this.store.select('login').subscribe(loginState => {
      this.onIsLoggedIn(loginState);


      if (loginState.isLoggingIn) {
        this.store.dispatch(LoadingActions.show());
      } else {
        this.store.dispatch(LoadingActions.hide());
      }
    })
  }

  ngOnDestroy() {
    if (this.loginStateSubscription) {
      this.loginStateSubscription.unsubscribe();
    }
  }

  private onIsLoggedIn(loginState: ILoginState) {
    if (loginState.isLoggedIn) {
      this.navController.navigateRoot('home');
    }
  }

  login() {
    this.store.dispatch(LoginActions.login({ email: this.form.get('email').value, password: this.form.get('password').value}));
  }

  navigateToRegister() {
    this.router.navigateByUrl('register');
  }
}
