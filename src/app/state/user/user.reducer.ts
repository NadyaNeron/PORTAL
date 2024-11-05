import { createReducer, on } from "@ngrx/store"
import { UserActions } from "./user.actions"
import { loadavg } from "os"
import { User } from "src/app/shared/types/user"
  

export interface UserState {
    user: User,
    loading: boolean,
    isSucces: boolean,
    error:string
}


export const initialState:UserState = {
    user: {
        "birthday": "",
        "clients": [],
        "competences": [],
        "department": "",
        "division": "PRODUCTION",
        "email": "",
        "hobby": "",
        "id": "",
        "location": "",
        "name": "",
        "phone": "",
        "photoUrl": "",
        "role": "",
        "telegram": ""
    },
    loading:false,
    isSucces:false,
    error:""
}

export const userReducer = createReducer(
    initialState, 
    on(UserActions.get, (state) => ({...state, loading:true})),
    on(UserActions.success, (state, {user}) => ({...state, user, loading:false, isSucces:true})),
    on(UserActions.error, (state, {error}) => ({...state, error, loading:false, isSucces:false}))
)
