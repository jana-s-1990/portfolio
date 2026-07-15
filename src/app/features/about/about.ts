import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Headline } from '../../components/headline/headline';
import { ProjectHeadline } from "../../components/project-headline/project-headline";
import { Image } from "../../components/image/image";

@Component({
  selector: 'app-about',
  imports: [Button, Headline, ProjectHeadline, Image],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
