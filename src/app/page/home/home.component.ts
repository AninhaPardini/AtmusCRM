import { Component, OnInit } from '@angular/core';
import { IntegrationsComponent } from '../../components/integrations/integrations.component';

@Component({
  selector: 'atm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [IntegrationsComponent]
})
export class HomeComponent implements OnInit {
  ngOnInit() {

    if (typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', function() {
        const carouselTrack = document.querySelector('.carousel-track');
        if (carouselTrack) {
          const clone = carouselTrack.innerHTML;
          carouselTrack.innerHTML += clone;
        }
      });
    }
  }
}
