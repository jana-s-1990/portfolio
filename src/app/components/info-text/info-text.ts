import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-text',
  imports: [],
  templateUrl: './info-text.html',
  styleUrl: './info-text.scss',
  host: {
    '[class.info-text-host_right]': "position === 'right'",
  },
})
export class InfoText {
  @Input() position: 'left' | 'right' | 'center' = 'left';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() iconSrc: string | null = null;
  @Input() iconAlt = '';
  @Input() contact:boolean = false;
}
