import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import * as LoginActions from 'src/store/login/login.actions';


@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions, private authService: AuthService) {

    }

    login$ = createEffect(() => this.actions$.pipe(
        ofType(LoginActions.login),
        switchMap((payload: { email: string, password: string}) =>
            this.authService.login(payload.email, payload.password).pipe(
                map(user => LoginActions.loginSuccess({user})),
                catchError(error => of(LoginActions.loginFail({error})))
            )
        )
    ))
}