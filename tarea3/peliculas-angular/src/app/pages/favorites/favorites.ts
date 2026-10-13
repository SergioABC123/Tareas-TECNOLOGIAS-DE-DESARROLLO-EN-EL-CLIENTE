import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieCard } from '../../shared/components/movie-card/movie-card';
import { FavoritesService } from '../../shared/services/favorites.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MovieCard, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
  readonly favoritesService = inject(FavoritesService);
}