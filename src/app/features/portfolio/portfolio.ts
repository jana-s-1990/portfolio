import { Component } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { Headline } from "../../components/headline/headline";
import { InfoText } from "../../components/info-text/info-text";

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard, Headline, InfoText],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {}
