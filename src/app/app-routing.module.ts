import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: "app",
    loadChildren: () => import("./features/features.module").then(m => m.FeaturesModule),
    canActivate: [AuthGuard]
  },
  // {
  //   path: "**",
  //   redirectTo: "/app/users"
  //  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
