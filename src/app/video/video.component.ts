import { Component, OnInit } from '@angular/core';
import { TNSPlayer } from 'nativescript-audio';
import { isAndroid } from 'tns-core-modules/ui/page/page';


@Component({
  selector: 'ns-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  moduleId: module.id,
})
export class VideoComponent implements OnInit {
  player: TNSPlayer;
  _checkInterval;
  progress = 0;
  isPlaying = false;



  constructor() {


    this.player = new TNSPlayer();

    const playerOptions = {
        
      audioFile: "~/assets/images/audio1.mp3",

        loop: true,
        autoplay: false,
    };

    this.player
        .initFromUrl(playerOptions)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log("something went wrong...", err);
        });
}

ngOnInit(): void {
    this._checkInterval = setInterval(() => {
        this.player.getAudioTrackDuration().then((duration: any) => {
            // iOS: duration is in seconds
            // Android: duration is in milliseconds
            let current = this.player.currentTime
            if (isAndroid) {
                duration *= 1000
                current *= 1000
            }

            this.progress = Math.ceil(current / duration * 100);

            this.isPlaying = this.player.isAudioPlaying()
        });
    }, 200);
}

playPause() {
    if (this.player.isAudioPlaying()) {
        this.player.pause();
    } else {
        this.player.play();
    }
}

ngOnDestroy() {
    clearInterval(this._checkInterval);
}
}

   

 