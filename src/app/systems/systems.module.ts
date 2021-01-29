import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemsRoutingModule } from './systems-routing.module';
import { EditSystemconfigComponent } from './edit-systemconfig/edit-systemconfig.component';


@NgModule({
  declarations: [EditSystemconfigComponent],
  imports: [
    CommonModule,
    SystemsRoutingModule
  ],
  exports: [EditSystemconfigComponent]
})
export class SystemsModule { }
