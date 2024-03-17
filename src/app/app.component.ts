import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from "./action-bar/action-bar.component";
import { MinMaxComponent } from './min-max/min-max.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ActionBarComponent,MinMaxComponent]
})
export class AppComponent {
  result = 0;

  callBuffe(value:string){
    console.log(typeof value);
    this.result = parseInt(value)*3/4
  }

  testNumberChange(value:number){
    console.log("testNumberChange is runing",value);
    
  }
}
