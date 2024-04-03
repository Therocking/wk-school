import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersFormComponent } from "./users-form/users-form.component";
import { AuthGuard } from "src/app/core/guard/auth.guard";


const routes: Routes = [
  {
    path: "",
    component: UsersListComponent,
    canActivate: [AuthGuard],
    // canMatch: [AuthGuard]
  },
  {
    path: "edit/:id",
    component: UsersFormComponent,
    canActivate: [AuthGuard],
    canMatch: [AuthGuard]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
