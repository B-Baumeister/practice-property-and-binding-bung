import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent implements OnInit {
  @Output() eventStart = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  onStart() {
    /*   this.emit((ref = setInterval())); */
    /* ; */
  }
  onStop() {}
}
