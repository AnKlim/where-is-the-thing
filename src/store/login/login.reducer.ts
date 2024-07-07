import { createReducer, on } from "@ngrx/store";
import * as LoginActions from "./login.actions";
import { ILoginState } from "./ILoginState";

const initialState: ILoginState = {
    isLoggedIn: false,
    isLoggingIn: false,
    error: null
}

const reducer = createReducer(initialState,
    on(LoginActions.login, currentState => {
        return {
            ...currentState,
            isLoggedIn: false,
            isLoggingIn: true,
            error: null
        };
    }),
    on(LoginActions.loginSuccess, currentState => {
        return {
            ...currentState,
            isLoggedIn: true,
            isLoggingIn: false,
            error: null
        };
    }),
    on(LoginActions.loginFail, (currentState, action) => {
        return {
            ...currentState,
            isLoggedIn: false,
            isLoggingIn: false,
            error: action.error
        };
    })
);

export function loginReducer(state: ILoginState, action) {
    return reducer(state, action);
}