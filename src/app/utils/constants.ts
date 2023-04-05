import { NgIterable } from '@angular/core';
import { Route } from '@angular/router';
import { HomepageComponent } from '../modules/home/homepage/homepage.component';
import { ChangeLogComponent } from '../pages/change-log/change-log.component';
import { ContactComponent } from '../pages/contact/contact.component';
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

export type blockScreen = {
  title: string;
  textDescription: string;
  screenImages: string | (string[] | NgIterable<string | object>);
  [key: string]: string | number | string[] | NgIterable<string | object>;
};

export type faq = {
  question: string;
  answer: string;
};
export const routerLink: Route[] = [
  { path: '', title: 'Home', component: HomepageComponent },

  {
    path: 'more-about',
    component: MoreAboutComponent,
    title: 'Change Log',
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
  {
    path: '**',
    component: Page404Component,
    title: '404',
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

export const FEATURES: Feature[] = [
  {
    title: 'Secured Platform',
    description:
      'Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.',
    image: '/assets/images/feature-Icon-1.svg',
    linkText: 'Learn More',
  },
  {
    title: 'Advanced Analytics',
    description:
      'Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.',
    image: '/assets/images/feature-Icon-2.svg',
    linkText: 'Learn More',
  },
  {
    title: 'Powerful Automation',
    description:
      'Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.',
    image: '/assets/images/feature-Icon-3.svg',
    linkText: 'Learn More',
  },
];
export const TESTIMONIALS: Testimonial[] = [
  {
    username: 'Mike Warren',
    testimonial:
      'The sales management dashboard platform which i think is the best i’v ever tried. the information displayed is very valuable with a pleasant user interface to look at',
    userRole: 'Product Manager at Zapier',
    image: '/assets/images/testimonial.jpg',
  },
  {
    username: 'Mike Warren',
    testimonial:
      'The sales management dashboard platform which i think is the best i’v ever tried. the information displayed is very valuable with a pleasant user interface to look at',
    userRole: 'Product Manager at Zapier',
    image: '/assets/images/testimonial.jpg',
  },
  {
    username: 'Mike Warren',
    testimonial:
      'The sales management dashboard platform which i think is the best i’v ever tried. the information displayed is very valuable with a pleasant user interface to look at',
    userRole: 'Product Manager at Zapier',
    image: '/assets/images/testimonial.jpg',
  },
];
export const BLOCK_SCREEN_DATA: blockScreen[] = [
  {
    title: 'Having everything you need in one app',
    textDescription:
      "There are many variations of passages of Lorem Ipscted humour, or randomised words which don't look slightly believable. If you are going to use a passage .",
    screenImages: [
      '/assets/images/pieces/02.png',
      '/assets/images/pieces/03.png',
    ],
  },
  {
    title: 'Realtime update about your business',
    textDescription:
      "There are many variations of passages of Lorem Ipscted humour, or randomised words which don't look slightly believable. If you are going to use a passage .",
    screenImages: '/assets/images/pieces/09.png',
  },
];
export const FAQ: faq[] = [
  {
    question: 'Où sont mes prestation de service ?',
    answer:
      ' The are going to use a passage of Lorem Ipsum, you need to be sure tdembarrassing hidden in the middle of text. All the Lorem generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
  },
  {
    question: "How can I edit a service that I've been awarded ?",
    answer:
      ' The are going to use a passage of Lorem Ipsum, you need to be sure tdembarrassing hidden in the middle of text. All the Lorem generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
  },
  {
    question: 'Can I cancel or change my order ?',
    answer:
      ' The are going to use a passage of Lorem Ipsum, you need to be sure tdembarrassing hidden in the middle of text. All the Lorem generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
  },
  {
    question: 'I have a promotional or discount code ?',
    answer:
      ' The are going to use a passage of Lorem Ipsum, you need to be sure tdembarrassing hidden in the middle of text. All the Lorem generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
  },
  {
    question: 'Can I integrate my store with Facebook?',
    answer:
      ' The are going to use a passage of Lorem Ipsum, you need to be sure tdembarrassing hidden in the middle of text. All the Lorem generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
  },
];
export const howItWorkTitles: string[] = [
  'User profile creation',
  'creation of services',
  'Advanced Analytics',
  'Activities',
  'Secured Platform',
];
export const howItWorksData = [];
