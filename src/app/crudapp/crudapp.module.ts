import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudappPageRoutingModule } from './crudapp-routing.module';

import { CrudappPage } from './crudapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudappPageRoutingModule
  ],
  declarations: [CrudappPage]
})
export class CrudappPageModule {}
