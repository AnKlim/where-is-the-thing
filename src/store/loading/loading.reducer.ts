import { createReducer, on } from "@ngrx/store";
import * as LoadingActions from "./loading.actions";
import { ILoadingState } from "./ILoadingState";

const initialState: ILoadingState = {
    show: false
}

const reducer = createReducer(initialState,
    on(LoadingActions.show, () => {
        return {show: true};
    }),
    on(LoadingActions.hide, () => {
        return {show: false};
    })
);

export function loadingReducer(state: ILoadingState, action) {
    return reducer(state, action);
}