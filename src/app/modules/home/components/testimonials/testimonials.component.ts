import { Component, OnInit } from '@angular/core';
import { Testimonial, TESTIMONIALS } from 'src/app/utils/constants';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = TESTIMONIALS;
  slidesCount!: number;
  index: number = 0;
  ngOnInit() {
    this.slidesCount = this.testimonials.length;
  }
  goTo(index: number) {
    this.index = index;
  }
  slideSequence(n: number = this.testimonials.length): Array<number> {
    return [...Array(n).keys()];
  }
}
