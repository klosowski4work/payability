import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingGuestSpotOptionsComponent } from './setting-guest-spot-options.component';

describe('SettingGuestSpotOptionsComponent', () => {
  let component: SettingGuestSpotOptionsComponent;
  let fixture: ComponentFixture<SettingGuestSpotOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingGuestSpotOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingGuestSpotOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
