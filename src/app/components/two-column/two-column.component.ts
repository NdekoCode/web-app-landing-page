import { Component, Input, NgIterable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() pseudoClass?: string;
  @Input() blockClass?: string;
  isStringImage!: boolean;
  constructor(private _router: Router) {}
  ngOnInit() {
    this.isStringImage = typeof this.imageUrl === 'string';
  }
  knowMore() {
    this._router.navigate(['/more-about']);
  }
}
