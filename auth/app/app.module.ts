import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy ,HashLocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Billing } from './components/billing/billing.component';
import { routing } from './app.routing';
import { AuthorizedGuard } from './guards/authorize.guard';
import { UnSavedChangesGuard } from './guards/unSavedChanges.guard';
@NgModule({
  declarations: [
    AppComponent , HomeComponent , Billing
  ],
  imports: [
    BrowserModule, routing
  ],
  providers:[{provide:LocationStrategy, useClass:HashLocationStrategy},
    AuthorizedGuard , UnSavedChangesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
