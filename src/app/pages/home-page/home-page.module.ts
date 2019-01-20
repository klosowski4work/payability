import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GuestsListViewModule } from './../../components/guests-list-view/guests-list-view.module';
import { SettingGuestSpotOptionsModule } from './../../components/setting-guest-spot-options/setting-guest-spot-options.module';
import { GuestsOrganizerService } from './../../services/guests-organizer.service';
import { HomePageComponent } from './home-page.component';
import { RoundTableViewModule } from 'src/app/components/round-table-view/round-table-view.module';
import { NewGuestFormModule } from 'src/app/components/new-guest-form/new-guest-form.module';

@NgModule({
  providers: [GuestsOrganizerService],
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    GuestsListViewModule,
    RoundTableViewModule,
    NewGuestFormModule,
    SettingGuestSpotOptionsModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
