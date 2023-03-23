import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/utils/constants';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
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
