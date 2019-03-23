import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
import { topmost } from 'tns-core-modules/ui/frame';
registerElement("VideoPlayer9", () => Video);

@Component({
  selector: 'ns-y1',
  templateUrl: './y1.component.html',
  styleUrls: ['./y1.component.css'],
  moduleId: module.id,
})
export class Y1Component implements OnInit {
  videoPlayer: any;

  constructor(  private page : Page) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.videoPlayer = this.page.getViewById('nativeVideoPlayer9');
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
