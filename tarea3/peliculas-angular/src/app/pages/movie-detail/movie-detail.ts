import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MoviesService } from '../../shared/services/movies.service';
import { FavoritesService } from '../../shared/services/favorites.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetail {
  private readonly route = inject(ActivatedRoute); // nos permite leer el id de la direccion
  private readonly moviesService = inject(MoviesService);

  readonly favoritesService = inject(FavoritesService);

  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly movie = computed(() => {
    const id = this.params().get('id');

    if (!id || !/^\d+$/.test(id)) { // IA
      return undefined;
    }

    return this.moviesService.getMovieById(Number(id));
  });
}