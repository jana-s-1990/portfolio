import { Component } from '@angular/core';
import { Headline } from '../../components/headline/headline';
import { ContactForm } from '../../components/contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [Headline, ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
