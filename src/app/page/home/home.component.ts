import { Component, OnInit, OnDestroy } from '@angular/core';
import { IntegrationsComponent } from '../../components/integrations/integrations.component';
import { FeedbacksComponent } from "../../components/feedbacks/feedbacks.component";
import { SevendaystestComponent } from "../../components/sevendaystest/sevendaystest.component";
import throttle from 'lodash/throttle';
import { FaqComponent } from "../../components/faq/faq.component";

@Component({
  selector: 'atm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [IntegrationsComponent, FeedbacksComponent, SevendaystestComponent, FaqComponent]
})

export class HomeComponent implements OnInit, OnDestroy {
  private render!: () => void;

  ngOnInit() {
    if (typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', () => {
        const carouselTrack = document.querySelector('.carousel-track');
        if (carouselTrack) {
          const clone = carouselTrack.innerHTML;
          carouselTrack.innerHTML += clone;
        }

        const players = Array.from(document.querySelectorAll('.js-play-on-screen'));
        console.log('aaa', players);

        this.render = throttle(() => players.forEach(playAnimation), 150);

        function isOnScreen(el: any) {
          let rect = el.getBoundingClientRect();
          console.log('rect', rect);
          return rect.top > 0 && rect.bottom < window.innerHeight;
        }

        function playAnimation(el: any) {
          if (isOnScreen(el)) {
            el.style.fadeOut = 'running';
          }
        }

        this.render();

        window.addEventListener('scroll', this.render);
      });
    }
  }

  ngOnDestroy() {
    if (typeof document !== 'undefined') {
      window.removeEventListener('scroll', this.render);
    }
  }
}
