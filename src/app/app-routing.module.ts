import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'crudapp',
    pathMatch: 'full'
  },

  {
    path: 'crudapp-add',
    loadChildren: () => import('./crudapp-add/crudapp-add.module').then( m => m.CrudappAddPageModule)
  },
  {
    path: 'crudapp',
    loadChildren: () => import('./crudapp/crudapp.module').then( m => m.CrudappPageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then( m => m.NotePageModule)
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
