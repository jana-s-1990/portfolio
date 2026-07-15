import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Headline } from '../../components/headline/headline';
import { ProjectHeadline } from "../../components/project-headline/project-headline";

@Component({
  selector: 'app-about',
  imports: [Button, Headline, ProjectHeadline],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
