import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-reloj-vela',
  templateUrl: './reloj-vela.component.html',
  styleUrls: ['./reloj-vela.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RelojVelaComponent implements OnChanges {
  @Input() hora: Date = new Date();

  alturaHoras = 100;   // % de altura para la vela de horas
  alturaMinutos = 100; // % para minutos
  alturaSegundos = 100;// % para segundos

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hora']) {
      this.actualizarEstado();
    }
  }

  actualizarEstado() {
    const h = this.hora.getHours() % 12;
    const m = this.hora.getMinutes();
    const s = this.hora.getSeconds();

    // Opción 1: las velas bajan con el tiempo
    this.alturaHoras = ((12 - h) / 12) * 100;
    this.alturaMinutos = ((60 - m) / 60) * 100;
    this.alturaSegundos = ((60 - s) / 60) * 100;

    // Opción 2: descomenta si prefieres que las velas suban con el tiempo
    console.log('Horas:', this.alturaHoras);
    console.log('min:', this.alturaMinutos);
    console.log('seg:', this.alturaSegundos);

    
  }
}
