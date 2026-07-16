import { Component, Input } from '@angular/core';
import { ReferenceHeadline } from "../reference-headline/reference-headline";
import { InfoText } from "../info-text/info-text";

@Component({
  selector: 'app-reference-card',
  imports: [ReferenceHeadline, InfoText],
  templateUrl: './reference-card.html',
  styleUrl: './reference-card.scss',
})
export class ReferenceCard {
  @Input({required:true}) name:string = '';
  @Input() jobtitle:string = '';
}
