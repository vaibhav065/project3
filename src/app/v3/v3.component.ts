import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
import { topmost } from 'tns-core-modules/ui/frame';
registerElement("VideoPlayer3", () => Video);

@Component({
  selector: 'ns-v3',
  templateUrl: './v3.component.html',
  styleUrls: ['./v3.component.css'],
  moduleId: module.id,
})
export class V3Component implements OnInit {
  videoPlayer3: any;
  constructor( private page : Page) { }

  ngOnInit() {
  }



  ngAfterViewInit() {
    this.videoPlayer3 = this.page.getViewById('nativeVideoPlayer3');
}

play() {
    this.videoPlayer3.play();
}

pause() {
    this.videoPlayer3.pause();
}

seekToTime() {

}


}
