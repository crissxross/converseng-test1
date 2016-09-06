import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { CastlistService } from '../core/castlist.service';

// interface AppState { }

@Component({
  template: `
    <h1>{{title}}</h1>
    <hr color="grey">
    <h3>Cast List</h3>
    <h4 *ngIf="actors">Main Actors</h4>
    <ul>
      <li *ngFor="let actor of actors | async">{{ actor }}</li>
    </ul>
    <h4 *ngIf="players">Player Characters</h4>
    <ul>
      <li *ngFor="let player of players | async">{{ player }}</li>
    </ul>
    <h4 *ngIf="npcs">NPCs</h4>
    <ul>
      <li *ngFor="let npc of npcs | async">{{ npc }}</li>
    </ul>
`,
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'conversengine';
  actors;
  players;
  npcs;

  constructor(
    // public store: Store<AppState>,
    public store: Store<any>,
    public castlistService: CastlistService
  ) {
    // this.castlistService.getCastlist();
    // this.castlistService.getMainActors();
    // this.actors = this.store.select('cast');
    // this.castlistService.getPlayerCharacters();
    // this.players = this.store.select('players');
    // this.castlistService.getNpcs();
    // this.npcs = this.store.select('npcs');
   }

  ngOnInit() {
    this.castlistService.getCastlist();
    this.castlistService.getMainActors();
    this.actors = this.store.select('cast');
    this.castlistService.getPlayerCharacters();
    this.players = this.store.select('players');
    this.castlistService.getNpcs();
    this.npcs = this.store.select('npcs');
  }

}
