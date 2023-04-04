import { Component, OnInit } from '@angular/core';
import { faq, FAQ } from 'src/app/utils/constants';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  FAQ!: faq[];
  ngOnInit(): void {
    this.FAQ = FAQ;
  }
}
