import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss'],
})
export class DownloadButtonComponent {
  @Input() typeElement: string = 'link';
  @Input() filePath: string = '#';
}
