import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudappAddPageRoutingModule } from './crudapp-add-routing.module';

import { CrudappAddPage } from './crudapp-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudappAddPageRoutingModule
  ],
  declarations: [CrudappAddPage]
})
export class CrudappAddPageModule {}
