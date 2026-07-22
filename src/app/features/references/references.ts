import { Component } from '@angular/core';
import { Headline } from '../../components/headline/headline';
import { InfoText } from '../../components/info-text/info-text';
import { ReferenceCard } from "../../components/reference-card/reference-card";
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-references',
  imports: [Headline, InfoText, ReferenceCard, TranslocoPipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {}
