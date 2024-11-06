import { createFeature, createReducer, on } from "@ngrx/store";
import { UserShort } from "src/app/shared/types/user.short";
import { UsersActions, UsersPageActions } from "./users.actions";

export interface UsersState{
    users: UserShort[],
    loading: boolean,
    isSuccess: boolean | null
}

export const initialState: UsersState = {
    users: [],
    loading: false,
    isSuccess: null
}

export const usersReducer = createReducer(
    initialState,
    on(UsersPageActions.load, (state) => ({...state, loading: true})),
    on(UsersActions.success, (state, { users }) => ({...state, users: new Array(10).fill(users).flat(), loading: false, isSuccess:true})),
    on(UsersActions.error, (state, { error }) => ({...state, error, loading:false, isSuccess:false}))
)
export const usersFeature = createFeature({
    name: 'Users feature',
    reducer: usersReducer,
  })