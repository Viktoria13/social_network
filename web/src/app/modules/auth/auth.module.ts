import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';


// определение маршрутов
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent}
];

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AuthModule { }
