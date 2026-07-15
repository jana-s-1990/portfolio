import { Component, Input } from '@angular/core';
import { Button } from '../button/button';
import { Image } from '../image/image';
import { InfoText } from '../info-text/info-text';
import { ProjectHeadline } from '../project-headline/project-headline';

@Component({
  selector: 'app-project-card',
  imports: [Button, Image, InfoText, ProjectHeadline],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input({ required: true }) projectNumber = '';
  @Input({ required: true }) title = '';
  @Input() technologies: string[] = [];
  @Input({ required: true }) description = '';
  @Input() textPosition: 'left' | 'right' = 'left';

  @Input({ required: true }) imageSrc = '';
  @Input({ required: true }) imageAlt = '';
  @Input() imageWidth: number | null = null;
  @Input() imageHeight: number | null = null;
  @Input() imagePosition: 'left' | 'right' = 'left';

  @Input() buttonLabel = 'Github';

  get arrowPosition(): 'left' | 'right' {
    return this.imagePosition === 'left' ? 'right' : 'left';
  }
}
