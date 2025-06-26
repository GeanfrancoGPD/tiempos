import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Hora actual: {{ hora | date:'mediumTime' }}</p>
  `
})
export class TimeComponent implements OnInit {
  hora: Date = new Date();

  @Output() horaActual = new EventEmitter<Date>();

  ngOnInit() {
    this.horaActual.emit(this.hora); // Emitir hora inicial

    setInterval(() => {
      this.hora = new Date();
      this.horaActual.emit(this.hora); // Emitir cada segundo
    }, 1000);
  }
}
