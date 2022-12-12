import { Component, Input } from '@angular/core';
import { MessageService, PrimeIcons } from 'primeng/api';

import { Character } from '../../interface/characters.interface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'],
})
export class CardCharacterComponent {
  @Input() character!: Character;
  iconFavorites: string = PrimeIcons.HEART;
  constructor(private messageService: MessageService) {}

  changeFavorite(event: Character): void {
    console.log('Favorito', event);
    this.iconFavorites =
      this.iconFavorites === PrimeIcons.HEART
        ? PrimeIcons.HEART_FILL
        : PrimeIcons.HEART;
    if (this.iconFavorites === PrimeIcons.HEART_FILL) {
      this.getSucessMessage();
    }
  }

  getSucessMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Agregado a favoritos',
      detail: 'El personaje fue agregado correctamente',
    });
  }
}
