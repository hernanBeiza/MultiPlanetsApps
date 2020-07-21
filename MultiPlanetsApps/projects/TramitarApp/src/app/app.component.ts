import { Component } from '@angular/core';

@Component({
  selector: 'app-tramitar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TramitarApp';
  
  constructor() {
  	console.log("TramitarApp");
  }

  ngOnInit() {
  	console.log("TramitarApp ngOnInit();");
  }

}
