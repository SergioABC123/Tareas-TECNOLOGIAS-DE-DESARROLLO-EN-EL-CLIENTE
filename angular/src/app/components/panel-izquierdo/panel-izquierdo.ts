import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Libro {
  titulo: string;
  autor: string;
  anio: number;
  genero: string;
}

@Component({
  selector: 'app-panel-izquierdo',
  imports: [CommonModule],
  templateUrl: './panel-izquierdo.html',
  styleUrl: './panel-izquierdo.scss',
})
export class PanelIzquierdo {

  elementos: Libro[] = [
    {
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      anio: 1967,
      genero: 'Realismo mágico'
    },
    {
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
      anio: 1943,
      genero: 'Fábula'
    },
    {
      titulo: 'Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      anio: 1605,
      genero: 'Novela de caballería'
    },
    {
      titulo: 'Diario de Greg',
      autor: 'Jeff Kinney',
      anio: 2007,
      genero: 'Infantil / Humor'
    },
    {
      titulo: 'Harry Potter y la piedra filosofal',
      autor: 'J.K. Rowling',
      anio: 1997,
      genero: 'Fantasía'
    }
  ];

  @Input() seleccionado: Libro | null = null;
  @Output() elementoSeleccionado = new EventEmitter<Libro>();

  seleccionar(item: Libro): void {
    this.elementoSeleccionado.emit(item);
  }
}