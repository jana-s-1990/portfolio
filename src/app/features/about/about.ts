import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Headline } from '../../components/headline/headline';
import { Image } from '../../components/image/image';
import { InfoText } from '../../components/info-text/info-text';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-about',
  imports: [Button, Headline, Image, InfoText, TranslocoPipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
