import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'todo';
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}

