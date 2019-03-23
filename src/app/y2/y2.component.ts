import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
import { topmost } from 'tns-core-modules/ui/frame';
registerElement("VideoPlayer10", () => Video);

@Component({
  selector: 'ns-y2',
  templateUrl: './y2.component.html',
  styleUrls: ['./y2.component.css'],
  moduleId: module.id,
})
export class Y2Component implements OnInit {


  videoPlayer: any;


  constructor( private page : Page) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this.videoPlayer = this.page.getViewById('nativeVideoPlayer10');
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

