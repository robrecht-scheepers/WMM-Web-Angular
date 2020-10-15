import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


import { DashboardComponent } from './components/dashboard/dashboard.component'
import { SettingsComponent } from './components/settings/settings.component'
import  {NotFoundComponent } from './components/not-found/not-found.component'

const routes : Routes = [
  {path: '', component: DashboardComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []  
})
export class AppRoutingModule { }
