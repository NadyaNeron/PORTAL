import {createActionGroup, createReducer, emptyProps, on, props } from "@ngrx/store";
import { Config } from "../../shared/types/config";
import { User } from "src/app/shared/types/user";

export const AppActions = createActionGroup({
    source:"App",
    events: {
        "Load": props<{ config:Config }>(),
        "Set current user": props<{ currentUser:User }>(),
        "Reset current user": emptyProps()
    }
})

export interface AppState {
    config: Config,
    currentUser: User | null
}

export const initialState:AppState = {
    config:{
        apiUrl:"",
        refreshTokenInterval:undefined
    },
    currentUser: null
}
  
export const appReducer = createReducer(
    initialState,
    on(AppActions.load, (state, { config }) => ( {...state, config})),
    on(AppActions.setCurrentUser, (state, { currentUser }) => ({...state,  currentUser })),
    on(AppActions.resetCurrentUser, (state) => ({...state, currentUser:null}))
);