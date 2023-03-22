import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss'],
})
export class ModalVideoComponent {
  @Input() isShown: boolean = false;
  @Output() showModal = new EventEmitter<boolean>();

  apiLoaded: boolean = false;

  videoId: string = '-PeWeorMDTo';

  ngOnInit() {
    
  }

  onShow() {
    this.showModal.emit(!this.isShown);
  }
  stopProp(e: Event) {
    e.stopPropagation();
  }
}
