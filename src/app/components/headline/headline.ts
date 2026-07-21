import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  imports: [],
  templateUrl: './headline.html',
  styleUrl: './headline.scss',
})
export class Headline {
  @Input() position = 'center';
  @Input() contact: boolean = false;
}
