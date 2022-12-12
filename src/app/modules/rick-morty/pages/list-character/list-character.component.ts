import { Component, OnInit } from '@angular/core';

import {
  Character,
  Characters,
  Info,
  Status,
} from '../../interface/characters.interface';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.scss'],
})
export class ListCharacterComponent implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  info: Info = { count: 0, pages: 0, next: '', prev: null };
  searchByName: string = '';
  //Crear el objeto para las opciones de busqueda con las enumeraciones de tipo estado del personaje
  status = Object.keys(Status).map((state) => {
    return {
      state: Status[state as keyof typeof Status],
    };
  });
  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    const currentPage = 1;
    this.getCharacters(currentPage);
  }

  private getCharacters(page: number) {
    this.rickMortyService
      .getCharacters(page)
      .subscribe((characters: Characters) => {
        if (characters) {
          const { info, results } = characters;
          this.characters = results;
          this.info = info;
          this.filteredCharacters = this.characters;
        }
      });
  }

  /**
   * Metodo para realizar la busqueda de personajes
   * @param value name del personaje a buscar
   */
  onFilter(value: string): void {
    console.log({ value });
    const search = value;
    this.characters = this.filteredCharacters;

    if (search) {
      this.characters = this.filteredCharacters.filter((character: Character) =>
        character.name
          .toLowerCase()
          .trim()
          .includes(search.toLowerCase().trim())
      );
    }
  }

  onSortChange(event: any): void {
    console.log({ event });
    this.characters = this.filteredCharacters;
    if (event.value && event.value.state) {
      // Reestablece el valor del input de busqueda por nombre
      this.searchByName = '';
      const searchByState = event.value.state;
      this.characters = this.filteredCharacters.filter(
        (character: Character) => character.status === searchByState
      );
    }
  }

  /**
   * @description Calacular la posicion actual del paginado y hacer la peticion a la api segun la pagina
   * @param event
   */
  onChangePage(event: any) {
    const currentPage = event.first / event.rows + 1;
    if (this.info.next || this.info.prev) {
      this.characters = [];
      this.getCharacters(currentPage);
    }
  }
}
