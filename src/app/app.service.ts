import { Injectable } from '@angular/core';

@Injectable()
export class PlayersService {
  players: Array<Player>;
  playersMap: Map<String, Player>;
  contructor(){
      this.players = new Array();
      this.playersMap = new Map();
      this.addPlayer("Tomas");
      this.addPlayer("Juan");
      this.addPlayer("José");
  }

  sortPlayers(){
    this.players.sort((a:Player, b:Player) => {
      if(a.highscore > b.highscore){
          return -1;
      }else if(a.highscore < b.highscore){
          return 1;
      }else{
          return 0;
      }
    })
  }

  addPlayer(name: string){
    let player = new Player(name);
    this.players.push(player);
    this.playersMap.set(player.name, player);
  }

  addPoint(name: string){
    if(this.playersMap.has(name)){
        this.playersMap.get(name).highscore++;
    }else{
        this.addPlayer(name);
    }
  }
  
}

class Player{
    name: string;
    highscore: number;
    constructor(name: string){
      this.name = name;
      this.highscore = 0;
    }
}