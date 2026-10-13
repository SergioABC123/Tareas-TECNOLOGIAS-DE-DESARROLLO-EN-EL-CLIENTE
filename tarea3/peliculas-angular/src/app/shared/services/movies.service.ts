import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
// generadas con IA
export class MoviesService {
  private readonly movies: readonly Movie[] = [
    {
      id: 1,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      producer: 'Emma Thomas',
      genre: 'Ciencia ficción',
      year: 2014,
      description:
        'Un grupo de exploradores viaja más allá de nuestra galaxia para buscar un nuevo hogar para la humanidad.',
      poster:
        'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    },
    {
      id: 2,
      title: 'Inception',
      director: 'Christopher Nolan',
      producer: 'Emma Thomas',
      genre: 'Ciencia ficción',
      year: 2010,
      description:
        'Un especialista en entrar en los sueños recibe la misión de implantar una idea en la mente de un empresario.',
      poster:
        'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    },
    {
      id: 3,
      title: 'Coco',
      director: 'Lee Unkrich',
      producer: 'Darla K. Anderson',
      genre: 'Animación',
      year: 2017,
      description:
        'Miguel sueña con ser músico y emprende una aventura en la Tierra de los Muertos para descubrir la historia de su familia.',
      poster:
        'https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',
    },
    {
      id: 4,
      title: 'The Dark Knight',
      director: 'Christopher Nolan',
      producer: 'Charles Roven',
      genre: 'Acción',
      year: 2008,
      description:
        'Batman enfrenta al Joker, un criminal que busca sembrar el caos y poner a prueba los principios de Gotham.',
      poster:
        'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    },
    {
      id: 5,
      title: 'Titanic',
      director: 'James Cameron',
      producer: 'Jon Landau',
      genre: 'Romance',
      year: 1997,
      description:
        'Dos jóvenes de distintas clases sociales se enamoran durante el viaje inaugural del Titanic.',
      poster:
        'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
    },
    {
      id: 6,
      title: 'Toy Story',
      director: 'John Lasseter',
      producer: 'Bonnie Arnold',
      genre: 'Animación',
      year: 1995,
      description:
        'La llegada de un nuevo juguete cambia la vida de Woody, un vaquero que debe aprender a compartir su lugar con Buzz Lightyear.',
      poster:
        'https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
    },
  ];

  getMovies(): readonly Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find((movie) => movie.id === id);
  }
}