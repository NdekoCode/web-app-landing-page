import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { routerLink } from './utils/constants';
const routerOptions: ExtraOptions = {
  initialNavigation: 'enabledBlocking',
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload',
};
const routes: Routes = [
  ...routerLink.map((route) => {
    if (route?.children) {
      return {
        path: route.path,
        component: route.component,
        children: route.children,
      };
    }
    return {
      path: route.path,
      component: route.component,
    };
  }),
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
