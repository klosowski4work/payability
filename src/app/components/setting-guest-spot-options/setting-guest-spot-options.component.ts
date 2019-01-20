import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { SettingGuestSpotsOption } from "./../../enums/setting-guest-spots-option.enum";
import { SpotsOption } from "src/app/components/setting-guest-spot-options/interfaces/spots-option.interface";

@Component({
  selector: "pk-setting-guest-spot-options",
  templateUrl: "./setting-guest-spot-options.component.html",
  styleUrls: ["./setting-guest-spot-options.component.scss"]
})
export class SettingGuestSpotOptionsComponent implements OnInit {
  @Input() options: SpotsOption[];
  @Output() changeState = new EventEmitter<SettingGuestSpotsOption>();

  constructor() {}

  ngOnInit() {}

  onClick(option: SettingGuestSpotsOption) {
    this.changeState.emit(option);
  }
}
