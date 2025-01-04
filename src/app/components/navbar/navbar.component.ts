import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'atm-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private lastScrollTop = 0;
  public isVisible = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  private onScroll(): void {
    const scrollTop = window.pageYOffset || (typeof document !== 'undefined' && document.documentElement ? document.documentElement.scrollTop : 0);

    if (scrollTop > this.lastScrollTop) {
      // Scrolling down
      this.isVisible = false;
    } else {
      // Scrolling up
      this.isVisible = true;
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}