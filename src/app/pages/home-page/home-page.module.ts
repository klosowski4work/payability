import { GuestsListViewModule } from './../../component/guests-list-view/guests-list-view.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    GuestsListViewModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
