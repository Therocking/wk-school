import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SubjectsListComponent } from "./subjects-list/subjects-list.component";


const routes: Routes = [
  {
    path: "",
    component: SubjectsListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule {}
