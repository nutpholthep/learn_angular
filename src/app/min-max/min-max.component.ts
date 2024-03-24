import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionBarComponent } from "../action-bar/action-bar.component";

@Component({
    selector: 'app-min-max',
    standalone: true,
    templateUrl: './min-max.component.html',
    styleUrl: './min-max.component.css',
    imports: [ActionBarComponent]
})
export class MinMaxComponent {
  counter = 0
  @Input() minlabel:string = 'minlabel:'
  @Input() maxlabel:string = 'maxlabel:'

  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();

  showMin(value:number){
    this.minChange.emit(value);
    console.log("value from min",value);
    
  }
  showMax(value:number){
    this.maxChange.emit(value);
    console.log("value from max",value);
  }
 
}
