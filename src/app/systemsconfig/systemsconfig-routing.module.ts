import { SystemsconfigModule } from './systemsconfig.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'all-systemsconfig',
  //   component: EditSystemConfigComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemsconfigRoutingModule { }
