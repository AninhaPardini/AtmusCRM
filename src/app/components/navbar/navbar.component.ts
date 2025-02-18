import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'atm-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor() { }
}