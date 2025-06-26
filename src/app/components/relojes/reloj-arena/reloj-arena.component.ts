import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reloj-arena',
  templateUrl: './reloj-arena.component.html',
  styleUrls: ['./reloj-arena.component.css'],
  imports: [CommonModule]
})
export class RelojArenaComponent implements OnChanges {
  @Input() hora: Date = new Date();

  unidades = [
    { label: 'Horas', total: 24 },
    { label: 'Minutos', total: 60 },
    { label: 'Segundos', total: 60 }
  ];

  porcentajeHora = 0;
  porcentajeMinuto = 0;
  porcentajeSegundo = 0;

  ngOnChanges() {
    this.actualizarPorcentajes();
  }

  actualizarPorcentajes() {
    const h = this.hora.getHours();
    const m = this.hora.getMinutes();
    const s = this.hora.getSeconds();

    this.porcentajeHora = h / 24;
    this.porcentajeMinuto = m / 60;
    this.porcentajeSegundo = s / 60;
  }

  getTopStyle(unidad: any) {
    const porcentaje = this.getPorcentaje(unidad.label);
    return {
      height: `${(1 - porcentaje) * 50}%`,
      top: '0'
    };
  }

  getBottomStyle(unidad: any) {
    const porcentaje = this.getPorcentaje(unidad.label);
    return {
      height: `${porcentaje * 50}%`,
      bottom: '0'
    };
  }

  private getPorcentaje(label: string): number {
    if (label === 'Horas') return this.porcentajeHora;
    if (label === 'Minutos') return this.porcentajeMinuto;
    return this.porcentajeSegundo;
  }
}
