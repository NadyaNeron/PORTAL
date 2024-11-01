import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Project } from "src/app/projects/types/project";

export const ProjectsActions = createActionGroup({
    source:"Projects",
    events: {
        Success: props<{ projects : Project[] }>(),
        Error: props<{error:string}>()
    }
})

export const ProjectsPageActions = createActionGroup({
    source: "ProjectsPage",
    events: {
        "Load": emptyProps()
    }
})

  