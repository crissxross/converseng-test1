import { Component, OnInit } from '@angular/core';
import { ScenedataService } from '../shared/scenedata.service';
import { ConvoService } from '../shared/convo.service';

@Component({
  // selector: 'app-scene', // unnecessary because via router
  template: `
    <app-actor [aTurn]="actorTurns"></app-actor>
    <app-player [pTurn]="playerTurns"
                [pThought]="playerThought"
                [pOptions]="playerOptions"></app-player>
    <footer>
      <p>{{sceneMeta}} scene</p>
      <ul>
        <li *ngFor="let turn of convoTurns">
          {{turn.actor}}:
          <ul>
            <li *ngIf="turn.thinks"><em> * {{turn.thinks}}</em></li>
          </ul>
          {{turn.says}}
        </li>
      </ul>
      <hr color="grey">
      {{ convoTurns | json }}
    </footer>
  `,
  styleUrls: ['scene.component.css']
})
export class SceneComponent implements OnInit {
  errorMessage: string;
  convoTurns;
  actorTurns;
  playerTurns;
  playerThought: string;
  playerOptions: string[];
  sceneMeta;

  constructor(
    private scenedataService: ScenedataService,
    private convoService: ConvoService
  ) { }

  ngOnInit() {
    this.getSceneConvo();
    this.getActorTurns();
    this.getPlayerTurns();
    this.getPlayerThoughts();
    this.getPlayerOptions();
    this.getTitle();
  }

  getSceneConvo() {
    this.scenedataService.getSceneConvo()
      // NOTE: mergeMap is just my temporary test
      // .do(data => console.log('before mergeMap:', data))
      // .mergeMap(data => data)
      .do(data => console.log(data, 'isArray:', Array.isArray(data)))
      .subscribe(
      convoTurns => this.convoTurns = convoTurns,
      error => this.errorMessage = <any>error);
  }

  getActorTurns() {
    this.actorTurns = 'Hello! I\'m the Actor (actorTurn test string).';
  }

  getPlayerTurns() {
    this.playerTurns = 'Hi! I\'m the Player (playerTurn test string).';
  }

  getPlayerThoughts() {
    this.playerThought = 'I\'m thinking player thoughts.';
  }

  getPlayerOptions() {
    this.playerOptions = [
      'Option one?',
      'Or maybe choose option two?'
      // 'Or even option three?'
    ];
  }
// for testing:
  getTitle() {
    this.sceneMeta = this.convoService.getTitle();
  }

}
