import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "app",
    loadChildren: () => import("./features/features.module").then(m => m.FeaturesModule),
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