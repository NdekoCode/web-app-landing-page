import { Component, Input, NgIterable, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-column',
  templateUrl: './two-column.component.html',
  styleUrls: ['./two-column.component.scss'],
})
export class TwoColumnComponent implements OnInit {
  @Input() imageRigth: boolean = false;
  @Input() imageUrl!: string | (string[] | NgIterable<string | object>);
  @Input() title!: string;
  @Input() linkText!: string;
  @Input() textDescription!: string;
  @Input() style?: object;
  isStringImage!: boolean;
  ngOnInit() {
    this.isStringImage = typeof this.imageUrl === 'string';
  }
}
