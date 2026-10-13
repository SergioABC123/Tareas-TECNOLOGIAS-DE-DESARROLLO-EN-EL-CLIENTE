import { Injectable, signal } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly favoriteMovies = signal<readonly Movie[]>([]);

  readonly favorites = this.favoriteMovies.asReadonly();

  isFavorite(movieId: number): boolean {
    return this.favoriteMovies().some(
      (movie) => movie.id === movieId
    );
  }

  addFavorite(movie: Movie): void {
    if (this.isFavorite(movie.id)) {
      return;
    }

    this.favoriteMovies.update((movies) => [...movies, movie]);
  }

  removeFavorite(movieId: number): void {
    this.favoriteMovies.update((movies) =>
      movies.filter((movie) => movie.id !== movieId)
    );
  }

  toggleFavorite(movie: Movie): void {
    if (this.isFavorite(movie.id)) {
      this.removeFavorite(movie.id);
    } else {
      this.addFavorite(movie);
    }
  }
}