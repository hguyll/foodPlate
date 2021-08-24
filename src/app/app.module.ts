import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';
import { PlateComponent } from './plate/plate.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeBtnComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeBtnComponent,
    PlateComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
