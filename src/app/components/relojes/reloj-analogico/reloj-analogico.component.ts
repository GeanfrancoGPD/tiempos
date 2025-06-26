import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reloj-analogico',
  templateUrl: './reloj-analogico.component.html',
  styleUrls: ['./reloj-analogico.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class RelojAnalogicoComponent implements OnChanges {
  @Input() hora: Date = new Date();

  rotacionHora = '';
  rotacionMinuto = '';
  rotacionSegundo = '';

  numeros = Array.from({ length: 12 }, (_, i) => i + 1);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['hora']) {
      this.actualizarRotaciones();
    }
  }

  actualizarRotaciones() {
    const h = this.hora.getHours() % 12;
    const m = this.hora.getMinutes();
    const s = this.hora.getSeconds();

    const gradosHora = (h + m / 60) * 30;
    const gradosMinuto = (m + s / 60) * 6;
    const gradosSegundo = s * 6;

    this.rotacionHora = `rotate(${gradosHora}deg)`;
    this.rotacionMinuto = `rotate(${gradosMinuto}deg)`;
    this.rotacionSegundo = `rotate(${gradosSegundo}deg)`;
  }

  getEstiloNumero(numero: number): any {
    const angulo = (numero * 30 - 90) * (Math.PI / 180); // 30° por número
    const radio = 85; // radio del círculo (px desde el centro)
    const centroX = 100;
    const centroY = 100;

    const x = centroX + radio * Math.cos(angulo);
    const y = centroY + radio * Math.sin(angulo);

    return {
      top: `${y}px`,
      left: `${x}px`
    };
  }
}
