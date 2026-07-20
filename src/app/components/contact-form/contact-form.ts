import { Component } from '@angular/core';
import { Button } from '../button/button';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [Button],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {}
