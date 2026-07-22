import { Component } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { Headline } from "../../components/headline/headline";
import { InfoText } from "../../components/info-text/info-text";
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard, Headline, InfoText, TranslocoPipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {}
