import { GuestCardModule } from './../guest-card/guest-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundTableViewComponent } from './round-table-view.component';

@NgModule({
  declarations: [RoundTableViewComponent],
  imports: [CommonModule, GuestCardModule],
  exports: [RoundTableViewComponent]
})
export class RoundTableViewModule { }
