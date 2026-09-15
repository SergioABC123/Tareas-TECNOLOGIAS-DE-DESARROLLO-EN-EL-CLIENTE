import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { SelectorPadre } from './components/selector-padre/selector-padre';

@Component({
  selector: 'app-root',
  imports: [SelectorPadre],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular');
}
