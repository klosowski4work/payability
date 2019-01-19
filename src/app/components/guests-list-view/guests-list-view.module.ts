import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestsListViewComponent } from './guests-list-view.component';

@NgModule({
  declarations: [GuestsListViewComponent],
  imports: [
    CommonModule
  ],
  exports: [GuestsListViewComponent]
})
export class GuestsListViewModule { }
