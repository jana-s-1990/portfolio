import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reference-headline',
  imports: [],
  templateUrl: './reference-headline.html',
  styleUrl: './reference-headline.scss',
})
export class ReferenceHeadline {
  @Input({required:true}) name:string = '';
  @Input() jobtitle:string = '';
}
