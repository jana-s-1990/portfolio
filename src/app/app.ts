import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './features/hero/hero';
import { Section } from './shared/layouts/section/section';
import { Header } from './shared/layouts/header/header';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Portfolio } from './features/portfolio/portfolio';
import { References } from './features/references/references';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Section, About, Skills, Portfolio, References],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
