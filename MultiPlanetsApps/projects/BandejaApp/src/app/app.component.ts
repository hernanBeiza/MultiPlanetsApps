import { Component } from '@angular/core';

@Component({
  selector: 'app-bandeja-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BandejaApp';
  
  constructor() {
  	console.log("BandejaApp");
  }

  ngOnInit() {
  	console.log("BandejaApp ngOnInit();");
  }

}
