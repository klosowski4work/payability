import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NewGuestFormComponent } from './new-guest-form.component';

@NgModule({
  declarations: [NewGuestFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NewGuestFormComponent]
})
export class NewGuestFormModule { }
