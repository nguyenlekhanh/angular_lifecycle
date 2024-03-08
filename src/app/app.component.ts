import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChildComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private number: number = 235353535355;
  secondValue: number = 11111;
  numbers: number[] = [];

  get counter() {
    return this.number;
  }

  set counter(value: number) {
    this.number = value;
  }

  increment() {
    console.log('increment');
    this.counter++;
  }

  decrement() {
    console.log('decrement');
    this.counter--;
  }

  add() {
    this.numbers = [...this.numbers, 1]
  }
}
