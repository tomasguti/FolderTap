import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighscoresComponent } from './app.highscores';
import { LoginComponent } from './app.login';
import { PlayersService } from './app.service';
import { LocalStorageModule } from 'angular-2-local-storage';

import { Component, OnInit } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HighscoresComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    LocalStorageModule.withConfig({
        prefix: 'app-root',
        storageType: 'localStorage'
    })
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
