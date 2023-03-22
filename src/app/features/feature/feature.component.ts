import { Component, Input } from '@angular/core';
import { Feature } from 'src/app/utils/constants';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent {
  @Input() feature!: Feature;
}
