import { Component, OnInit } from '@angular/core';
import { ScenedataService } from '../shared/scenedata.service';

@Component({
  // selector: 'app-scene', // unnecessary because via router
  templateUrl: 'scene.component.html',
  styleUrls: ['scene.component.css']
})
export class SceneComponent implements OnInit {
  errorMessage: string;
  convoTurns;

  constructor(private scenedataService: ScenedataService) { }

  ngOnInit() {
    this.getSceneConvo();
  }

  getSceneConvo() {
    this.scenedataService.getSceneConvo()
      // .do(data => console.log(data))
      // .mergeMap(data => data)
      .do(data => console.log(data))
      .subscribe(
      convoTurns => this.convoTurns = convoTurns,
      error => this.errorMessage = <any>error);
  }

}
