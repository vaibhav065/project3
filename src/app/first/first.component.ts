import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Image } from "tns-core-modules/ui/image";

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  moduleId: module.id,
})
export class FirstComponent implements OnInit {

  constructor(private  routerExtensions: RouterExtensions) { }

  

  ngOnInit() : void  {
  }

}
