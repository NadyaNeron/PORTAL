import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ProjectService } from "./projects.service";
import { ProjectsActions, ProjectsPageActions } from "./projects.actions";

@Injectable()
export class ProjectsEffects {
  constructor(private actions$: Actions, private projectsService: ProjectService) {}


  load$ = createEffect(() =>
     this.actions$.pipe(
      ofType(ProjectsPageActions.load),
      switchMap(() =>
        this.projectsService.getProjects().pipe(
          map((projects) => ProjectsActions.success({ projects })),
          catchError((error) =>
            of(ProjectsActions.error({ error: error.message }))
          )
        )
      ) 
    ))
}