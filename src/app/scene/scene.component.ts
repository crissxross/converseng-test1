import { Component, OnInit } from '@angular/core';
import { ScenedataService } from '../shared/scenedata.service';

@Component({
  // selector: 'app-scene', // unnecessary because via router
  templateUrl: 'scene.component.html',
  styleUrls: ['scene.component.css']
})
export class SceneComponent implements OnInit {
  errorMessage: string;
  dialogNodes;

  constructor(private scenedataService: ScenedataService) { }

  ngOnInit() {
    this.getSceneDialog();
  }

  getSceneDialog() {
    this.scenedataService.getSceneDialog()
      .subscribe(
      dialogNodes => this.dialogNodes = dialogNodes,
      error => this.errorMessage = <any>error);
  }

}
