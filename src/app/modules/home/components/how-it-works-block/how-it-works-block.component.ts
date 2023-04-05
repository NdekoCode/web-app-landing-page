import { Component } from '@angular/core';
import { howItWorkTitles } from './../../../../utils/constants';

@Component({
  selector: 'app-how-it-works-block',
  templateUrl: './how-it-works-block.component.html',
  styleUrls: ['./how-it-works-block.component.scss'],
})
export class HowItWorksBlockComponent {
  titles: string[] = howItWorkTitles;
  index: number = 1;
  showTab(index: number) {
    this.index = index;
  }
}
