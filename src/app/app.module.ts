import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionService } from './services/auth/session.service';
import { UserdetailsService } from './services/user-details/userdetails.service';
import { RouteService } from './services/route/route.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SessionService, UserdetailsService, RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
