export interface Movie {
  readonly id: number;
  readonly title: string;
  readonly director: string;
  readonly producer: string;
  readonly genre: string;
  readonly year: number;
  readonly description: string;
  readonly poster: string;
}