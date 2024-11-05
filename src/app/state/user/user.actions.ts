import { createActionGroup, props } from "@ngrx/store";
import { User } from "src/app/shared/types/user";

export const UserActions = createActionGroup({
    source:"User",
    events:{
        "Success":props<{ user:User }>(),
        "Error":props<{ error:string }>()
    }
})

export const UserPageActions = createActionGroup({
    source: "UserPage",
    events:{
        "Load":props<{ userId: string }>()
    }
})