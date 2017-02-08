import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppModule as ManekinekkoAppModule } from '@manekinekko/angular-library-starter';
import { CoreModule } from '@ghoullier/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ManekinekkoAppModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class UiAppModule { }
