import { Component, Directive, OnInit, Injectable, ViewChild, Input } from '@angular/core';
import { HighscoresComponent } from './app.highscores';
import { LoginComponent } from './app.login';
import { TimerObservable } from "rxjs/observable/TimerObservable";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private hideLogin: boolean;
  private hideHighscore: boolean;
  private currentName: string = "";
  private title = 'Folder IT TAP';
  //Child Injection
  @ViewChild(HighscoresComponent)
  private highscoresComponent: HighscoresComponent;

  /* Another way to avoid the event
  @ViewChild(LoginComponent)
  public loginComponent: LoginComponent;
  */

  ngOnInit(){
      this.hideLogin = false;
      this.hideHighscore = true;
  }

  addPoint(){
    if(this.hideLogin){
      this.highscoresComponent.update(this.currentName);
    }
  } 

  onNameChanged(event){
      this.currentName = event;
  }

  onEntered(event){
      if(event){
        this.hideLogin = true;
        this.hideHighscore = false;
        let timer = TimerObservable.create(0, 1000);
        timer.subscribe(t => this.tickerFunc(t));
      }
  }

  tickerFunc(t){
      this.highscoresComponent.update();
  }

}




