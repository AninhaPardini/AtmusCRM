import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./page/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'atm-root',
  imports: [RouterOutlet, HomeComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AtmusCRM-landing';
}
