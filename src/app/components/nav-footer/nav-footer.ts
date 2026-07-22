import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-nav-footer',
  imports: [TranslocoPipe],
  templateUrl: './nav-footer.html',
  styleUrl: './nav-footer.scss',
})
export class NavFooter {}
