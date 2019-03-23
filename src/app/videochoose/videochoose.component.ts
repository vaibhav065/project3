import { Component, OnInit } from '@angular/core';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { TNSPlayer } from 'nativescript-audio';
import { isAndroid } from 'tns-core-modules/ui/page/page';
@Component({
  selector: 'ns-videochoose',
  templateUrl: './videochoose.component.html',
  styleUrls: ['./videochoose.component.css'],
  moduleId: module.id,
})
export class VideochooseComponent implements OnInit {

  selectedAudio;
  isPlaying = false;

  audios: { name: string, source: string}[] = [
    { name: "Breate awareness Meditation",source:"https://a.tumblr.com/tumblr_lx2x5oiJYO1qldmyco1.mp3"},
    { name: "Relaxing the mental formation", source:"https://a.tumblr.com/tumblr_lx2x5oiJYO1qldmyco1.mp3" },
    { name: "Heart  space  meditation", source: "https://a.tumblr.com/tumblr_lx2x5oiJYO1qldmyco1.mp3" },
    { name: "Art of  attention", source: "https://a.tumblr.com/tumblr_lx2x5oiJYO1qldmyco1.mp3" },
    { name: "Loving-Kindness meditation", source:"https://a.tumblr.com/tumblr_lx2x5oiJYO1qldmyco1.mp3"},
    { name: "Audio",source: "https://a.tumblr.com/tumblr_lx2x5oiJYO1qldmyco1.mp3" },

];
player: TNSPlayer;
_checkInterval;
progress = 0;
  constructor() { 
    this.player = new TNSPlayer();

    const playerOptions = {
        
      audioFile: "~/assets/images/audio1.mp3",

        loop: true,
        autoplay: false,
    };

  }

  ngOnInit(
    
  ) 
  
  {
  }

  changeAudio(audio) {
    // console.log('hii');
    // console.log(audio);
    this.selectedAudio = audio;
    console.log(this.selectedAudio);

    this.player = new TNSPlayer();

    const playerOptions = {
        
      audioFile: this.selectedAudio.source,

        loop: true,
        autoplay: false,
    };
    this._checkInterval = setInterval(() => {
      this.player.getAudioTrackDuration().then((duration: any) => {
          // iOS: duration is in seconds
          // Android: duration is in milliseconds
          let current = this.player.currentTime
          console.log(current);
          if (isAndroid) {
              duration *= 1000
              current *= 1000
          }
          // console.log(typeof(current));
          // console.log(typeof(duration));

          this.progress = Math.ceil(current / duration * 100);
          // console.log(typeof(this.progress));
          // console.log(this.progress);
          console.log(this.progress);
          this.isPlaying = this.player.isAudioPlaying()
      });
  }, 200);

    this.player
        .initFromUrl(playerOptions)
        .then((res) => {
            console.log(res);
            this.player.play();
        })
        .catch((err) => {
            console.log("something went wrong...", err);
        });
  }


  playPause() {
    if (this.player.isAudioPlaying()) {
      this.isPlaying = false;
        this.player.pause();
    } else {
      this.isPlaying = true;
        this.player.play();
    }
}

}
