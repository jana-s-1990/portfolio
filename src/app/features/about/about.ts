import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Headline } from '../../components/headline/headline';

@Component({
  selector: 'app-about',
  imports: [Button, Headline],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
