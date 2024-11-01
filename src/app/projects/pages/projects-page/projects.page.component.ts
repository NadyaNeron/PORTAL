import { Component, OnInit } from '@angular/core';
import { ProjectsListComponent } from "../../components/projects-list/projects.list.component";
import { Store } from '@ngrx/store';
import { ProjectsPageActions } from 'src/app/state/projects/projects.actions';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectsListComponent],
  template: `
  <div class="page">
    <section
      class="header-container"
    >
      <h1 class="pagename">Проекты</h1>
    </section>
    <app-projects-list></app-projects-list>
  </div>
  `,
  styleUrl: `./projects.page.component.scss`
})
export class ProjectsPageComponent implements OnInit{
  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(ProjectsPageActions.load())
  }

}
