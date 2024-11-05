import { Component, computed, input } from '@angular/core';
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
        <div class="image" [style]="this.style()"></div>
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
  public imageUrl = input<string|undefined>()
  protected style = computed(() => {
    if(this.imageUrl() !== "") return `background: url(${this.imageUrl()}) no-repeat`
    return ""
  })
  constructor(){

  }
}
