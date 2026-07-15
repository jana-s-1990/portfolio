import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-headline',
  imports: [],
  templateUrl: './project-headline.html',
  styleUrl: './project-headline.scss',
})
export class ProjectHeadline {
  @Input({required:true}) title='';
  @Input() technologies: string[] = [];
  @Input() position: 'left' | 'right' = 'left';
}
