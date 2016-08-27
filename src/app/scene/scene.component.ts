import { Component, OnInit } from '@angular/core';
import { ConvoService } from '../shared/convo.service';
import { Observable } from 'rxjs/Observable';

@Component({
  // selector: 'app-scene', // unnecessary because via router
  template: `
    <app-actor [aTurn]="actorTurns"></app-actor>
    <app-player [pTurn]="playerTurns"
                [pThought]="playerThought"
                [pOptions]="playerOptions"></app-player>
    <footer>
      <p>peepsInterval: {{ peepsInterval | async }}... and peeps shared again: {{ peepsInterval | async | uppercase }}</p>
      <hr color="grey">
      <p>{{sceneMeta}} scene --- interval counter: {{counter | async }}</p>
      <hr color="grey">
      {{ convoTurns$ | async | json }}
    </footer>
  `,
  styleUrls: ['scene.component.css']
})
export class SceneComponent implements OnInit {
  errorMessage: string;
  convoTurns$: Observable<any>;
  actorTurns;
  playerTurns;
  playerThought;
  playerOptions;
  sceneMeta; // for testing
  counter; // for testing only
  peepsInterval; // for testing only

  constructor(private convoService: ConvoService) { }

  ngOnInit() {
    this.getSceneConvo();
    this.getActorTurns();
    this.getPlayerTurns();
    this.getPlayerThoughts();
    this.getPlayerOptions();
    this.getTitle();
    this.getInterval();
    this.getPeepsAtInterval();
  }

  getSceneConvo() {
    this.convoTurns$ = this.convoService.getSceneConvo();
  }

  getActorTurns() {
    this.actorTurns = this.convoService.getActorTurns();
  }

  getPlayerTurns() {
    this.playerTurns = this.convoService.getPlayerTurns();
  }

  getPlayerThoughts() {
    this.playerThought = this.convoService.getPlayerThoughts();
  }

  getPlayerOptions() {
    this.playerOptions = this.convoService.getPlayerOptions();
  }

// for testing:
  getTitle() {
    this.sceneMeta = this.convoService.getTitle();
  }

  getInterval() {
    this.counter = this.convoService.getInterval();
  }

  getPeepsAtInterval() {
    this.peepsInterval = this.convoService.getPeepsAtInterval();
  }

}
