import { GuestCardComponent } from './guest-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GuestCardComponent],
  imports: [
    CommonModule
  ],
  exports: [GuestCardComponent]

})
export class GuestCardModule { }
