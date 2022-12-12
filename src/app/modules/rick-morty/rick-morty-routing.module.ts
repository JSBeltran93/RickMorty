import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailCharacterComponent } from './pages/detail-character/detail-character.component';
import { HomeCharacterComponent } from './pages/home-character/home-character.component';
import { ListCharacterComponent } from './pages/list-character/list-character.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCharacterComponent,
    children: [
      {
        path: 'list-character',
        component: ListCharacterComponent,
      },
      {
        path: 'detail-character/:id',
        component: DetailCharacterComponent,
      },
      {
        path: '**',
        redirectTo: 'list-character',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickMortyRoutingModule {}
