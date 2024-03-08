import { Component, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common'; //ngFor

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() myCounter!: number;
  @Input() secondValue!: number;
  @Input() numbers!: number[];

  public changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    for(const propName in changes) {
      const change: SimpleChange = changes[propName];
      const current = JSON.stringify(change.currentValue);
      const previous = JSON.stringify(change.previousValue);

      this.changeLog.push(
        `ngOnChanges ${propName}: currentValue = ${current}, previousValue = ${previous}, firstChange = ${change.firstChange}`
      )
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.changeLog.push('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    this.changeLog.push(`ngDoCheck: ${this.numbers.toString()}`);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    this.changeLog.push('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    this.changeLog.push('ngAfterContentChecked');
  }
}
