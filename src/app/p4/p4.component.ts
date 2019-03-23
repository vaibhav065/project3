import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
import { topmost } from 'tns-core-modules/ui/frame';
registerElement("VideoPlayer24", () => Video);

@Component({
  selector: 'ns-p4',
  templateUrl: './p4.component.html',
  styleUrls: ['./p4.component.css'],
  moduleId: module.id,
})
export class P4Component implements OnInit {
  videoPlayer: any;

  constructor(  private page : Page) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.videoPlayer = this.page.getViewById('nativeVideoPlayer24');
}

play() {
    this.videoPlayer.play();
}

pause() {
    this.videoPlayer.pause();
}

seekToTime() {

}




}


