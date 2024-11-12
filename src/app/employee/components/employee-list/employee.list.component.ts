import { Component } from '@angular/core';
import { EmployeeCardComponent } from "../employee-card/employee.card.component";
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { usersFeature } from 'src/app/state/users/users.reducer';
import { AsyncForDirective } from 'src/app/shared/components/async-for.directive';
import { CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDropList } from '@angular/cdk/drag-drop';
import { UsersActions } from 'src/app/state/users/users.actions';
import { UserShort } from 'src/app/shared/types/user.short';
import { TuiCardLarge } from '@taiga-ui/layout';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CdkDropList, CdkDrag, TuiCardLarge, EmployeeCardComponent, CommonModule, AsyncForDirective, CdkDragPlaceholder],
  template: `
    <section cdkDropList class="container" (cdkDropListDropped)="drop($event)">
        <div class="employee-box" cdkDrag *ngFor="let employee of employees(); trackBy:identify ; let i = index">
            <div
              tuiCardLarge
              *cdkDragPlaceholder
              class="custom-placeholder"
            ></div>
            <app-employee-card
              [employee]="employee"
            >
            </app-employee-card>
        </div>
    </section>
  `,
  styleUrls: [`./employee.list.component.scss`]
})
export class EmployeeListComponent{
  protected employees = this.store.selectSignal(usersFeature.selectUsers);

  constructor(private store: Store) {}
  drop(event: CdkDragDrop<string[]>) {
    this.store.dispatch(UsersActions.moveItem({previousIndex: event.previousIndex, currentIndex: event.currentIndex}))
  }
  identify(index:number, item:UserShort){
    return item.id; 
 }

}
