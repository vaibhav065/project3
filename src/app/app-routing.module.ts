import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ChooseMeditationComponent}  from './choose-meditation/choose-meditation.component';
import { FirstComponent } from "./first/first.component";
import {MeditationComponent}from "./meditation/meditation.component";
import {AudioComponent }from "./audio/audio.component";
import{YogaComponent}from  "./yoga/yoga.component";
import{PrayerComponent} from  "./prayer/prayer.component";
import{DailyQuotesComponent}from "./daily-quotes/daily-quotes.component";
import{MedidesComponent}from"./medides/medides.component";
import{YogdesComponent}from"./yogdes/yogdes.component";
import{InspquoteComponent}from"./inspquote/inspquote.component";
import {VideoComponent }from "./video/video.component";
import {HumbleComponent }from "./humble/humble.component";
import {PositiveComponent }from "./positive/positive.component";
import {WisdomComponent }from "./wisdom/wisdom.component";
import {GodComponent }from "./god/god.component";
import {BuddhaComponent }from "./buddha/buddha.component";
import {VideochooseComponent }from "./videochoose/videochoose.component";
import {YogadescriptiomComponent }from "./yogadescriptiom/yogadescriptiom.component";
import {V1Component }from "./v1/v1.component";
import {V2Component }from "./v2/v2.component";
import {V3Component }from "./v3/v3.component";
import {Audio1Component }from "./audio1/audio1.component";
import {Y1Component }from "./y1/y1.component";
import {Y2Component }from "./y2/y2.component";
import {Y3Component }from "./y3/y3.component";
import {Y4Component }from "./y4/y4.component";
import {YogavideochooseComponent }from "./yogavideochoose/yogavideochoose.component";
import {P1Component }from "./p1/p1.component";
import {P2Component }from "./p2/p2.component";
import {P3Component }from "./p3/p3.component";
import {P4Component }from "./p4/p4.component";
import {PrayervideochooseComponent }from "./prayervideochoose/prayervideochoose.component";






const routes: Routes = [
    { path: "", redirectTo: "/first", pathMatch: "full" },
    { path: "first", component : FirstComponent },
    { path: 'choose-meditation', component:  ChooseMeditationComponent},
    { path: 'meditation', component:  MeditationComponent},
    { path: 'audio', component: AudioComponent },
    {path:'yoga', component :YogaComponent},
    {path:'prayer', component :PrayerComponent},
    {path:'daily-quotes', component :DailyQuotesComponent},
    {path:'medides', component :MedidesComponent},
    {path:'yogdes', component :YogdesComponent},
    {path:'inspquote', component :InspquoteComponent},
    {path:'video', component :VideoComponent},
    {path:'humble', component :HumbleComponent},
    {path:'positive', component :PositiveComponent},
    {path:'wisdom', component :WisdomComponent},
    {path:'god', component :GodComponent},
    {path:'buddha', component :BuddhaComponent},
    {path:'videochoose', component :VideochooseComponent},
    {path:'yogadescriptiom', component :YogadescriptiomComponent},
    {path:'v1', component :V1Component},
    {path:'v2', component :V2Component},
    {path:'v3', component :V3Component},
    {path:'audio', component :Audio1Component},
    {path:'y1', component :Y1Component},
    {path:'y2', component :Y2Component},
    {path:'y3', component :Y3Component},
    {path:'y4', component :Y4Component},
    {path:'yogavideochoose', component :YogavideochooseComponent},
    {path:'p1', component :P1Component},
    {path:'p2', component :P2Component},
    {path:'p3', component :P3Component},
    {path:'p4', component :P4Component},
    {path:'prayervideochoose', component :PrayervideochooseComponent},


];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
