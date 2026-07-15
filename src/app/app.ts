import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Section } from './shared/layouts/section/section';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Portfolio } from './features/portfolio/portfolio';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Section, About, Skills, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
