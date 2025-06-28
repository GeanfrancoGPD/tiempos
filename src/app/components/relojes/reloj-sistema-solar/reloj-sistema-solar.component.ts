import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reloj-sistema-solar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './reloj-sistema-solar.component.html',
  styleUrl: './reloj-sistema-solar.component.css'
})
export class RelojSistemaSolarComponent {
  @Input() hora = new Date();
  
  getHoraRot(): string {
    const h = this.hora.getHours();
    const hora12 = ((h - 6 + 12) % 12); // 6 AM = 0°
    const deg = (hora12 / 12) * 360;
    return `rotate(${deg}deg)`;
  }

  getMinRot(): string {
    const m = this.hora.getMinutes();
    return `rotate(${(m / 60) * 360}deg)`;
  }

  getSegRot(): string {
    const s = this.hora.getSeconds();
    return `rotate(${(s / 60) * 360}deg)`;
  }
}
