import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TransactionSearchComponent } from './components/transaction-search/transaction-search.component';
import { TransactionFilterComponent } from './components/transaction-filter/transaction-filter.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsSidebarComponent } from './components/settings-sidebar/settings-sidebar.component';
import { SettingsMainAreaComponent } from './components/settings-main-area/settings-main-area.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TransactionSearchComponent,
    TransactionFilterComponent,
    TransactionListComponent,
    DashboardComponent,
    SettingsComponent,
    SettingsSidebarComponent,
    SettingsMainAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
