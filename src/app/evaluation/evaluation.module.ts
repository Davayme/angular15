import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class EvaluationModule { }
