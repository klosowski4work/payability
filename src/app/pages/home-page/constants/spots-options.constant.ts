import { SettingGuestSpotsOption } from 'src/app/enums/setting-guest-spots-option.enum';

export const SPOTS_OPTIONS = [
    {
      label: 'Alternate by gender',
      value: SettingGuestSpotsOption.AlternateByGender,
      enabled: false
    },
    {
      label: 'Sort by age',
      value: SettingGuestSpotsOption.SortByAge,
      enabled: false
    },
    {
      label: 'Sort by language',
      value: SettingGuestSpotsOption.SortByLanguage,
      enabled: false
    }
  ]