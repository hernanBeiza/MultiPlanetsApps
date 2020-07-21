import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyComponent } from '@worktile/planet';

const routes: Routes = [
  {
    path: 'menu',
    component: EmptyComponent
    /*
    children: [
      {
        path: '**',
        component: EmptyComponent
      }
    ]
    */
  },
  {
    path: 'tramitar',
    component: EmptyComponent
    /*
    children: [
      {
        path: '**',
        component: EmptyComponent
      }
    ]
    */
  },
  {
    path: 'bandeja',
    component: EmptyComponent,
    /*
    children: [
      {
        path: '**',
        component: EmptyComponent
      }
    ]
    */
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
