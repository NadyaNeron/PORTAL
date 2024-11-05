import { createActionGroup, props } from "@ngrx/store";
import { User } from "src/app/shared/types/user";

export const UserActions = createActionGroup({
    source:"user",
    events:{
        "Get":props<{ userId:string }>(),
        "Success":props<{ user:User }>(),
        "Error":props<{ error:string }>()
    }
})