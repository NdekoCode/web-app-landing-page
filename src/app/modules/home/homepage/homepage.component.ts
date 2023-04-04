import { Component, OnInit } from '@angular/core';
import { blockScreen, BLOCK_SCREEN_DATA } from 'src/app/utils/constants';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  blockScreenData: blockScreen[] = BLOCK_SCREEN_DATA;
  globalBlockData!: blockScreen;
  blockChart!: blockScreen;
  ngOnInit(): void {
    this.globalBlockData = this.blockScreenData[0];
    this.blockChart = this.blockScreenData[1];
  }
}
