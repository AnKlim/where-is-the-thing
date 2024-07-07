import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/User";

const LOGIN_PREFIX = '[Login]';

export const login = createAction(`${LOGIN_PREFIX} start`);
export const loginSuccess = createAction(`${LOGIN_PREFIX} success`, props<{user: User}>());
export const loginFail = createAction(`${LOGIN_PREFIX} fail`, props<{error: any}>());
