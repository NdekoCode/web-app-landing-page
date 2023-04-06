import { Component, OnInit } from '@angular/core';
import { FEATURES } from 'src/app/utils/constants';
import { Feature } from 'src/app/utils/types';

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
