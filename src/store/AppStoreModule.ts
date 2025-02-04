import { StoreModule } from "@ngrx/store";
import { loadingReducer } from "./loading/loading.reducer";
import { loginReducer } from "./login/login.reducer";
import { EffectsModule } from "@ngrx/effects";
import { LoginEffects } from "./login/login.effects";

export const AppStoreModule = [
    StoreModule.forRoot([]),
    StoreModule.forFeature("loading", loadingReducer),
    StoreModule.forFeature("login", loginReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
        LoginEffects
    ])
]