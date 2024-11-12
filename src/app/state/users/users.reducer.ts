import { createFeature, createReducer, on } from "@ngrx/store";
import { UserShort } from "src/app/shared/types/user.short";
import { UsersActions, UsersPageActions } from "./users.actions";
import { moveItemInArray } from "@angular/cdk/drag-drop";

export interface UsersState{
    users: UserShort[],
    loading: boolean,
    isSuccess: boolean | null,
    error: string
}

export const initialState: UsersState = {
    users: [],
    loading: false,
    isSuccess: null,
    error: ""
}

export const usersReducer = createReducer(
    initialState,
    on(UsersPageActions.load, (state) => ({...state, loading: true})),
    on(UsersActions.success, (state, { users }) => ({...state, users: new Array(1).fill(users).flat(), loading: false, isSuccess:true})),
    on(UsersActions.error, (state, { error }) => ({...state, error, loading:false, isSuccess:false})),
    on(UsersActions.moveItem, (state, {previousIndex, currentIndex}) => {
        if (previousIndex === currentIndex) {
            return {...state};
        }

        const temp = [...state.users]
        moveItemInArray(temp, previousIndex, currentIndex)
        
        return {
        ...state, 
        users: [...temp]
        }
    })
)
export const usersFeature = createFeature({
    name: 'Users feature',
    reducer: usersReducer,
  })