import { Route } from '@angular/router';
import { ContactComponent } from '../modules/contact/contact.component';
import { HomepageComponent } from '../modules/home/homepage/homepage.component';
import { ChangeLogComponent } from '../pages/change-log/change-log.component';
import { MoreAboutComponent } from '../pages/more-about/more-about.component';
import { Page404Component } from '../pages/page404/page404.component';
import {
  blockScreen,
  faq,
  Feature,
  howItWork,
  RouterLink,
  Testimonial,
} from './types';

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
    path: '/howitworks',
    title: 'how it works',
    flag: 'howitworks',
  },
  {
    path: '/features',
    title: 'Features',
    flag: 'features',
  },
  {
    path: '/more-about',
    title: 'About us',
    flag: 'more-about',
  },
  {
    path: '/contact',
    title: 'Contact',
    flag: 'contact',
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
    name: 'Mike Warren',
    testimonial:
      'The sales management dashboard platform which i think is the best i’v ever tried. the information displayed is very valuable with a pleasant user interface to look at',
    userRole: 'Product Manager at Zapier',
    image: '/assets/images/testimonial.jpg',
  },
  {
    name: 'Mike Warren',
    testimonial:
      'The sales management dashboard platform which i think is the best i’v ever tried. the information displayed is very valuable with a pleasant user interface to look at',
    userRole: 'Product Manager at Zapier',
    image: '/assets/images/testimonial.jpg',
  },
  {
    name: 'Mike Warren',
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
export const HOW_IT_WORKS_DATA: howItWork[] = [
  {
    titleFeature:
      'User profile creation, Service provider search, from your CRM',
    description:
      'Create and receive services from your CRM. Never miss a proper scheduling with your clients and get full context with our CRM integrated provider creation feature.',
    testimonial: {
      name: 'Zara REEVES',
      testimonial:
        'We love ZabibuCRM. ZabibuCRM has allowed GoInnovation to improve its service planning with unparalleled speed, which is an incredible asset. Our company is very happy with ZabibuCRM and we are here to stay!',
      userRole: 'Admin Assistant',
      enterprise: 'MedProtect Global Supplies',
      image: '/assets/images/testimonial-user.jpg',
    },
    mediaDescription: '/assets/images/loginGIF.gif',
  },
  {
    titleFeature:
      'Creation services, Deliver exceptional services with our service creation platform',
    description:
      'Enables users to create and deliver unique and innovative services, providing an exceptional customer experience.',
    testimonial: {
      name: 'Kim john',
      testimonial:
        'Since using this app, I have been managing my customer service more efficiently and professionally. I highly recommend it!',
      userRole: 'Customer service manager',
      enterprise: 'ABC Company',
      image: '/assets/images/testimonial-1.jpg',
    },
    mediaDescription: '/assets/images/creation-services.gif',
  },
  {
    titleFeature:
      'Analyze your performance to improve your business with our advanced analysis tool',
    description:
      "Provides users with accurate data on their company's performance, enabling them to identify areas for improvement for continued growth.",
    testimonial: {
      name: 'Zara REEVES',
      testimonial:
        'We love ZabibuCRM. ZabibuCRM has allowed GoInnovation to improve its service planning with unparalleled speed, which is an incredible asset. Our company is very happy with ZabibuCRM and we are here to stay!',
      userRole: 'Admin Assistant',
      enterprise: 'GoInnovation',
      image: '/assets/images/testiminial-3.jpg',
    },
    mediaDescription: '/assets/images/dashboard.gif',
  },
  {
    titleFeature: 'Stay active and connected with our activity feature',
    description:
      'Offers users the ability to stay active and connected by participating in services, viewing their history, and taking a review organized by the platform, thus promoting engagement with its customers.',
    testimonial: {
      name: 'REEVES mich',
      testimonial:
        "This application has been a game changer for my business. I can now track all of my customers' requests in real time and offer them personalized service.",
      userRole: 'Service agent',
      enterprise: 'ItotAfriacan ',
      image: '/assets/images/testimonial-2.jpg',
    },
    mediaDescription: '/assets/images/dashboard.gif',
  },
  {
    titleFeature: 'Be assured of maximum security with our secure platform',
    description:
      "This feature guarantees the maximum security of users' personal and financial data, giving them total peace of mind when using the application.",
    testimonial: {
      name: 'Jonh Bulakali',
      testimonial:
        'Thanks to this application, I was able to improve the quality of my customer service and retain my existing customers while attracting new ones',
      userRole: 'Admin Assistant',
      enterprise: 'MedProtect Global',
      image: '/assets/images/testimonial-3.jpg',
    },
    mediaDescription: '/assets/images/loginGIF.gif',
  },
];
