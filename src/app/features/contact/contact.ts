import { Component } from '@angular/core';
import { Headline } from '../../components/headline/headline';
import { ContactForm } from '../../components/contact-form/contact-form';
import { InfoText } from '../../components/info-text/info-text';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-contact',
  imports: [Headline, ContactForm, InfoText, TranslocoPipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
