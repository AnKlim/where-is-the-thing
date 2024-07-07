import { createAction } from "@ngrx/store";

const LOADING_PREFIX = '[Loading]';

export const show = createAction(`${LOADING_PREFIX} show`);
export const hide = createAction(`${LOADING_PREFIX} hide`);