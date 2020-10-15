import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMainAreaComponent } from './settings-main-area.component';

describe('SettingsMainAreaComponent', () => {
  let component: SettingsMainAreaComponent;
  let fixture: ComponentFixture<SettingsMainAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsMainAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMainAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
