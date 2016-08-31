import { Component, OnInit } from '@angular/core';
import { ConvoService } from '../core/convo.service';
import { Observable } from 'rxjs/Observable';

@Component({
  // selector: 'app-scene', // unnecessary because via router
  template: `
    <app-actor [aTurn]="actorTurns"></app-actor>
    <app-player [pTurn]="playerTurns"
                [pThought]="playerThought"
                [pOptions]="playerOptions"></app-player>
    <footer>
      <p>sceneMeta: {{sceneMeta}}</p>
      <!-- <hr color="grey">
      <p>peepsInterval: {{ peepsInterval | async }}... and peeps shared again: {{ peepsInterval | async | uppercase }} </p>
      <p>interval counter: {{counter | async }}</p> -->
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
  sceneMeta; // just testing for now
  // counter; // for testing only
  // peepsInterval; // for testing only

  constructor(private convoService: ConvoService) { }

  ngOnInit() {
    this.getSceneConvo();
    this.getActorTurns();
    this.getPlayerTurns();
    this.getPlayerThoughts();
    this.getPlayerOptions();
    this.getTitle(); // just testing for now
    // this.getInterval(); // for testing only
    // this.getPeepsAtInterval(); // for testing only
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

// just testing for now:
  getTitle() {
    this.sceneMeta = this.convoService.getTitle();
  }

// TEMPORARY testing
  // getInterval() {
  //   this.counter = this.convoService.getInterval();
  // }

  // getPeepsAtInterval() {
  //   this.peepsInterval = this.convoService.getPeepsAtInterval();
  // }

}
