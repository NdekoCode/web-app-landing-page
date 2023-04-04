import { Component, OnInit } from '@angular/core';
import { Feature, FEATURES } from 'src/app/utils/constants';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  features!: Feature[];
  ngOnInit() {
    this.features = FEATURES;
  }
}
