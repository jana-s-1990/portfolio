import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() variant = 'default';
  @Input() position: 'left' | 'right' | 'center' = 'left';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
}
