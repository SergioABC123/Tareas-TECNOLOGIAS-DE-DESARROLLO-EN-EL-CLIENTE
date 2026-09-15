import { Component } from '@angular/core';
import { PanelIzquierdo, Libro } from '../panel-izquierdo/panel-izquierdo';
import { PanelDerecho } from '../panel-derecho/panel-derecho';

@Component({
  selector: 'app-selector-padre',
  imports: [PanelIzquierdo, PanelDerecho],
  templateUrl: './selector-padre.html',
  styleUrl: './selector-padre.scss',
})
export class SelectorPadre {
  seleccionActual: Libro | null = null;

  onElementoSeleccionado(item: Libro): void {
    this.seleccionActual = item;
  }

  onLimpiarSeleccion(): void {
    this.seleccionActual = null;
  }
}