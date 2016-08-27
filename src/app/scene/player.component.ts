import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  template: `
    <div class="player-wrapper">
      <p class="player-speaks">
        {{ pTurn | async }}
      </p>
      <div class="thinks">
        <p>{{ pThought | async }}</p>
        <div class="options">
          <ul>
            <li *ngFor="let option of pOptions | async">
              <button>{{ option }}</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() pTurn;
  @Input() pThought: string;
  @Input() pOptions;

  constructor() { }

  ngOnInit() {
  }

}
