import { Component, OnInit, OnDestroy } from '@angular/core';
import { IntegrationsComponent } from '../../components/integrations/integrations.component';
import { FeedbacksComponent } from "../../components/feedbacks/feedbacks.component";
import { SevendaystestComponent } from "../../components/sevendaystest/sevendaystest.component";
import throttle from 'lodash/throttle';
import { FaqComponent } from "../../components/faq/faq.component";
import { PlansComponent } from "../../components/plans/plans.component";

@Component({
  selector: 'atm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [IntegrationsComponent, FeedbacksComponent, SevendaystestComponent, FaqComponent, PlansComponent]
})

export class HomeComponent implements OnInit, OnDestroy {
  private render!: () => void;

  ngOnInit() {
    if (typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', () => {
        const players = Array.from(document.querySelectorAll('.js-play-on-screen'));
        console.log('aaa', players);

        this.render = throttle(() => players.forEach(playAnimation), 150);

        function isOnScreen(el: any) {
          let rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }

        function playAnimation(el: any) {
          if (isOnScreen(el)) {
            el.style.animationPlayState = 'running';
          }
        }

        this.render();

        window.addEventListener('scroll', this.render);
        window.addEventListener('resize', this.render);
        document.addEventListener('touchstart', this.render);
        document.addEventListener('touchmove', this.render);
        document.addEventListener('touchend', this.render);

        this.render();
      });
    }
  }

  ngOnDestroy() {
    if (typeof document !== 'undefined') {
      window.removeEventListener('scroll', this.render);
    }
  }
}