import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
import { topmost } from 'tns-core-modules/ui/frame';
registerElement("VideoPlayer23", () => Video);

@Component({
  selector: 'ns-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.css'],
  moduleId: module.id,
})
export class P3Component implements OnInit {
  videoPlayer: any;
  constructor( private page : Page) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.videoPlayer = this.page.getViewById('nativeVideoPlayer23');
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

