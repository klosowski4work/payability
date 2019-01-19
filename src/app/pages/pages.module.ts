import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageModule
  ],
  exports: [HomePageModule]
})
export class PagesModule { }
