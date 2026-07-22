import { Component } from '@angular/core';
import { Headline } from '../../components/headline/headline';
import { Skill } from "../../components/skill/skill";
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-skills',
  imports: [Headline, Skill, TranslocoPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {}
