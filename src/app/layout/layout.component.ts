import { Component, signal } from '@angular/core';
import {TuiAppBar} from '@taiga-ui/layout';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import {ChangeDetectionStrategy} from '@angular/core';
import {TuiButton, TuiLink, TuiPopup, TuiScrollbar, TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiDrawer, TuiTabs} from '@taiga-ui/kit';
import {TuiHeader, TuiNavigation} from '@taiga-ui/layout';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    TuiAppBar,
    FormsModule,
    RouterLinkActive,
    TuiBadge,
    TuiButton,
    TuiDrawer,
    TuiHeader,
    TuiLink,
    TuiNavigation,
    TuiPopup,
    TuiRepeatTimes,
    TuiScrollbar,
    TuiTabs,
    TuiTitle,
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
                (click)="open.set(!open())"
                size="xl"
            >
            Menu
            <tui-drawer *tuiPopup="open()">
                <header>
                    <h2 tuiHeader>
                        <div tuiTitle>
                            <span tuiCaption>Caption・caption</span>
                            <span>
                                Drawer title
                                <tui-badge>Label</tui-badge>
                            </span>
                            <span tuiSubtitle>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.
                            </span>
                        </div>
            
                        <div tuiAccessories>
                            <button
                                iconStart="@tui.search"
                                tuiButton
                                type="button"
                            >
                                More info
                            </button>
                            <button
                                iconStart="@tui.ellipsis"
                                tuiIconButton
                                type="button"
                            >
                                Actions
                            </button>
                            <button
                                appearance="icon"
                                iconStart="@tui.x"
                                tuiIconButton
                                type="button"
                                (click)="open.set(false)"
                            >
                                Close
                            </button>
                        </div>
                    </h2>
                    <div>
                        <button
                            tuiButton
                            type="button"
                        >
                            Action 1
                        </button>
                        <a
                            appearance="action"
                            href="#"
                            tuiButton
                        >
                            Action 2
                        </a>
                        <button
                            tuiLink
                            type="button"
                        >
                            Action 3
                        </button>
                    </div>
                    <nav tuiNavigationNav>
                        <tui-tabs>
                            <button
                                tuiTab
                                type="button"
                            >
                                Default view
                            </button>
                            <button
                                tuiTab
                                type="button"
                            >
                                Details
                            </button>
                            <button
                                tuiTab
                                type="button"
                            >
                                Followers
                            </button>
                        </tui-tabs>
                        <hr />
                        <button
                            size="xs"
                            tuiButton
                            type="button"
                        >
                            Primary
                        </button>
                        <button
                            appearance="secondary"
                            iconStart="@tui.ellipsis"
                            size="xs"
                            tuiIconButton
                            type="button"
                        >
                            More
                        </button>
                    </nav>
                </header>
                <p *tuiRepeatTimes="let index of 15">Content</p>
                <footer>
                    <button
                        size="m"
                        tuiButton
                        type="button"
                        [style.margin-inline-end]="'auto'"
                    >
                        Tertiary action
                    </button>
                    <button
                        size="m"
                        tuiButton
                        type="button"
                    >
                        Secondary action
                    </button>
                    <button
                        appearance="primary"
                        size="m"
                        tuiButton
                        type="button"
                    >
                        Primary action
                    </button>
                </footer>
            </tui-drawer>

            </button>
            <label tuiTitle="l" style="color:var(--primary-color)">
                PORTAL
            </label>
            <button
                tuiButton
                tuiSlot="right"
                type="button"
                class="login-btn"
            >
                login
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
    protected switch = false;
    protected readonly open = signal(false);

    constructor(private router:Router){}
    
    protected nav = (link:string) => {
        if(!!link) this.router.navigate([link])
    }
 
}
