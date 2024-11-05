import { Component, inject, signal } from '@angular/core';
import {TuiAppBar} from '@taiga-ui/layout';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive, RouterModule } from '@angular/router';
import {ChangeDetectionStrategy} from '@angular/core';
import {TuiButton, TuiLink, TuiPopup, TuiScrollbar, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiDrawer, TuiTabs} from '@taiga-ui/kit';
import {TuiHeader, TuiNavigation} from '@taiga-ui/layout';
import { TuiRepeatTimes } from '@taiga-ui/cdk';
import { Store } from '@ngrx/store';
import { currentUserSelector } from '../state/app/app.selector';
import { AuthService } from '../core/services/auth.service';
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
    TuiAvatar,
    RouterModule
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
                (click)="toggleSidebarState()"
                size="xl"
            >
                Menu
            </button>
            <tui-drawer 
                class="sidebar" 
                *tuiPopup="open()" 
                direction="left"
                [overlay]="true"
                (click.self)="onClose()"
            >
                <div class="sidebar-content">
                    <a 
                        [routerLink]="['/app/employees']" 
                        tuiLink 
                        class="sidebar-item" 
                        routerLinkActive="active" 
                        ariaCurrentWhenActive="page"
                        (click)="onClose()"
                    >
                        Сотрудники
                    </a>
                    <a 
                        [routerLink]="['/app/projects']"  
                        tuiLink 
                        class="sidebar-item"  
                        routerLinkActive="active" 
                        ariaCurrentWhenActive="page"
                        (click)="onClose()"
                    >
                        Проекты
                    </a>
                    <a
                        [routerLink]="['/auth']"  
                        tuiLink 
                        class="sidebar-item"  
                        style="margin-top:auto; color:red"
                        routerLinkActive="active" 
                        ariaCurrentWhenActive="page"
                        (click)="onExit()"
                    >
                        Выйти
                    </a>
                </div>
            </tui-drawer>
            <label tuiTitle="l" style="color:var(--primary-color)">
                PORTAL
            </label>
            <button
                tuiButton
                tuiSlot="right"
                type="button"
                class="login-btn"
            >
                {{user()?.name}}
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
    protected open = signal(false);
    private store = inject(Store)
    protected user = this.store.selectSignal(currentUserSelector)
    private authService = inject(AuthService)

    public onClose(): void {
        this.open.set(false);
    }

    public onExit(): void {
        this.open.set(false)
        this.authService.logout()
    }

    public toggleSidebarState(){
        this.open.set(!this.open())
    }
}
