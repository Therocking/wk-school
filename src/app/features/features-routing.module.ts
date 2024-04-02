import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "../core/guard/auth.guard";
import { PublicGuard } from "../core/guard/public.guard";
import { UsersFormComponent } from "./users/users-form/users-form.component";
import { UsersLoginComponent } from "./users/users-login/users-login.component";

const routes: Routes = [
  {
    path: "subjects",
    loadChildren: () => import("./subjects/subjects.module").then(m => m.SubjectsModule),
    canActivate: [AuthGuard],
  },
  {
    path: "users",
    loadChildren: () => import("./users/users.module").then(m => m.UsersModule),
    canActivate: [AuthGuard],
    canMatch: [AuthGuard],
  },
  {
    path: "create",
    component: UsersFormComponent,
    canActivate: [PublicGuard],
  },
  {
    path: "login",
    component: UsersLoginComponent,
    canActivate: [PublicGuard],
  }, 
  {
    path: "**",
    redirectTo: "users"
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
