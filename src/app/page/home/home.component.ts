import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      const carouselTrack = document.querySelector('.carousel-track');
      if (carouselTrack) {
        const clone = carouselTrack.innerHTML;
        carouselTrack.innerHTML += clone;
      }
    });
  }
}
