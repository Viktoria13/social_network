import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule'}
  // { path: 'client', loadChildren: './modules/client/client.module#ClientModule' },
  // { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  // { path: '**', redirectTo: '/auth/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

