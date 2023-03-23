import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerLink } from './utils/constants';

const routes: Routes = [
  ...routerLink.map((route) => ({
    path: route.path,
    component: route.component,
  })),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
