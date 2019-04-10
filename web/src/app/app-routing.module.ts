import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

