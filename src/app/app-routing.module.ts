import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './evaluation/login/login.component';
import { MainComponent } from './evaluation/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirigir al login al inicio
  { path: 'login', component: LoginComponent },         // Ruta para el login
  { path: 'main', component: MainComponent} ,                     // Main será la pantalla principa},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
