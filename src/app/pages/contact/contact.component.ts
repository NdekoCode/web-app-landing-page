import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { contactForm } from 'src/app/utils/types';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: contactForm = {
    fullname: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  };
  name!: string;
  email!: string;
  company!: string;
  subject!: string;
  message!: string;
  validEmail: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  onSubmit(arg: NgForm) {
    this.contactForm = {
      fullname: this.name,
      email: this.email,
      subject: this.subject,
      company: this.company,
      message: this.message,
    };
    console.log(this.contactForm);
  }
}
