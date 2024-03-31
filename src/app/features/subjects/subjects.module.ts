import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SubjectsListComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    HttpClientModule
  ]
})
export class SubjectsModule { }
