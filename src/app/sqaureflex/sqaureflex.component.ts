import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaureflex',
  standalone: true,
  imports: [],
  templateUrl: './sqaureflex.component.html',
  styleUrl: './sqaureflex.component.css'
})
export class SqaureflexComponent {
  @Input() divWidth =200;
  @Input() divHeight =100;

}
