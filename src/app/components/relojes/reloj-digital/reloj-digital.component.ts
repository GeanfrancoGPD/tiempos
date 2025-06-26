import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reloj-Digital',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reloj-Digital.component.html',
  styleUrls: ['./reloj-Digital.component.css']
})
export class RelojDigitalComponent  {
  @Input() hora: Date = new Date();
}
