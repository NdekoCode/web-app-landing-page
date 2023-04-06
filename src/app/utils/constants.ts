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
export type howItWork = {
  titleFeature: string;
  description: string;
  testimonials: {
    name: string;
    role: string;
    picture: string;
    testimonial: string;
    enterprise: string;
  };
  mediaDescription: string;
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
export const HOW_IT_WORKS_DATA: howItWork[] = [
  {
    titleFeature:
      'User profile creation, Service provider search, from your CRM',
    description:
      'Create and receive services from your CRM. Never miss a proper scheduling with your clients and get full context with our CRM integrated provider creation feature.',
    testimonials: {
      name: 'Zara REEVES',
      testimonial:
        'We love ZabibuCRM. ZabibuCRM has allowed GoInnovation to improve its service planning with unparalleled speed, which is an incredible asset. Our company is very happy with ZabibuCRM and we are here to stay!',
      role: 'Admin Assistant',
      enterprise: 'MedProtect Global Supplies',
      picture: '/assets/images/testimonial-user.jpg',
    },
    mediaDescription: '/assets/images/loginGIF.gif',
  },
  {
    titleFeature:
      'Creation services, Deliver exceptional services with our service creation platform',
    description:
      'Enables users to create and deliver unique and innovative services, providing an exceptional customer experience.',
    testimonials: {
      name: 'Kim john',
      testimonial:
        'Since using this app, I have been managing my customer service more efficiently and professionally. I highly recommend it!',
      role: 'Customer service manager',
      enterprise: 'ABC Company',
      picture: '/assets/images/testimonial-1.jpg',
    },
    mediaDescription: '/assets/images/creation-services.gif',
  },
  {
    titleFeature:
      'Analyze your performance to improve your business with our advanced analysis tool',
    description:
      "Provides users with accurate data on their company's performance, enabling them to identify areas for improvement for continued growth.",
    testimonials: {
      name: 'Zara REEVES',
      testimonial:
        'We love ZabibuCRM. ZabibuCRM has allowed GoInnovation to improve its service planning with unparalleled speed, which is an incredible asset. Our company is very happy with ZabibuCRM and we are here to stay!',
      role: 'Admin Assistant',
      enterprise: 'GoInnovation',
      picture: '/assets/images/testiminial-3.jpg',
    },
    mediaDescription: '/assets/images/dashboard.gif',
  },
  {
    titleFeature: 'Stay active and connected with our activity feature',
    description:
      'Offers users the ability to stay active and connected by participating in services, viewing their history, and taking a review organized by the platform, thus promoting engagement with its customers.',
    testimonials: {
      name: 'REEVES mich',
      testimonial:
        "This application has been a game changer for my business. I can now track all of my customers' requests in real time and offer them personalized service.",
      role: 'Service agent',
      enterprise: 'ItotAfriacan ',
      picture: '/assets/images/testimonial-2.jpg',
    },
    mediaDescription: '/assets/images/dashboard.gif',
  },
  {
    titleFeature: 'Be assured of maximum security with our secure platform',
    description:
      "This feature guarantees the maximum security of users' personal and financial data, giving them total peace of mind when using the application.",
    testimonials: {
      name: 'Jonh Bulakali',
      testimonial:
        'Thanks to this application, I was able to improve the quality of my customer service and retain my existing customers while attracting new ones',
      role: 'Admin Assistant',
      enterprise: 'MedProtect Global',
      picture: '/assets/images/testimonial-3.jpg',
    },
    mediaDescription: '/assets/images/loginGIF.gif',
  },
];
