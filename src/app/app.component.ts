import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { StaticPColorDirective } from './directives/static-p-color.directive';
import { CoffeeDirective } from './directives/coffee.directive';
import { LoutrePipe } from './loutre.pipe';
import { SummaryPipe } from './summary.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HighlightDirective, StaticPColorDirective, CoffeeDirective, LoutrePipe,SummaryPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directive';
  color : 'blue' | 'red' = 'blue';
  sounds = ['Trail of tears', 'Frozen heart', 'Black hole']
}
