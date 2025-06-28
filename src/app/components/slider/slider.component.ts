import { CommonModule } from '@angular/common';
import { Component, Output, Input, EventEmitter, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Output() tiempoCambiado = new EventEmitter<Date>();
  @Input() horaBase: Date = new Date();

  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;

  modoManual: boolean = false;

  ngOnInit() {
    this.actualizarDesdeFecha(this.horaBase);
  }

  actualizarDesdeFecha(fecha: Date) {
    this.horas = fecha.getHours();
    this.minutos = fecha.getMinutes();
    this.segundos = fecha.getSeconds();
  }

  emitirCambio() {
    const nuevaHora = new Date(this.horaBase);
    nuevaHora.setHours(this.horas, this.minutos, this.segundos);
    this.tiempoCambiado.emit(nuevaHora);
  }

  toggleModoManual() {
    this.modoManual = !this.modoManual;

    if (!this.modoManual) {
      const ahora = new Date();
      this.actualizarDesdeFecha(ahora);
      this.tiempoCambiado.emit(ahora);
    } else {
      this.emitirCambio();
    }
  }

}
