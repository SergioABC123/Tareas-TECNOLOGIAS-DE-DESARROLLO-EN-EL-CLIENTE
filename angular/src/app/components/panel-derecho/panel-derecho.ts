import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro } from '../panel-izquierdo/panel-izquierdo';

@Component({
  selector: 'app-panel-derecho',
  imports: [CommonModule],
  templateUrl: './panel-derecho.html',
  styleUrl: './panel-derecho.scss'
})
export class PanelDerecho {
  @Input() seleccionado: Libro | null = null;
  @Output() limpiarSeleccion = new EventEmitter<void>();

  limpiar(): void {
    this.limpiarSeleccion.emit();
  }
}