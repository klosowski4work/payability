import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GuestsListViewModule } from "./../../components/guests-list-view/guests-list-view.module";
import { SettingGuestSpotOptionsModule } from "./../../components/setting-guest-spot-options/setting-guest-spot-options.module";
import { GuestsOrganizerService } from "./../../services/guests-organizer.service";
import { HomePageComponent } from "./home-page.component";

@NgModule({
  providers: [GuestsOrganizerService],
  declarations: [HomePageComponent],
  imports: [CommonModule, GuestsListViewModule, SettingGuestSpotOptionsModule],
  exports: [HomePageComponent]
})
export class HomePageModule {}
