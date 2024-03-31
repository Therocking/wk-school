import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersLoginComponent } from './users-login/users-login.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UsersFormComponent,
    UsersLoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    UsersListComponent,
    UsersFormComponent
  ]
})
export class UsersModule { }
