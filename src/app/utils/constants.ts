import { Route } from '@angular/router';
import { ChangeLogComponent } from '../pages/change-log/change-log.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { MoreAboutComponent } from '../pages/more-about/more-about.component';
import { Page404Component } from '../pages/page404/page404.component';
export type Feature = {
  title: string;
  description: string;
  image: string;
  linkText?: string;
};
export type RouterLink = {
  path: string;
  title?: string;
};
export type Testimonial = {
  username: string;
  testimonial: string;
  userRole: string;
  image: string;
};

export const routerLink: Route[] = [
  { path: '', title: 'Home', component: HomepageComponent },

  {
    path: 'more-about',
    component: MoreAboutComponent,
    title: 'Change Log',
  },

  {
    path: '*',
    component: Page404Component,
    title: '404',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
    path: 'changelog',
    component: ChangeLogComponent,
    title: 'Change Log',
  },
];
export const navLinks: RouterLink[] = [
  {
    path: '#howitworks',
    title: 'how it works',
  },
  {
    path: '#feautures',
    title: 'Feautures',
  },
  {
    path: '/more-about',
    title: 'About us',
  },
  {
    path: '/contact',
    title: 'Contact',
  },
];
