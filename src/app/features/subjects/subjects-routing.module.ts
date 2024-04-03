import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SubjectsListComponent } from "./subjects-list/subjects-list.component";
import { SubjectsFormComponent } from "./subjects-form/subjects-form.component";
import { SubjectsUsersComponent } from "./subjects-users/subjects-users.component";
import { AdminGuard } from "src/app/core/guard/admin.guard";


const routes: Routes = [
  {
    path: "students",
    component: SubjectsListComponent
  },
  {
    path: "teachers",
    component: SubjectsListComponent
  },
  {
    path: "create",
    component: SubjectsFormComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "students/my-subjects",
    component: SubjectsUsersComponent
  },
  {
    path: "teachers/my-subjects",
    component: SubjectsUsersComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule {}
