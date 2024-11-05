import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserShort } from "src/app/shared/types/user.short";

export const UsersActions = createActionGroup({
    source: 'Users',
    events: {
      Success: props<{ users: UserShort[]}>(),
      Error: props<{ error: string }>(),
    },
})
export const UsersPageActions = createActionGroup({
    source: "UsersPage",
    events: {
        "Load": emptyProps()
    }
})