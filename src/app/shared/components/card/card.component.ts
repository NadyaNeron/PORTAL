import { Component, input } from '@angular/core';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TuiAppearance, TuiCardLarge, TuiHeader, TuiTitle],
  template: `
      <div
          tuiAppearance="floating"
          tuiCardLarge
          tuiHeader
          class="card"
      >
        <h2 tuiTitle>
            {{title()}}
            <span tuiSubtitle>{{subTitle()}}</span>
        </h2>
      </div>
  `,
  styleUrl: `./card.component.scss`
})
export class CardComponent {
  public title = input<string|undefined>()
  public subTitle = input<string|undefined>()
}
