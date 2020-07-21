import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planet, GlobalEventDispatcher, SwitchModes, ApplicationStatus } from '@worktile/planet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-planet';

  get loadingDone() {
      return this.planet.loadingDone;
  }

  constructor(
    private router: Router,
    private planet: Planet,
    private globalEventDispatcher: GlobalEventDispatcher) {}

    ngOnInit() {
      console.log(ApplicationStatus);

	    this.planet.setOptions({
        switchMode: SwitchModes.coexist,
        errorHandler: error => {
          console.error(`Failed to load resource, error:`, error);
        }
	    });

	    this.planet.registerApps([
        {
          name: 'appmenu',
          hostParent: '#menu-host-container',
          hostClass: 'menu-container-layout',
          routerPathPrefix: '',
          selector: 'app-menu-root',
          resourcePathPrefix: '/static/menu/',
          preload: true,
          scripts: [
            'main.js'
          ],
          styles: [
            //'styles.css'
          ]
        },

        {
          name: 'apptramitar',
          hostParent: '#app-host-container',
          hostClass: 'thy-layout',
          routerPathPrefix: '/tramitar',
          selector: 'app-tramitar-root',
          resourcePathPrefix: '/static/tramitar/',
          preload: true,
          scripts: [
            'main.js'
          ],
          styles: [
            //'styles.css'
          ]
        },
        {
          name: 'appbandeja',
          hostParent: '#app-host-container',
          hostClass: 'thy-layout',
          routerPathPrefix: '/bandeja',
          selector: 'app-bandeja-root',
          resourcePathPrefix: '/static/bandeja/',
          preload: true,
          scripts: [
            'main.js'
          ],
          styles: [
            //'/static/app2/styles.css'
          ]
        }
	    ]);

	    // start monitor route changes
	    // get apps to active by current path
	    // load static resources which contains javascript and css
	    // bootstrap angular sub app module and show it
      //console.log(this.planet.getApps());
      this.planet.start();

      this.planet.appStatusChange.subscribe(data=>{
        //console.log(data);
        if(data.status == ApplicationStatus.loadError) {
          console.error("Error al cargar aplicación")
        }
      });
      this.planet.appsLoadingStart.subscribe(event => {
        //console.log(event);
        let activeAppNames = event.shouldLoadApps.map(item => item.name);
          console.log(`Active app names: ${activeAppNames.join(',')}`);
      });

    }
}