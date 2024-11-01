import { createFeature, createReducer, on } from "@ngrx/store";
import { Project } from "src/app/projects/types/project";
import { ProjectsActions, ProjectsPageActions } from "./projects.actions";

export interface ProjectsState {
    projects: Project[],
    loading: boolean,
    isSuccess: boolean | null,
    error: string
}

export const initialState: ProjectsState = {
    projects: [],
    loading: false,
    isSuccess: null,
    error: ""
}

export const projectsReducer = createReducer(
    initialState,
    on(ProjectsPageActions.load, state => ({...state, loading:true})),
    on(ProjectsActions.success, (state, {projects}) => ({...state, projects, loading:false, isSuccess:true})),
    on(ProjectsActions.error, (state, {error}) => ({...state, error, isSuccess:false, loading:false}))
)

export const projectsFeature = createFeature({
    name: "Projects Feature",
    reducer: projectsReducer
})