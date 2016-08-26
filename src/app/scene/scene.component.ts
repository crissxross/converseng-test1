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
    <p>peepsInterval: {{ peepsInterval | async }}</p>
    <footer>
      <p>{{sceneMeta}} scene --- interval counter: {{counter | async }}</p>
      <!-- <ul>
        <li *ngFor="let turn of convoTurns$ | async">
          {{turn.actor}}:
          <ul>
            <li *ngIf="turn.thinks"><em> * {{turn.thinks}}</em></li>
          </ul>
          {{turn.says}}
        </li>
      </ul> -->
      <hr color="grey">
      {{ convoTurns$ | async | json }}
    </footer>
  `,
  styleUrls: ['scene.component.css']
})
export class SceneComponent implements OnInit {
  errorMessage: string;
  // convoTurns;
  convoTurns$: Observable<any>;
  actorTurns;
  playerTurns;
  playerThought: string;
  playerOptions: string[];
  sceneMeta;
  counter;
  peepsInterval;

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
    this.convoTurns$ = this.convoService.getSceneConvo()
      // .do(data => console.log(data, 'isArray:', Array.isArray(data)))
      // .subscribe(
      // convoTurns => this.convoTurns = convoTurns,
      // error => this.errorMessage = <any>error);
  }

  getActorTurns() {
    this.actorTurns = 'Hello! I\'m the Actor (actorTurn test string).';
  }

  getPlayerTurns() {
    this.playerTurns = 'Hi! I\'m the Player (playerTurn test string).';
  }

  getPlayerThoughts() {
    this.playerThought = 'I\'m thinking player thoughts (test string).';
  }

  getPlayerOptions() {
    this.playerOptions = [
      'Option one test?',
      'Or testing longer option two?',
      // 'Or even option three?'
    ];
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
