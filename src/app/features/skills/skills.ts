import { Component } from '@angular/core';
import { Headline } from '../../components/headline/headline';
import { Skill } from "../../components/skill/skill";

@Component({
  selector: 'app-skills',
  imports: [Headline, Skill],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {}
