import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SubjectsFormComponent } from './subjects-form/subjects-form.component';
import { SubjectsUsersComponent } from './subjects-users/subjects-users.component';

@NgModule({
  declarations: [
    SubjectsListComponent,
    SubjectsFormComponent,
    SubjectsUsersComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SubjectsModule { }
