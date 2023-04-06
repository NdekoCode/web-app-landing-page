import { Component } from '@angular/core';
import {
  howItWork,
  howItWorkTitles,
  HOW_IT_WORKS_DATA,
} from './../../../../utils/constants';

@Component({
  selector: 'app-how-it-works-block',
  templateUrl: './how-it-works-block.component.html',
  styleUrls: ['./how-it-works-block.component.scss'],
})
export class HowItWorksBlockComponent {
  titles: string[] = howItWorkTitles;
  howItWorkData: howItWork[] = HOW_IT_WORKS_DATA;
  index: number = 0;
  showTab(index: number) {
    this.index = index;
  }
}
