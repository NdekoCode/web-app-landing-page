import { Component, NgIterable, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  screenImages!: string | (string[] | NgIterable<string | object>);
  ngOnInit() {
    this.screenImages = [
      '/assets/images/pieces/02.png',
      '/assets/images/pieces/03.png',
    ];
  }
}
