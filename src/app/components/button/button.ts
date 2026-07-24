import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgTemplateOutlet],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() variant = 'default';
  @Input() position: 'left' | 'right' | 'center' = 'left';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Input() href: string | null = null;
  @Input() target: '_self' | '_blank' = '_self';

  get rel(): string | null {
    return this.target === '_blank' ? 'noopener noreferrer' : null;
  }
}
