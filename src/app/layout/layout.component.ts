import { Component } from '@angular/core';
import {TuiAppBar} from '@taiga-ui/layout';
import {tuiAsPortal, TuiPortals, TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiDropdownService,
    TuiIcon,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiChevron,
    TuiDataListDropdownManager,
    TuiFade,
    TuiSwitch,
    TuiTabs,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy} from '@angular/core';
import {TuiSidebar} from '@taiga-ui/addon-mobile';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {TuiLink} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    FormsModule,
    RouterLinkActive,
    TuiAppearance,
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiButton,
    TuiCardLarge,
    TuiChevron,
    TuiDataList,
    TuiDataListDropdownManager,
    TuiDropdown,
    TuiFade,
    TuiHeader,
    TuiIcon,
    TuiNavigation,
    TuiRepeatTimes,
    TuiSwitch,
    TuiTabs,
    TuiTitle,
    TuiAppBar,
    RouterModule,
    TuiAccordion, TuiActiveZone, TuiButton, TuiLink, TuiSidebar
],
  template: `
  <div class="container">
    <section>
        <tui-app-bar size="l" class="navbar">
            <button
                tuiIconButton
                iconStart="@tui.menu"
                tuiSlot="left"
                type="button"
                (click)="toggle(true)"
                (tuiActiveZoneChange)="toggle($event)"
                style="margin-left:20px"
            >
            Menu
            <div *tuiSidebar="open; direction: 'left'">
                <tui-data-list size="l">
                    <button tuiOption (click)="nav('app/employees')">Сотрудники</button>
                    <button tuiOption (click)="nav('app/projects')">Проекты</button>
                </tui-data-list>
            </div>
            </button>
            <label tuiTitle="l">
                PORTAL
            </label>
            <button
                tuiButton
                tuiSlot="right"
                type="button"
                class="login-btn"
            >
                Логин
                <tui-avatar src="AI" />
            </button>
        </tui-app-bar>
    </section>
    <section class="down-section">
        <router-outlet></router-outlet>
    </section>
    </div>
  `,
  styleUrl: `./layout.component.scss`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
    protected expanded = false;
    protected open = false;
    protected switch = false;

    constructor(private router:Router){}
    
    protected setOpen = () => {
        this.open = !this.open
    }
    protected nav = (link:string) => {
        if(!!link) this.router.navigate([link])
    }
 
    protected toggle(open: boolean): void {
        this.open = open;
    }
}
