import { Component, Input } from '@angular/core';

import { Character } from '../../interface/characters.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() character!: Character;
}
