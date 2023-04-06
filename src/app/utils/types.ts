import { NgIterable } from '@angular/core';

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
  name: string;
  testimonial: string;
  userRole: string;
  image: string;
  enterprise?: string;
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
  testimonial: Testimonial;
  mediaDescription: string;
};
