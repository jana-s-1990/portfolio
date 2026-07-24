import { Component } from '@angular/core';
import { ScrollArrow } from '../../components/scroll-arrow/scroll-arrow';
import { About } from '../../features/about/about';
import { Contact } from '../../features/contact/contact';
import { Hero } from '../../features/hero/hero';
import { Portfolio } from '../../features/portfolio/portfolio';
import { References } from '../../features/references/references';
import { Skills } from '../../features/skills/skills';
import { Section } from '../../shared/layouts/section/section';

@Component({
  selector: 'app-home',
  imports: [
    Section,
    Hero,
    About,
    Skills,
    Portfolio,
    References,
    Contact,
    ScrollArrow,
  ],
  templateUrl: './home.html',
})
export class Home {}
