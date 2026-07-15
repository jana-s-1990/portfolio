import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.html',
  styleUrl: './image.scss',
})
export class Image {
  @Input({ required: true }) src = '';
  @Input({ required: true }) alt = '';

  @Input() variant: 'default' | 'project' = 'default';
  @Input() arrowPosition: 'left' | 'right' = 'right';

  @Input() width: number | null = null;
  @Input() height: number | null = null;
}