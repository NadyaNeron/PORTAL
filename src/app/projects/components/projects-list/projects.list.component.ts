import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project.card.component";

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <section class="container">
      @for(project of projectsList; track project.id) {
          <app-project-card
            [project]="project"
          >
          </app-project-card>
        }@empty {
          Тут пока пусто
        }
    </section>
  `,
  styles: ``
})
export class ProjectsListComponent {
  protected projectsList = [
    {
      name: "Проект 1",
      description: "Описание проекта 1",
      id:1
    },
    {
      name: "Проект 2",
      description: "Описание описание описание описание описание описание проекта 2",
      id:2
    },      
    {
      name: "Проект 3",
      description: "Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описаниеописание описаниеописание описание описание описание описание описание описание описание описание проекта 3",
      id:3
    }
  ]
}
