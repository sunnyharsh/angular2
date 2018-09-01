import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AgmDirectionModule } from 'agm-direction'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
       apiKey: 'AIzaSyBMs37XVWpijVXhWr4MyWaIGaD702AEv2g',
    //  apiKey: 'AIzaSyB8sF7kl4RLifxXuMUuUWan4zBvxDTQimw',
       libraries:["places"]
    }),
    AgmDirectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
