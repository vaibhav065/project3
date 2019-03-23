import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
import { topmost } from 'tns-core-modules/ui/frame';
registerElement("VideoPlayer22", () => Video);

@Component({
  selector: 'ns-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css'],
  moduleId: module.id,
})
export class P2Component implements OnInit {
  videoPlayer: any;

  constructor( private page : Page) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.videoPlayer = this.page.getViewById('nativeVideoPlayer22');
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
