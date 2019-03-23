import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-audio1',
  templateUrl: './audio1.component.html',
  styleUrls: ['./audio1.component.css'],
  moduleId: module.id,
})
export class Audio1Component implements OnInit {


  countries: { name: string, source: string }[] = [
    { name: "Breate awareness Meditation", source :"https://a.tumblr.com/tumblr_lx2x5oiJYO1qldmyco1.mp3"},
    { name: "Relaxing the mental formation", source :"https://a.tumblr.com/tumblr_lx2x5oiJYO1qldmyco1.mp3"  },
    { name: "Heart  space  meditation", source :"https://a.tumblr.com/tumblr_lx2x5oiJYO1qldmyco1.mp3"},
    { name: "Art of  attention", source :"https://a.tumblr.com/tumblr_lx2x5oiJYO1qldmyco1.mp3"},
    { name: "Loving-Kindness meditation", source :"https://a.tumblr.com/tumblr_lx2x5oiJYO1qldmyco1.mp3"},
    { name: "Audio",  source :"https://a.tumblr.com/tumblr_lx2x5oiJYO1qldmyco1.mp3"},

];



audioOption( ) {

  console.log("hiii");
}


  constructor() { }

  ngOnInit() {
  }

}
