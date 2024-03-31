import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { FeatureRoutingModule } from './features-routing.module';
import { SubjectsModule } from './subjects/subjects.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UsersModule,
    FeatureRoutingModule,
    SubjectsModule,
  ]
})
export class FeaturesModule { }
