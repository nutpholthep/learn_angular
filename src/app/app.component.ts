import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MinMaxComponent } from './min-max/min-max.component';
import { SqaureflexComponent } from "./sqaureflex/sqaureflex.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ActionBarComponent, MinMaxComponent, SqaureflexComponent]
})
export class AppComponent {
  sqwidth = 200;
  appCounter = 20;
  doMaxChange(value: number) {
    console.log('max Value', value);
  }
  doMinChange(value: number) {
    console.log('min Value', value);
  }
  result = 0;

  callBuffe(value: string) {
    console.log(typeof value);
    this.result = (parseInt(value) * 3) / 4;
  }

  testNumberChange(value: number) {
    console.log('testNumberChange is runing', value);
  }
  
}
