import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from 'src/app/shared/primeng.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

import { CardCharacterComponent } from './components/card-character/card-character.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { DetailCharacterComponent } from './pages/detail-character/detail-character.component';
import { HomeCharacterComponent } from './pages/home-character/home-character.component';
import { ListCharacterComponent } from './pages/list-character/list-character.component';
import { RickMortyRoutingModule } from './rick-morty-routing.module';

@NgModule({
  declarations: [
    ListCharacterComponent,
    DetailCharacterComponent,
    HomeCharacterComponent,
    CardCharacterComponent,
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    RickMortyRoutingModule,
    PrimeNgModule,
    SharedComponentsModule,
  ],
})
export class RickMortyModule {}
