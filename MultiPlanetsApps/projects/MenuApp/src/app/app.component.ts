import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MenuApp';

  constructor() {
  	console.log("MenuApp");
  }

  ngOnInit() {
  	console.log("MenuApp ngOnInit();");
  }
  
}