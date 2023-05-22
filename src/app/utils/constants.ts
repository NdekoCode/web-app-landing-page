import { Route } from '@angular/router';
import { ContactComponent } from '../modules/contact/contact.component';
import { HomepageComponent } from '../modules/home/homepage.component';
import { CguComponent } from '../modules/legal-information/cgu/cgu.component';
import { CookiePolicyComponent } from '../modules/legal-information/cookie-policy/cookie-policy.component';
import { LegalInformationComponent } from '../modules/legal-information/legal-information/legal-information.component';
import { PrivacyPolicyComponent } from '../modules/legal-information/privacy-policy/privacy-policy.component';
import { RgpdComponent } from '../modules/legal-information/rgpd/rgpd.component';
import { ChangeLogComponent } from '../pages/change-log/change-log.component';
import { MoreAboutComponent } from '../pages/more-about/more-about.component';
import { Page404Component } from '../pages/page404/page404.component';
import { RgpdTemplateComponent } from './../modules/legal-information/rgpd-template/rgpd-template.component';
import { TermsComponent } from './../modules/legal-information/terms/terms.component';
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
    path: 'terms',
    component: RgpdTemplateComponent,
    children: [
      {
        path: '',
        component: TermsComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'legal-information',
        component: LegalInformationComponent,
      },
      {
        path: 'cookie-policy',
        component: CookiePolicyComponent,
      },
      {
        path: 'cgu',
        component: CguComponent,
      },
      {
        path: 'rgpd',
        component: RgpdComponent,
      },
    ],
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
    fragmentLink: true,
    flag: 'howitworks',
  },
  {
    path: '/features',
    title: 'Testimonials',
    fragmentLink: true,
    flag: 'testimonials',
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
      "Je recommande vivement cette application à tous les freelances qui cherchent un outil fiable et facile à utiliser pour gérer leurs prestations. Cela a vraiment simplifié ma vie professionnelle ! Grâce à cette application, j'ai enfin trouvé un moyen efficace de suivre toutes mes prestations en un seul endroit et de travailler de manière plus productive. !",
    userRole: 'Product Manager at Zapier',
    image: '/assets/images/testimonial.jpg',
  },
  {
    name: 'Marcos Musafiri',
    testimonial:
      'Cette application a totalement changé ma façon de travailler en freelance. Je peux maintenant suivre toutes mes prestations en temps réel, ce qui me permet de mieux organiser mon travail et de gagner en efficacité.',
    userRole: 'Product Manager at GoInnovation',
    image: '/assets/images/testimonial-1.jpg',
  },
  {
    name: 'Christian Lisangola',
    testimonial:
      "Cette application est un véritable game-changer pour moi. Je peux maintenant collaborer avec d'autres prestataires en toute sécurité, sans avoir à partager mes fichiers Excel ou Google Sheet. C'est vraiment top !",
    userRole: 'CEO at Zabibu ETC',
    image: '/assets/images/testimonial-3.jpg',
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
    question:
      "Qu'est-ce que votre application de gestion de prestation de service peut m'offrir de plus que les outils Excel ou Google Sheet ?",
    answer:
      "Notre application offre une solution centralisée pour suivre toutes vos prestations et celles de vos collègues. Vous pouvez facilement partager des informations avec des prestataires extérieurs et suivre l'état de vos projets en temps réel.",
  },
  {
    question:
      'Est-ce que je peux utiliser cette application en tant que freelance pour gérer mes prestations ?',
    answer:
      'Absolument ! Notre application est conçue pour les freelances et les entreprises qui cherchent à gérer efficacement les prestations de service. Vous pouvez facilement suivre les projets, les facturations et les paiements en un seul endroit.',
  },
  {
    question:
      "Est-ce que l'application est facile à utiliser pour les personnes qui ne sont pas très technophiles ?",
    answer:
      'Nous avons conçu cette application pour être simple et intuitive à utiliser pour tous les utilisateurs, même les moins technophiles. Nous offrons une interface conviviale et des fonctionnalités faciles à comprendre pour une expérience utilisateur sans stress.',
  },
  {
    question:
      "Comment puis-je suivre l'état de mes prestations et savoir quand ils sont terminés ?",
    answer:
      "Notre application vous permet de suivre facilement l'état de vos prestations en temps réel. Vous pouvez voir les prestations en cours, les prestations terminées et les prestations à venir. Vous pouvez également recevoir des notifications par e-mail pour vous tenir informé de l'état de vos prestations.",
  },
  {
    question:
      "Est-ce que l'application offre des fonctionnalités de facturation et de paiement ?",
    answer:
      'Oui, notre application offre des fonctionnalités de facturation et de paiement pour vous aider à gérer vos finances en toute simplicité. Vous pouvez créer des factures, suivre les paiements et même automatiser les rappels de paiement pour éviter les retards de paiement.',
  },
  {
    question: "Est-ce que l'application est gratuite?",
    answer:
      "Oui, c'est simple, c'est gratuit et c'est payant, notre application offre des fonctionnalités de gratuite et une gamme des fonctionnalité payante",
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
