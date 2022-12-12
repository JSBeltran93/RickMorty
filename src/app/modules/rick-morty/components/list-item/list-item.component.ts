import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Character } from '../../interface/characters.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() character!: Character;

  constructor(private router: Router) {}
  goToDetailCharacter(id: number) {
    // click = 'goToDetailCharacter(character.id)'
    // [routerLink] =
    //    "['/detail-character', character.id]";
    this.router.navigate(['/detail-character', id]);
  }
}
