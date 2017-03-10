import { Component, Directive, OnInit, Injectable, ViewChild } from '@angular/core';
import { PlayersService } from './app.service';
import { Player } from './app.player';

@Component({
  selector: 'highscores',
  templateUrl: './app.highscores.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayersService]
})
export class HighscoresComponent implements OnInit {
  players: Array<Player>;
  constructor(public service:PlayersService) {
      //this.players = new Array<Player>();
  }

  ngOnInit() {
    this.service.getAll().subscribe(
          players => this.players = players,
          error =>  <any>error);
  }

  update(name: string = "") {
    if(name == ""){
      this.service.getAll().subscribe(
          players => this.players = players,
          error =>  <any>error);
    }else{
      this.service.addPoint(name).subscribe(
        players => this.players = players,
        error =>  <any>error);
    }
  }

}