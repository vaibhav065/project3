import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
import { topmost } from 'tns-core-modules/ui/frame';
registerElement("VideoPlayer2", () => Video);
@Component({
  selector: 'ns-v2',
  templateUrl: './v2.component.html',
  styleUrls: ['./v2.component.css'],
  moduleId: module.id,
})
export class V2Component implements OnInit {
  videoPlayer: any;

  constructor(  private page : Page) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.videoPlayer = this.page.getViewById('nativeVideoPlayer1');
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
