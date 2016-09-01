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
            <li *ngIf="opOption">
              <button (click)="selectOP($event)">
                {{opOption | async}}</button></li>
            <li *ngIf="vkOption">
              <button (click)="selectVK($event)">
                {{vkOption | async}}</button></li>
            <li *ngIf="unOption">
              <button (click)="selectUN($event)">
                {{unOption | async}}</button></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Below is temporary for testing -->
    <ul>
      <li *ngFor="let option of pOptions | async">
              <button (click)="selectOption($event)">
              {{ option.op || option.vk || option.un }}</button>
            </li>
    </ul>
  `,
  styleUrls: ['player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() pTurn;
  @Input() pThought: string;
  @Input() pOptions;
  @Input() opOption;
  @Input() vkOption;
  @Input() unOption;

  // NOTE: I NEED TO SEND AN OUTPUT FROM BUTTON CLICKED!??

  constructor() { }

  ngOnInit() {
  }

  selectOP(event) {
    console.log('selected OP:', event.target.innerHTML);
  }

  selectVK(event) {
    console.log('selected VK:', event.target.innerHTML);
  }

  selectUN(event) {
    console.log('selected UN:', event.target.innerHTML);
  }

// for testing:
  selectOption(event) {
    // console.log('Clicked:', event.target.innerHTML);
    console.log('target:', event.target);
  }

}
