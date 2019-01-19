import { SettingGuestSpotsOption } from "../enums/setting-guest-spots-option.enum";

export interface SpotsOption {
  label: string;
  value: SettingGuestSpotsOption;
  enabled: boolean;
}
