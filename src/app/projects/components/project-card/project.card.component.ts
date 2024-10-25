import { Component, input } from '@angular/core';
import { Project } from '../../types/project';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { TuiAppearance } from '@taiga-ui/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TuiCardLarge, TuiHeader, TuiAppearance],
  template: `
    <div
        tuiAppearance="floating"
        tuiCardLarge
        tuiHeader
        class="card"
    >
      <h2 tuiTitle>
          {{project()?.name}}
          <span tuiSubtitle>{{project()?.description}}</span>
      </h2>
    </div>
  `,
  styleUrl: `./project.card.component.scss`
})
export class ProjectCardComponent {
  public project = input<Project>()
}
