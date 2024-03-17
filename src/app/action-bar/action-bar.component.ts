import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css'
})
export class ActionBarComponent {
  count:number = 0;
  @Input() step:number = 1;
  @Input() text:string | undefined 
  @Output() numberChange = new EventEmitter;
    decrese(){
      if(this.count - this.step >= 0){
        this.count = this.count - this.step;
        this.numberChange.emit(this.count);
      }
    }
    
    increse(){
      if(this.count + this.step <= 100){
        this.count = this.count + this.step;
        this.numberChange.emit(this.count);
      }
      console.log(this.count);
      // console.log(this.text);
      
    }

}
