import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atm-feedbacks',
  imports: [],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent implements OnInit {
  ngOnInit() {

    if (typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', function () {
        const carouselTrack = document.querySelector('.carousel-track');
        if (carouselTrack) {
          const clone = carouselTrack.innerHTML;
          carouselTrack.innerHTML += clone;
        }
      });
    }
  }
}
