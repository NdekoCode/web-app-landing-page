import { Component, OnInit } from '@angular/core';
import { Feature } from '../../utils/constants';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  features!: Feature[];
  ngOnInit() {
    this.features = [
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
  }
}
