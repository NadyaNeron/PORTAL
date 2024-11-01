import {createActionGroup, createReducer, on, props } from "@ngrx/store";
import { Config } from "../../shared/types/config";

export const AppActions = createActionGroup({
    source:"App",
    events: {
        "Load": props<Config>()
    }
})

export interface AppState {
    config: Config
}

export const initialState:AppState = {
    config:{
        apiUrl:""
    }
}
  
export const appReducer = createReducer(
    initialState,
    on(AppActions.load, (state, config ) => ( {...state, config:{apiUrl:config.apiUrl}}))
);