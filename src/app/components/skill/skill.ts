import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.scss',
})
export class Skill {
  @Input({required:true}) src:string = '';
  @Input() alt:string = '';
  
  @Input({required:true}) technologieName:string ='';
}
