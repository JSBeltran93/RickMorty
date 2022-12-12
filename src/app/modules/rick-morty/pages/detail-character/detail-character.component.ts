import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import {
  Character,
  Episode,
  Location,
} from '../../interface/characters.interface';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss'],
})
export class DetailCharacterComponent implements OnInit {
  character!: Character;
  episodes!: Episode[];
  location!: Location;
  origin!: Location;
  constructor(
    private activatedRoute: ActivatedRoute,
    private rickMortyService: RickMortyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getEpisodes();
    this.getEpisodesById(3);
    this.getLocationById(1);
    this.getOriginById(20);
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.rickMortyService.getCharacterById(id)))
      .subscribe((character) => {
        this.character = character;
        console.log('detalle', character);
      });
  }

  getEpisodes() {
    this.rickMortyService.getEpisodes().subscribe((episode) => {
      this.episodes = episode.results;
      console.log('episodes', episode, this.episodes);
    });
  }

  getEpisodesById(episodeId: number) {
    this.rickMortyService.getEpisodeById(episodeId).subscribe((episode) => {
      // this.episode = episode;
      // console.log('episode', this.episode);
    });
  }

  getLocationById(locationId: number) {
    this.rickMortyService.getLocationById(locationId).subscribe((location) => {
      this.location = location;
      console.log('location', location, this.location);
    });
  }

  getOriginById(originId: number) {
    this.rickMortyService.getLocationById(originId).subscribe((origin) => {
      this.origin = origin;
      console.log('origin', origin, this.origin);
    });
  }

  goToListCharacters() {
    this.router.navigate(['/list-character']);
  }
}
