import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MovieCard } from '../../shared/components/movie-card/movie-card';
import { MoviesService } from '../../shared/services/movies.service';
import { FavoritesService } from '../../shared/services/favorites.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieCard, ReactiveFormsModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  // Con el inject usamos el servicio en este caso de MoviesService para poder usar los metodos
  // porque en este caso queremos usar el get.Movies, por ejemplo
  private readonly moviesService = inject(MoviesService); 
  private readonly formBuilder = inject(FormBuilder); 

  readonly favoritesService = inject(FavoritesService);
  readonly movies = this.moviesService.getMovies();

  // usamos el spread (...) y nos ayudamos con el map para obtener el genero de las peliculas
  // obtenemos los generos y con el Set() eliminamos los generos repetidos
  // y ya con el spread hacemos los elementos que nos dio el set en un arreglo
  readonly genres = [...new Set(this.movies.map((movie) => movie.genre))]; 

  // obtenemos los años con el map, eliminamos repetidos con el set y los convertimos en arreglo con spread
  // Los ordenamos del mas reciente al mas viejo con sort (AYUDA IA)
  readonly years = [...new Set(this.movies.map((movie) => movie.year))]
    .sort((a, b) => b - a);

  // FormBuilder es una herramienta que nos da angular para poder crear formularios 
  // en este caso no queremos nulos
  readonly filterForm = this.formBuilder.nonNullable.group({
    title: '',
    director: '',
    producer: '',
    genre: '',
    year: '',
  });

  // toSignal nos ayuda a reaccionar a camvbios
  private readonly filters = toSignal(this.filterForm.valueChanges, {
    initialValue: this.filterForm.getRawValue(),
  });

  readonly filteredMovies = computed(() => {
    const filters = this.filters();

    return this.movies.filter((movie) => {
      const matchesTitle = this.normalize(movie.title)
        .includes(this.normalize(filters.title ?? ''));

      const matchesDirector = this.normalize(movie.director)
        .includes(this.normalize(filters.director ?? ''));

      const matchesProducer = this.normalize(movie.producer)
        .includes(this.normalize(filters.producer ?? ''));

      const matchesGenre =
        !filters.genre || movie.genre === filters.genre;

      const matchesYear =
        !filters.year || movie.year === Number(filters.year);

      return (
        matchesTitle &&
        matchesDirector &&
        matchesProducer &&
        matchesGenre &&
        matchesYear
      );
    });
  });

  clearFilters(): void {
    this.filterForm.reset();
  }

  // preparamos los textos para poder compararlos (AYUDA IA)
  private normalize(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }
}