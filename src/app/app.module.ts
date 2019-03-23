import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstComponent } from './first/first.component';
import { ChooseMeditationComponent } from './choose-meditation/choose-meditation.component';
import { MeditationComponent } from './meditation/meditation.component'
import { YogaComponent } from './yoga/yoga.component';
import { PrayerComponent } from './prayer/prayer.component';
import { DailyQuotesComponent } from './daily-quotes/daily-quotes.component';
import { MedidesComponent } from './medides/medides.component';
/*import { RouterModule } from "@angular/router";*/
import {NativeScriptAnimationsModule} from "nativescript-angular/animations";
import { YogdesComponent } from './yogdes/yogdes.component';
import { InspquoteComponent } from './inspquote/inspquote.component';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';
import { VideochooseComponent } from './videochoose/videochoose.component';
import { PositiveComponent } from './positive/positive.component';
import { HumbleComponent } from './humble/humble.component';
import { BuddhaComponent } from './buddha/buddha.component';
import { WisdomComponent } from './wisdom/wisdom.component';
import { GodComponent } from "./god/god.component";
import { YogadescriptiomComponent } from "./yogadescriptiom/yogadescriptiom.component";
import { V2Component } from './v2/v2.component';
import { V1Component } from "./v1/v1.component";
import { V3Component } from "./v3/v3.component";
import { Audio1Component } from './audio1/audio1.component';
import { Y1Component } from './y1/y1.component';
import { YogavideochooseComponent } from './yogavideochoose/yogavideochoose.component';
import { Y2Component } from "./y2/y2.component";
import { Y3Component } from "./y3/y3.component";
import { Y4Component } from "./y4/y4.component";
import { P4Component } from './p4/p4.component';
import { PrayervideochooseComponent } from './prayervideochoose/prayervideochoose.component';
import { P1Component } from "./p1/p1.component";
import { P2Component } from "./p2/p2.component";
import { P3Component } from "./p3/p3.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptAnimationsModule
       /* RouterModule*/
    ],
    declarations: [
        AppComponent,
        FirstComponent,
        ChooseMeditationComponent,
        MeditationComponent,
        AudioComponent,
        YogaComponent,
        PrayerComponent,
        DailyQuotesComponent,
        MedidesComponent,
        YogdesComponent,
        InspquoteComponent,
        AudioComponent,
        VideoComponent,
        VideochooseComponent,
        PositiveComponent,
        HumbleComponent,
        BuddhaComponent,
        WisdomComponent,
        GodComponent,
        YogadescriptiomComponent,
        V2Component,
        V1Component,
        V3Component,
        Audio1Component,
        Y1Component,
        Y2Component,
        Y3Component,
        Y4Component,
        YogavideochooseComponent,
        P1Component,
        P2Component,
        P3Component,
        P4Component,
        PrayervideochooseComponent,
    
     
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
