import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
import { topmost } from 'tns-core-modules/ui/frame';
registerElement("VideoPlayer21", () => Video);
@Component({
  selector: 'ns-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css'],
  moduleId: module.id,
})
export class P1Component implements OnInit {

  videoPlayer: any;

  constructor(  private page : Page) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.videoPlayer = this.page.getViewById('nativeVideoPlayer21');
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
