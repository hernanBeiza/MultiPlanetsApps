import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { PlanetPortalApplication, defineApplication, SwitchModes } from '@worktile/planet';

console.log("TramitarApp: main.ts");

if (environment.production) {
  enableProdMode();
}
/*
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/
defineApplication('apptramitar', (portalApp: PlanetPortalApplication) => {
  return platformBrowserDynamic([
    {
      provide: PlanetPortalApplication,
      useValue: portalApp
    }
  ])
  .bootstrapModule(AppModule)
  .then(appModule => {
    //console.log("bootstrapModule",appModule);
    return appModule;
  })
  .catch(error => {
    console.error("error en TramitarApp");
    console.error(error);
    return null;
  });
});