import { EditSystemconfigComponent } from './edit-systemconfig/edit-systemconfig.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'edit-systemconfig',
    component: EditSystemconfigComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemsconfigRoutingModule { }
