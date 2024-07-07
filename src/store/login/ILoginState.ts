import { User } from "src/app/models/User";

export interface ILoginState {
    isLoggedIn: boolean,
    isLoggingIn: boolean,
    error: any,
}