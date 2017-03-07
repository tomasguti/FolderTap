import { Component, Directive, OnInit, Injectable, ViewChild } from '@angular/core';
import { PlayersService } from './app.service';

@Component({
  selector: 'highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayersService]
})
export class HighscoresComponent implements OnInit {
  constructor(public service:PlayersService) {
      service.contructor();
  }

  ngOnInit() { }

  update(name: string){
      this.service.addPoint(name);
      this.service.sortPlayers();
  }

}