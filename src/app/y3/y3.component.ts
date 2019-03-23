import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
import { topmost } from 'tns-core-modules/ui/frame';
registerElement("VideoPlayer11", () => Video);

@Component({
  selector: 'ns-y3',
  templateUrl: './y3.component.html',
  styleUrls: ['./y3.component.css'],
  moduleId: module.id,
})
export class Y3Component implements OnInit {
  videoPlayer3: any;

  constructor(  private page : Page) { }

  ngOnInit() {
  }


  

  ngAfterViewInit() {
    this.videoPlayer3 = this.page.getViewById('nativeVideoPlayer11');
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

