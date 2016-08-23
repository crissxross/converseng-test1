import { Component, OnInit } from '@angular/core';
import { ScenedataService } from '../shared/scenedata.service';

@Component({
  // selector: 'app-scene', // unnecessary because via router
  template: `
    <app-actor [aTurn]="actorTurns"></app-actor>
    <app-player [pTurn]="playerTurns"
                [pThought]="playerThought"
                [pOptions]="playerOptions"></app-player>
    <footer>
      <small>scene</small>
      <ul>
        <li *ngFor="let turn of convoTurns">
          {{turn.actor}}:
          <ul>
            <li *ngIf="turn.thinks"><em> * {{turn.thinks}}</em></li>
          </ul>
          {{turn.says}}
        </li>
      </ul>
      <!--{{convoTurns}}-->
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

  constructor(private scenedataService: ScenedataService) { }

  ngOnInit() {
    this.getSceneConvo();
    this.getActorTurns();
    this.getPlayerTurns();
    this.getPlayerThoughts();
    this.getPlayerOptions();
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
    ]
  }

}
