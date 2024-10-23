import { TuiRoot } from "@taiga-ui/core";
import {Component} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TuiRoot],
  template: `
  	<tui-root>
        <main class="body">
          <router-outlet></router-outlet>
        </main>
      <ng-container ngProjectAs="tuiOverContent">
        <!-- Content over app content -->
      </ng-container>
      <ng-container ngProjectAs="tuiOverDialogs">
        <!-- Content over dialogs -->
      </ng-container>
      <ng-container ngProjectAs="tuiOverAlerts">
        <!-- Content over alerts -->
      </ng-container>
      <ng-container ngProjectAs="tuiOverDropdowns">
        <!-- Content over dropdowns -->
      </ng-container>
      <ng-container ngProjectAs="tuiOverHints">
        <!-- Content over hints -->
      </ng-container>
    </tui-root>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PORTAl';
}
