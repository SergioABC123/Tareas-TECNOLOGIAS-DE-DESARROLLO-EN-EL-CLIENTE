import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  @Input({ required: true }) movie!: Movie;
  @Input() isFavorite = false;

  @Output() favoriteChange = new EventEmitter<Movie>();

  changeFavorite(): void {
    this.favoriteChange.emit(this.movie);
  }
}