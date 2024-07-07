import { Injectable } from '@angular/core';
import { CanLoad, CanMatch, GuardResult, MaybeAsync, Route, Router, UrlSegment } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap, take } from 'rxjs';
import { IAppState } from 'src/store/AppState';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanMatch {

  constructor(private store: Store<IAppState>, private router: Router) { }

  canMatch(): Observable<boolean> {
    return this.store.select('login').pipe(
      take(1),
      switchMap(loginState => {
        if (loginState.isLoggedIn) {
          return of(loginState.isLoggedIn);
        }
        this.router.navigateByUrl('login');
        return of(false);
      })
    )
  }
}
