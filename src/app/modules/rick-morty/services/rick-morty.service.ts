import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import {
  Character,
  Characters,
  Episode,
  Episodes,
  Location,
} from '../interface/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  private urlApi: string = environment.apiEndPoint;
  constructor(private http: HttpClient) {}

  getCharacters(page: number): Observable<Characters> {
    return this.http.get<Characters>(`${this.urlApi}/character?page=${page}`);
  }

  getCharacterById(characterId: number): Observable<Character> {
    return this.http.get<Character>(`${this.urlApi}/character/${characterId}`);
  }

  getEpisodes(): Observable<Episodes> {
    return this.http.get<Episodes>(`${this.urlApi}/episode/`);
  }

  getEpisodeById(episodeId: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.urlApi}/episode/${episodeId}`);
  }

  getLocationById(episodeId: number): Observable<Location> {
    return this.http.get<Location>(`${this.urlApi}/location//${episodeId}`);
  }
}
