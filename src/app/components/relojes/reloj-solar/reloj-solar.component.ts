import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reloj-solar',
  imports: [CommonModule],
  templateUrl: './reloj-solar.component.html',
  styleUrl: './reloj-solar.component.css'
})
export class RelojSolarComponent {
  @Input() hora: Date = new Date();

  getSombra60(valor: number): string {
    const grados = (valor / 60) * 180;
    return `rotate(${grados}deg)`;
  }

  // 🕰️ Para horas (6am a 6pm)
  getSombraHoras(hora: number, minuto: number): string {
    const totalMin = (hora * 60 + minuto) - 360; // desde 6am
    const grados = (totalMin / 720) * 180; // 12 horas = 720min
    const sombraDeg = Math.max(0, Math.min(grados, 180));
    return `rotate(${sombraDeg}deg)`;
  }

  getMarcas(total: number): number[] {
    return Array.from({ length: total }, (_, i) => i);
  }

}
