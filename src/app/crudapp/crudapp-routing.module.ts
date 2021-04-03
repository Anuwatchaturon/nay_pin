import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudappPage } from './crudapp.page';

const routes: Routes = [
  {
    path: '',
    component: CrudappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudappPageRoutingModule {}
