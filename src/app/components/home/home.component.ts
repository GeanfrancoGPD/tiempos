import { Component } from '@angular/core';
import { TimeComponent } from '../time/time.component';
import { RelojArenaComponent } from '../relojes/reloj-arena/reloj-arena.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RelojDigitalComponent } from '../relojes/reloj-digital/reloj-digital.component';
import { RelojAnalogicoComponent } from "../relojes/reloj-analogico/reloj-analogico.component";
import { RelojVelaComponent } from "../relojes/reloj-vela/reloj-vela.component";
import { RelojSolarComponent } from "../relojes/reloj-solar/reloj-solar.component";
import { RelojSistemaSolarComponent } from "../relojes/reloj-sistema-solar/reloj-sistema-solar.component";
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TimeComponent, RelojArenaComponent, FormsModule, CommonModule,
    RelojDigitalComponent, RelojAnalogicoComponent, RelojVelaComponent, RelojSolarComponent, 
    RelojSistemaSolarComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hora: Date = new Date();
  seleccion = '1';
  manual = false;

  actualizarHora(horaRecibida: Date) {
    this.hora = horaRecibida;
  }

  onTiempoCambiado(horaManual: Date) {
    this.manual = true;
    this.hora = horaManual;
  }
}
