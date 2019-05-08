import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';

const profileRoutes: Routes = [
  { path: 'data', component: ProfileComponent }
  /*{ path: '', redirectTo: 'data' }*/
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
