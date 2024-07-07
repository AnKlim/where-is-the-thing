import { ILoadingState } from "./loading/ILoadingState";
import { ILoginState } from "./login/ILoginState";

export interface IAppState {
    loading: ILoadingState;
    login: ILoginState;
}