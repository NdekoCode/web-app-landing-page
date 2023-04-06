import { Component, Input } from '@angular/core';
import { Testimonial } from 'src/app/utils/types';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  @Input() userTestimonial!: Testimonial;
  @Input() key!: number | string;
}
