import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component'
import { CommonModule } from '@angular/common'; //ngFor

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChildComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private number: number = 235353535355;
  secondValue: number = 11111;
  numbers: number[] = [];

  isVisible: boolean = true;

  setVisibility() {
    this.isVisible = !this.isVisible;
  }

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
