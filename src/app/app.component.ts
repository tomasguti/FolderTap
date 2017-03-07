import { Component, Directive, OnInit, Injectable, ViewChild, Input } from '@angular/core';
import { HighscoresComponent } from './app.highscores';
import { LoginComponent } from './app.login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Child Injection
  @ViewChild(HighscoresComponent)
  public highscoresComponent: HighscoresComponent;

  /* Another way to avoid the event
  @ViewChild(LoginComponent)
  public loginComponent: LoginComponent;
  */

  currentName: string = "Nombre";

  title = 'Folder IT TAP';
  addPoint(){
      this.highscoresComponent.update(this.currentName);
  } 

  onNameChanged(event){
      this.currentName = event;
  }
}




