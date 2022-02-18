// Import Input for component Input...kinda like props from React
// Import Output to set up event emmitters and get access to .emit()
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // " ! " for required variable and " ? " for optional.

  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}
// Import
  onClick() {
    this.btnClick.emit();
  }
}
